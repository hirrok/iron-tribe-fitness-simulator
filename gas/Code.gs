// ============================================================
// IRON TRIBE FITNESS GYM — GAS Web App Backend
// Aurora Digital Foundry — Infrastructure Stack v1.1
// ============================================================
// Deploy: Extensions > Apps Script > Deploy > New Deployment
//   Type: Web App | Execute as: Me | Access: Anyone
// Copy the deployed URL into REACT_CONFIG.GAS_URL in index.html
// ============================================================

var SPREADSHEET_ID = ''; // ← Paste your Google Sheet ID here after setup

// Sheet names — must match Setup.gs
var SHEETS = {
  MEMBERS:      'Members',
  LEADS:        'Leads',
  COACHES:      'Coaches',
  BOOKINGS:     'Bookings',
  CHALLENGES:   'Challenges',
  REVIEWS:      'Reviews',
  TRANSACTIONS: 'Transactions',
  SETTINGS:     'Settings',
};

// ============================================================
// CORS + RESPONSE HELPERS
// ============================================================

function respond(data) {
  var output = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}

function ok(data) {
  return respond({ ok: true, data: data });
}

function err(msg) {
  return respond({ ok: false, error: msg });
}

// ============================================================
// ENTRY POINTS
// ============================================================

function doGet(e) {
  try {
    var action = e.parameter.action;
    var sheet  = e.parameter.sheet;
    if (!action) return err('Missing action');

    switch (action) {
      case 'getAll':    return ok(getAll(sheet));
      case 'getById':   return ok(getById(sheet, e.parameter.id));
      case 'getSettings': return ok(getSettings());
      case 'getDashboard': return ok(getDashboard());
      case 'getPL':     return ok(getPL());
      default:          return err('Unknown action: ' + action);
    }
  } catch(ex) {
    return err(ex.message);
  }
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var action  = payload.action;
    var sheet   = payload.sheet;
    var row     = payload.row;

    switch (action) {
      case 'insert':       return ok(insertRow(sheet, row));
      case 'update':       return ok(updateRow(sheet, row));
      case 'delete':       return ok(deleteRow(sheet, row.id));
      case 'saveSettings': return ok(saveSettings(payload.settings));
      default:             return err('Unknown action: ' + action);
    }
  } catch(ex) {
    return err(ex.message);
  }
}

// ============================================================
// GENERIC CRUD
// ============================================================

function getSheet(name) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sh = ss.getSheetByName(name);
  if (!sh) throw new Error('Sheet not found: ' + name);
  return sh;
}

function getAll(sheetName) {
  var sh = getSheet(sheetName);
  var data = sh.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  return data.slice(1).map(function(row) {
    return rowToObj(headers, row);
  });
}

function getById(sheetName, id) {
  var rows = getAll(sheetName);
  return rows.find(function(r) { return r.id === id; }) || null;
}

function insertRow(sheetName, rowObj) {
  var sh = getSheet(sheetName);
  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  rowObj.id = Utilities.getUuid();
  rowObj.createdAt = new Date().toISOString();
  rowObj.updatedAt = new Date().toISOString();
  var row = headers.map(function(h) { return rowObj[h] !== undefined ? rowObj[h] : ''; });
  sh.appendRow(row);
  return rowObj;
}

function updateRow(sheetName, rowObj) {
  var sh = getSheet(sheetName);
  var data = sh.getDataRange().getValues();
  var headers = data[0];
  var idCol = headers.indexOf('id');
  if (idCol < 0) throw new Error('No id column in ' + sheetName);
  rowObj.updatedAt = new Date().toISOString();
  for (var i = 1; i < data.length; i++) {
    if (data[i][idCol] === rowObj.id) {
      var updatedRow = headers.map(function(h) {
        return rowObj[h] !== undefined ? rowObj[h] : data[i][headers.indexOf(h)];
      });
      sh.getRange(i + 1, 1, 1, headers.length).setValues([updatedRow]);
      return rowObj;
    }
  }
  throw new Error('Row not found: ' + rowObj.id);
}

function deleteRow(sheetName, id) {
  var sh = getSheet(sheetName);
  var data = sh.getDataRange().getValues();
  var headers = data[0];
  var idCol = headers.indexOf('id');
  if (idCol < 0) throw new Error('No id column in ' + sheetName);
  for (var i = 1; i < data.length; i++) {
    if (data[i][idCol] === id) {
      sh.deleteRow(i + 1);
      return { deleted: id };
    }
  }
  throw new Error('Row not found: ' + id);
}

function rowToObj(headers, row) {
  var obj = {};
  headers.forEach(function(h, i) { obj[h] = row[i]; });
  return obj;
}

// ============================================================
// SETTINGS (key-value sheet)
// ============================================================

function getSettings() {
  var sh = getSheet(SHEETS.SETTINGS);
  var data = sh.getDataRange().getValues();
  var settings = {};
  data.slice(1).forEach(function(row) {
    if (row[0]) settings[row[0]] = row[1];
  });
  return settings;
}

function saveSettings(newSettings) {
  var sh = getSheet(SHEETS.SETTINGS);
  var data = sh.getDataRange().getValues();
  var headers = data[0];
  // Update existing keys
  for (var i = 1; i < data.length; i++) {
    var key = data[i][0];
    if (newSettings.hasOwnProperty(key)) {
      sh.getRange(i + 1, 2).setValue(newSettings[key]);
      delete newSettings[key];
    }
  }
  // Append new keys
  Object.keys(newSettings).forEach(function(key) {
    sh.appendRow([key, newSettings[key]]);
  });
  return getSettings();
}

// ============================================================
// DASHBOARD AGGREGATE
// ============================================================

function getDashboard() {
  var members     = getAll(SHEETS.MEMBERS);
  var leads       = getAll(SHEETS.LEADS);
  var bookings    = getAll(SHEETS.BOOKINGS);
  var transactions = getAll(SHEETS.TRANSACTIONS);
  var coaches     = getAll(SHEETS.COACHES);
  var challenges  = getAll(SHEETS.CHALLENGES);
  var reviews     = getAll(SHEETS.REVIEWS);

  var activeMembers = members.filter(function(m) { return m.status === 'Active'; });
  var openLeads     = leads.filter(function(l) { return l.status !== 'Closed' && l.status !== 'Converted'; });
  var activeCoaches = coaches.filter(function(c) { return c.status === 'Active'; });

  var today = new Date().toISOString().slice(0, 10);
  var todayBookings = bookings.filter(function(b) { return b.date === today; });

  var thisMonth = new Date().toISOString().slice(0, 7);
  var monthRevenue = transactions
    .filter(function(t) { return t.type === 'Revenue' && String(t.date).slice(0, 7) === thisMonth; })
    .reduce(function(sum, t) { return sum + (parseFloat(t.amount) || 0); }, 0);

  var avgRating = reviews.length
    ? (reviews.reduce(function(s, r) { return s + (parseFloat(r.rating) || 0); }, 0) / reviews.length).toFixed(1)
    : '—';

  var activeChallenges = challenges.filter(function(c) { return c.status === 'Active'; });

  return {
    totalMembers:    members.length,
    activeMembers:   activeMembers.length,
    openLeads:       openLeads.length,
    totalLeads:      leads.length,
    activeCoaches:   activeCoaches.length,
    todayBookings:   todayBookings.length,
    monthRevenue:    monthRevenue,
    avgRating:       avgRating,
    activeChallenges: activeChallenges.length,
    recentMembers:   members.slice(-5).reverse(),
    recentLeads:     leads.slice(-5).reverse(),
    todaySchedule:   todayBookings.slice(0, 10),
  };
}

// ============================================================
// P&L AGGREGATE
// ============================================================

function getPL() {
  var transactions = getAll(SHEETS.TRANSACTIONS);

  var now   = new Date();
  var year  = now.getFullYear();
  var month = now.getMonth();

  function inMonth(t, y, m) {
    var d = new Date(t.date);
    return d.getFullYear() === y && d.getMonth() === m;
  }

  function inYear(t, y) {
    return new Date(t.date).getFullYear() === y;
  }

  function sum(arr, type) {
    return arr
      .filter(function(t) { return t.type === type; })
      .reduce(function(s, t) { return s + (parseFloat(t.amount) || 0); }, 0);
  }

  var mtd = transactions.filter(function(t) { return inMonth(t, year, month); });
  var ytd = transactions.filter(function(t) { return inYear(t, year); });
  var prevMonth = month === 0
    ? transactions.filter(function(t) { return inMonth(t, year - 1, 11); })
    : transactions.filter(function(t) { return inMonth(t, year, month - 1); });

  function pl(arr) {
    var rev  = sum(arr, 'Revenue');
    var exp  = sum(arr, 'Expense');
    var gross = rev - exp;
    var tax   = gross > 0 ? gross * 0.25 : 0;
    var net   = gross - tax;
    return {
      revenue: rev, expenses: exp,
      gross: gross, tax: tax, net: net,
      margin: rev > 0 ? ((net / rev) * 100).toFixed(1) : '0.0',
    };
  }

  // Expense breakdown by category
  var expCategories = {};
  transactions
    .filter(function(t) { return t.type === 'Expense' && inMonth(t, year, month); })
    .forEach(function(t) {
      var cat = t.category || 'Other';
      expCategories[cat] = (expCategories[cat] || 0) + (parseFloat(t.amount) || 0);
    });

  // Monthly trend (last 6 months)
  var trend = [];
  for (var i = 5; i >= 0; i--) {
    var d = new Date(year, month - i, 1);
    var y2 = d.getFullYear(), m2 = d.getMonth();
    var slice = transactions.filter(function(t) { return inMonth(t, y2, m2); });
    var monthName = d.toLocaleString('default', { month: 'short' });
    trend.push({
      month: monthName + ' ' + y2,
      revenue: sum(slice, 'Revenue'),
      expenses: sum(slice, 'Expense'),
    });
  }

  return {
    mtd: pl(mtd),
    ytd: pl(ytd),
    prevMonth: pl(prevMonth),
    expenseBreakdown: expCategories,
    trend: trend,
    recentTransactions: transactions.slice(-20).reverse(),
  };
}

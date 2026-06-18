// ============================================================
// IRON TRIBE FITNESS GYM — Sheet Initializer
// Run this ONCE after creating a new Google Sheet.
// Extensions > Apps Script > Run > initializeSheets()
// ============================================================

function initializeSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Delete default 'Sheet1' if empty
  var defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) ss.deleteSheet(defaultSheet);

  createSheet(ss, 'Members', [
    'id','name','phone','email','plan','status',
    'joinDate','endDate','emergencyContact','emergencyPhone','notes',
    'createdAt','updatedAt'
  ]);

  createSheet(ss, 'Leads', [
    'id','name','phone','email','source','status',
    'interestedIn','dateAdded','followUpDate','assignedCoach','notes',
    'createdAt','updatedAt'
  ]);

  createSheet(ss, 'Coaches', [
    'id','name','phone','email','specialization','schedule',
    'status','joinDate','bio','certifications','notes',
    'createdAt','updatedAt'
  ]);

  createSheet(ss, 'Bookings', [
    'id','memberId','memberName','coachId','coachName',
    'class','date','time','duration','status','notes',
    'createdAt','updatedAt'
  ]);

  createSheet(ss, 'Challenges', [
    'id','title','description','category','startDate','endDate',
    'maxParticipants','participants','prize','status','notes',
    'createdAt','updatedAt'
  ]);

  createSheet(ss, 'Reviews', [
    'id','memberName','memberEmail','rating','text','platform',
    'date','status','response','createdAt','updatedAt'
  ]);

  createSheet(ss, 'Transactions', [
    'id','type','category','description','amount','date',
    'paymentMethod','reference','notes','createdAt','updatedAt'
  ]);

  createSheet(ss, 'Settings', ['key','value']);
  seedSettings(ss);
  seedSampleData(ss);

  SpreadsheetApp.getUi().alert('✅ Iron Tribe sheets initialized successfully!');
}

function createSheet(ss, name, headers) {
  var existing = ss.getSheetByName(name);
  if (existing) {
    Logger.log('Sheet already exists: ' + name);
    return existing;
  }
  var sh = ss.insertSheet(name);
  sh.appendRow(headers);
  // Style header row
  var headerRange = sh.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#0A0A0A');
  headerRange.setFontColor('#C9A84C');
  headerRange.setFontWeight('bold');
  sh.setFrozenRows(1);
  return sh;
}

function seedSettings(ss) {
  var sh = ss.getSheetByName('Settings');
  if (!sh) return;
  var settings = [
    ['gymName',         'Iron Tribe Fitness Gym'],
    ['address',         'Malvar, Batangas, Philippines'],
    ['phone',           '+63 (XXX) XXX-XXXX'],
    ['email',           'irontribe@email.com'],
    ['facebook',        'https://www.facebook.com/IronTribeFitnessGym'],
    ['instagram',       ''],
    ['openTime',        '5:00 AM'],
    ['closeTime',       '10:00 PM'],
    ['currency',        'PHP'],
    ['taxRate',         '0.25'],
    ['monthlyPlan',     '1500'],
    ['quarterlyPlan',   '4000'],
    ['annualPlan',      '14000'],
    ['pinCode',         'irontribe2026'],
  ];
  settings.forEach(function(row) { sh.appendRow(row); });
}

function seedSampleData(ss) {
  // Seed Members
  var members = [
    ['', 'Maria Santos',  '+63 917 111 1111', 'maria@email.com',  'Monthly',   'Active',   '2024-01-15', '2026-07-15', 'Jose Santos',    '+63 917 111 2222', 'Reg member', '', ''],
    ['', 'Carlos Reyes',  '+63 918 222 2222', 'carlos@email.com', 'Quarterly', 'Active',   '2024-03-01', '2026-09-01', 'Ana Reyes',      '+63 918 222 3333', '',           '', ''],
    ['', 'Ana Villanueva','+63 919 333 3333', 'ana@email.com',    'Annual',    'Active',   '2024-06-10', '2027-06-10', 'Pedro Villanueva','+63 919 333 4444','',           '', ''],
    ['', 'Mark Dela Cruz','+63 916 444 4444', 'mark@email.com',   'Monthly',   'Inactive', '2023-09-01', '2026-04-01', 'Liza Dela Cruz', '+63 916 444 5555', 'Lapsed',     '', ''],
    ['', 'Jenny Ocampo',  '+63 915 555 5555', 'jenny@email.com',  'Monthly',   'Active',   '2025-01-20', '2026-07-20', 'Ben Ocampo',     '+63 915 555 6666', '',           '', ''],
  ];
  seedRows(ss, 'Members', members);

  // Seed Leads
  var leads = [
    ['', 'Leo Pascual',   '+63 917 666 6666', 'leo@email.com',    'Facebook',  'New',       'Weight Loss', '2026-06-15', '2026-06-20', 'Coach Mike', '',  '', ''],
    ['', 'Rosa Mendez',   '+63 918 777 7777', 'rosa@email.com',   'Walk-in',   'Contacted', 'Strength',    '2026-06-14', '2026-06-19', 'Coach Jane', '',  '', ''],
    ['', 'Felix Bautista','+63 919 888 8888', 'felix@email.com',  'Referral',  'Toured',    'MMA',         '2026-06-10', '2026-06-18', 'Coach Mike', '',  '', ''],
  ];
  seedRows(ss, 'Leads', leads);

  // Seed Coaches
  var coaches = [
    ['', 'Mike Torres',   '+63 917 100 0001', 'mike@irontribe.com',  'Strength & Conditioning', 'Mon-Fri 6AM-2PM',  'Active', '2022-01-10', 'Head coach, 8 yrs exp', 'NSCA-CSCS', '', '', ''],
    ['', 'Jane Cruz',     '+63 918 100 0002', 'jane@irontribe.com',  'Yoga & Flexibility',      'Mon/Wed/Fri 6-9PM', 'Active', '2023-03-15', 'Yoga RYT-200',          'RYT-200',   '', '', ''],
    ['', 'Rico Navarro',  '+63 919 100 0003', 'rico@irontribe.com',  'Boxing & MMA',            'Tue/Thu/Sat 8AM-4PM','Active','2023-08-01', 'Former amateur boxer',  'PABA cert', '', '', ''],
  ];
  seedRows(ss, 'Coaches', coaches);

  // Seed Bookings
  var today = new Date().toISOString().slice(0,10);
  var bookings = [
    ['', '', 'Maria Santos',   '', 'Coach Mike', 'Strength Class', today, '6:00 AM', '60', 'Confirmed', '', '', ''],
    ['', '', 'Carlos Reyes',   '', 'Coach Rico', 'Boxing Class',   today, '8:00 AM', '60', 'Confirmed', '', '', ''],
    ['', '', 'Ana Villanueva', '', 'Coach Jane', 'Yoga Session',   today, '6:00 PM', '60', 'Confirmed', '', '', ''],
  ];
  seedRows(ss, 'Bookings', bookings);

  // Seed Transactions
  var transactions = [
    ['', 'Revenue', 'Membership',    'Monthly membership - Maria Santos',    '1500', '2026-06-01', 'Cash', 'INV-001', '', '', ''],
    ['', 'Revenue', 'Membership',    'Quarterly membership - Carlos Reyes',  '4000', '2026-06-01', 'GCash','INV-002', '', '', ''],
    ['', 'Revenue', 'Membership',    'Monthly membership - Jenny Ocampo',    '1500', '2026-06-01', 'Cash', 'INV-003', '', '', ''],
    ['', 'Revenue', 'Merchandise',   'Iron Tribe shirt + shorts bundle',     '850',  '2026-06-05', 'Cash', 'INV-004', '', '', ''],
    ['', 'Revenue', 'Personal Training','PT session - 5 pack',               '3500', '2026-06-08', 'GCash','INV-005', '', '', ''],
    ['', 'Revenue', 'Drop-in',       'Day pass x 3',                         '450',  '2026-06-10', 'Cash', 'INV-006', '', '', ''],
    ['', 'Revenue', 'Membership',    'Monthly renewals batch',               '6000', '2026-06-15', 'Cash', 'INV-007', '', '', ''],
    ['', 'Expense', 'Utilities',     'Electricity - June',                   '8500', '2026-06-01', 'Bank', 'EXP-001', '', '', ''],
    ['', 'Expense', 'Rent',          'Gym space rent - June',                '25000','2026-06-01', 'Bank', 'EXP-002', '', '', ''],
    ['', 'Expense', 'Payroll',       'Coach salaries - June',                '30000','2026-06-15', 'Bank', 'EXP-003', '', '', ''],
    ['', 'Expense', 'Supplies',      'Cleaning + hygiene supplies',          '2500', '2026-06-05', 'Cash', 'EXP-004', '', '', ''],
    ['', 'Expense', 'Equipment',     'Resistance bands x10 replacement',     '3500', '2026-06-10', 'Cash', 'EXP-005', '', '', ''],
    ['', 'Expense', 'Marketing',     'Facebook ads - June',                  '1500', '2026-06-01', 'Card', 'EXP-006', '', '', ''],
    ['', 'Expense', 'Internet',      'Fiber monthly',                        '2500', '2026-06-01', 'Bank', 'EXP-007', '', '', ''],
  ];
  seedRows(ss, 'Transactions', transactions);

  // Seed Challenges
  var challenges = [
    ['', '30-Day Body Recomp', 'Full body transformation challenge', 'Physique', '2026-06-01', '2026-06-30', '20', '12', 'PHP 5,000 + Trophy', 'Active', '', '', ''],
    ['', '100 Push-up Challenge', 'Build to 100 consecutive push-ups', 'Strength', '2026-06-15', '2026-07-15', '30', '18', 'Iron Tribe Hoodie', 'Active', '', '', ''],
  ];
  seedRows(ss, 'Challenges', challenges);

  // Seed Reviews
  var reviews = [
    ['', 'Maria Santos',   'maria@email.com',  '5', 'Best gym in Malvar! Coaches are amazing and the equipment is top notch.', 'Facebook', '2026-05-20', 'Published', '', '', ''],
    ['', 'Carlos Reyes',   'carlos@email.com', '5', 'Iron Tribe changed my life. Down 15kg in 4 months. Highly recommend!',   'Google',   '2026-05-28', 'Published', '', '', ''],
    ['', 'Ana Villanueva', 'ana@email.com',     '4', 'Great community, supportive coaches. Parking can be tight on weekends.', 'Google',   '2026-06-05', 'Published', 'Thanks Ana! Working on the parking situation.', '', ''],
  ];
  seedRows(ss, 'Reviews', reviews);
}

function seedRows(ss, sheetName, rows) {
  var sh = ss.getSheetByName(sheetName);
  if (!sh) return;
  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  rows.forEach(function(row) {
    // Assign UUID to id column (index 0)
    row[0] = Utilities.getUuid();
    // Assign timestamps to last two columns
    var now = new Date().toISOString();
    row[row.length - 2] = now;
    row[row.length - 1] = now;
    sh.appendRow(row);
  });
}

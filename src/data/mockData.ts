// Iron Tribe Fitness Gym — Mock Data
// Aurora Digital Foundry | Data Spine

export const GYM_INFO = {
  name: 'Iron Tribe Fitness Gym',
  tagline: "The fitness home for Malvar!",
  address: '4F Noli Rose Bldg, 474 J.P. Laurel Highway, Poblacion, Malvar, Batangas 4233',
  phone: '+63 956 700 7785',
  hours: '8:00 AM – 10:00 PM daily',
  facebook: 'Iron-Tribe Fitness Gym',
  instagram: '@irontribefitnessgym',
};

export const PRICING = {
  studentMonthly: 799,
  regularMonthly: 999,
  annualRegular: 8000,
  annualStudent: 6000,
};

export const COACHES = [
  {
    id: 'JM',
    name: 'Coach Jun Mendoza',
    title: 'Head Coach — Strength & Conditioning',
    initials: 'JM',
    color: 'from-red-700 to-red-900',
    members: 23,
    utilization: 96,
    retention: 94,
    experience: '8 years',
    tags: ['Powerlifting', 'Barbell Programming', 'Mobility', 'Injury Prevention'],
    bio: 'With 8 years of coaching experience, Coach Jun has trained competitive athletes and everyday gym-goers to hit PRs they never thought possible.',
  },
  {
    id: 'AR',
    name: 'Coach Ana Reyes',
    title: 'Nutrition & Body Composition Specialist',
    initials: 'AR',
    color: 'from-purple-700 to-purple-900',
    members: 18,
    utilization: 90,
    retention: 92,
    experience: '5 years',
    tags: ['Nutrition Coaching', 'Body Recomposition', 'Fat Loss', 'Assessment'],
    bio: '5 years of evidence-based nutrition coaching. Specializes in body recomposition through smart training and practical nutrition strategies.',
  },
  {
    id: 'PS',
    name: 'Coach Paolo Santos',
    title: 'Calisthenics & Athletic Performance',
    initials: 'PS',
    color: 'from-green-700 to-green-900',
    members: 14,
    utilization: 70,
    retention: 98,
    experience: '6 years',
    tags: ['Calisthenics', 'Skills Training', 'Flexibility', 'Gymnastics'],
    bio: 'Former competitive gymnast. Takes members from first pull-up to advanced skills through progressive, systematic training.',
  },
  {
    id: 'RL',
    name: 'Coach Rica Lim',
    title: 'Group Classes & Cardio Conditioning',
    initials: 'RL',
    color: 'from-amber-700 to-amber-900',
    members: 12,
    utilization: 60,
    retention: 88,
    experience: '4 years',
    tags: ['Group Classes', 'HIIT', 'Cardio', 'Functional Fitness'],
    bio: 'High-energy group class specialist. Her Evening HIIT class consistently sells out.',
  },
];

export const MEMBERS = [
  { id: 1, name: 'Maria Santos', goal: 'Fat Loss', program: 'Body Composition', coach: 'Coach Ana', plan: 'Regular', joinDate: '2026-01-15', lastVisit: 'Today', attendance: 92, status: 'Active' },
  { id: 2, name: 'Carlo Reyes', goal: 'Muscle Building', program: 'Strength', coach: 'Coach Jun', plan: 'Annual', joinDate: '2025-12-01', lastVisit: 'Yesterday', attendance: 87, status: 'Active' },
  { id: 3, name: 'Jennica Aquino', goal: 'Body Recomp', program: 'Body Composition', coach: 'Coach Ana', plan: 'Student', joinDate: '2026-02-10', lastVisit: 'Today', attendance: 95, status: 'Active' },
  { id: 4, name: 'Marco Villanueva', goal: 'Strength', program: 'Powerlifting', coach: 'Coach Jun', plan: 'Annual', joinDate: '2025-11-20', lastVisit: 'Jun 7', attendance: 78, status: 'Active' },
  { id: 5, name: 'Andrea Dela Cruz', goal: 'Calisthenics', program: 'Skills', coach: 'Coach Paolo', plan: 'Student', joinDate: '2026-03-01', lastVisit: 'Yesterday', attendance: 83, status: 'Active' },
  { id: 6, name: 'Maria Cruz', goal: 'Fat Loss', program: 'Group Classes', coach: 'Coach Rica', plan: 'Regular', joinDate: '2026-01-05', lastVisit: 'Jun 1', attendance: 32, status: 'At Risk' },
  { id: 7, name: 'Benj Ocampo', goal: 'Muscle Building', program: 'Strength', coach: 'Coach Jun', plan: 'Regular', joinDate: '2026-02-20', lastVisit: 'Jun 2', attendance: 41, status: 'At Risk' },
  { id: 8, name: 'Sofia Gomez', goal: 'General Fitness', program: 'Body Composition', coach: 'Coach Ana', plan: 'Student', joinDate: '2026-03-15', lastVisit: 'Today', attendance: 88, status: 'Active' },
  { id: 9, name: 'Jason Bautista', goal: 'Weight Loss', program: 'Mixed', coach: 'Coach Jun', plan: 'Annual', joinDate: '2026-01-01', lastVisit: 'Jun 8', attendance: 91, status: 'Active' },
  { id: 10, name: 'Liza Torres', goal: 'Cardio Fitness', program: 'Group Classes', coach: 'Coach Rica', plan: 'Regular', joinDate: '2026-02-01', lastVisit: 'Yesterday', attendance: 76, status: 'Active' },
];

export const METRICS = {
  mtdRevenue: 87500,
  revenueTarget: 100000,
  activeMembers: 67,
  atRiskMembers: 5,
  newLeads: 7,
  trialsScheduled: 4,
  conversions: 11,
  conversionRate: 73,
  attendanceToday: 31,
  attendancePct: 46,
};

export const CLASSES = [
  { name: 'Morning Strength', days: 'Mon/Wed/Fri', time: '6:00 AM', coach: 'Coach Jun', booked: 8, capacity: 12 },
  { name: 'Body Composition', days: 'Mon/Wed/Fri', time: '9:00 AM', coach: 'Coach Ana', booked: 11, capacity: 12 },
  { name: 'Calisthenics Flow', days: 'Mon/Wed/Fri', time: '5:00 PM', coach: 'Coach Paolo', booked: 5, capacity: 10 },
  { name: 'Evening HIIT', days: 'Mon/Wed/Fri', time: '7:00 PM', coach: 'Coach Rica', booked: 12, capacity: 12 },
  { name: 'Athletic Conditioning', days: 'Tue/Thu/Sat', time: '7:00 AM', coach: 'Coach Paolo', booked: 4, capacity: 10 },
  { name: 'Strength & Stretch', days: 'Tue/Thu/Sat', time: '10:00 AM', coach: 'Coach Ana', booked: 7, capacity: 12 },
  { name: 'Cardio Burn', days: 'Tue/Thu/Sat', time: '5:00 PM', coach: 'Coach Rica', booked: 9, capacity: 12 },
  { name: 'Community Strength', days: 'Saturday', time: '8:00 AM', coach: 'Coach Jun', booked: 10, capacity: 20 },
];

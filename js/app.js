// ===== DATA STORE =====
const store = {
  patients: [
    { id: 1, firstName: 'Maria', lastName: 'Santos', code: 'DC-2026-001', phone: '0917 123 4567', email: 'maria.santos@email.com', dob: '1985-03-15', gender: 'female', address: 'Block 6 Lot 2, Sample Subdivision, City', medicalHistory: 'Hypertension (controlled). No known drug allergies. Previous dental work: 2 fillings (2019).', allergies: 'None known', lastVisit: 'Jun 15, 2026', nextAppt: 'Jun 25, 2026', status: 'active' },
    { id: 2, firstName: 'Juan', lastName: 'Cruz', code: 'DC-2026-002', phone: '0918 987 6543', email: 'juan.cruz@email.com', dob: '1990-07-22', gender: 'male', address: '123 Main Street, City', medicalHistory: 'None', allergies: 'Penicillin', lastVisit: 'Jun 10, 2026', nextAppt: 'Jul 02, 2026', status: 'completed' },
    { id: 3, firstName: 'Rosa', lastName: 'Lim', code: 'DC-2026-003', phone: '0919 555 8888', email: 'rosa.lim@email.com', dob: '1978-11-05', gender: 'female', address: '456 Oak Avenue, City', medicalHistory: 'Diabetes Type 2', allergies: 'Latex', lastVisit: 'Jun 05, 2026', nextAppt: 'Jun 20, 2026', status: 'pending' },
    { id: 4, firstName: 'Anna', lastName: 'Perez', code: 'DC-2026-004', phone: '0920 111 2222', email: 'anna.perez@email.com', dob: '1995-01-30', gender: 'female', address: '789 Pine Road, City', medicalHistory: 'Asthma', allergies: 'None', lastVisit: 'May 28, 2026', nextAppt: 'Jul 10, 2026', status: 'active' },
    { id: 5, firstName: 'Carlos', lastName: 'Mendoza', code: 'DC-2026-005', phone: '0921 333 4444', email: 'carlos.m@email.com', dob: '1982-09-12', gender: 'male', address: '321 Elm Street, City', medicalHistory: 'None', allergies: 'None', lastVisit: 'Jun 18, 2026', nextAppt: 'Jul 15, 2026', status: 'active' },
    { id: 6, firstName: 'Elena', lastName: 'Garcia', code: 'DC-2026-006', phone: '0922 555 6666', email: 'elena.g@email.com', dob: '1998-04-18', gender: 'female', address: '654 Maple Drive, City', medicalHistory: 'None', allergies: 'None', lastVisit: 'Jun 12, 2026', nextAppt: 'Jun 30, 2026', status: 'active' },
  ],
  appointments: [
    { id: 1, patientId: 1, patientName: 'Maria Santos', type: 'cleaning', date: '2026-06-20', time: '09:00', status: 'scheduled', dentist: 'Dr. Demo' },
    { id: 2, patientId: 2, patientName: 'Juan Cruz', type: 'checkup', date: '2026-06-20', time: '10:30', status: 'confirmed', dentist: 'Dr. Reyes' },
    { id: 3, patientId: 3, patientName: 'Rosa Lim', type: 'treatment', date: '2026-06-20', time: '14:00', status: 'scheduled', dentist: 'Dr. Demo' },
    { id: 4, patientId: 4, patientName: 'Anna Perez', type: 'followup', date: '2026-06-20', time: '16:00', status: 'pending', dentist: 'Dr. Santos' },
    { id: 5, patientId: 1, patientName: 'Maria Santos', type: 'treatment', date: '2026-06-25', time: '09:00', status: 'scheduled', dentist: 'Dr. Demo' },
    { id: 6, patientId: 2, patientName: 'Juan Cruz', type: 'cleaning', date: '2026-07-02', time: '10:00', status: 'scheduled', dentist: 'Dr. Reyes' },
  ],
  invoices: [
    { id: 1, number: 'INV-2026-001', patientId: 1, patientName: 'Maria Santos', date: 'Jun 15, 2026', amount: 1500, status: 'paid', treatment: 'Dental Cleaning' },
    { id: 2, number: 'INV-2026-002', patientId: 2, patientName: 'Juan Cruz', date: 'Jun 10, 2026', amount: 2800, status: 'paid', treatment: 'Tooth Filling' },
    { id: 3, number: 'INV-2026-003', patientId: 3, patientName: 'Rosa Lim', date: 'Jun 05, 2026', amount: 3500, status: 'pending', treatment: 'Root Canal' },
    { id: 4, number: 'INV-2026-004', patientId: 4, patientName: 'Anna Perez', date: 'May 28, 2026', amount: 4200, status: 'overdue', treatment: 'Crown Installation' },
  ],
  files: [
    { id: 1, name: 'panoramic_2026.jpg', type: 'xray', size: '2.4 MB', date: 'Jun 15', patientId: 1 },
    { id: 2, name: 'intraoral_upper.jpg', type: 'photo', size: '1.8 MB', date: 'Jun 15', patientId: 1 },
    { id: 3, name: 'treatment_plan.pdf', type: 'pdf', size: '856 KB', date: 'Jun 10', patientId: 1 },
  ],
  treatments: [
    { id: 1, patientId: 1, date: 'June 15, 2026', title: 'Dental Cleaning & Check-up', desc: 'Routine cleaning performed. No major issues found.', status: 'completed', cost: 1500 },
    { id: 2, patientId: 1, date: 'March 10, 2026', title: 'Tooth Filling (Tooth 15)', desc: 'Composite filling for small cavity on upper left second premolar.', status: 'completed', cost: 2800 },
    { id: 3, patientId: 1, date: 'Scheduled: June 25, 2026', title: 'Root Canal Treatment (Tooth 36)', desc: 'Follow-up for deep cavity on lower left first molar.', status: 'scheduled', cost: 8000 },
  ],
  users: [
    { id: 1, name: 'Dr. Demo', initials: 'DR', role: 'Dentist', status: 'Active' },
    { id: 2, name: 'Admin User', initials: 'AU', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Receptionist', initials: 'RE', role: 'Receptionist', status: 'Active' },
  ],
  alerts: [
    { type: 'warning', title: 'Overdue Invoice', message: 'Patient #123 has an overdue invoice of 2,500', icon: 'alert' },
    { type: 'info', title: 'Birthday Today', message: 'Send greeting to Maria Santos', icon: 'info' },
  ],
  teeth: {
    upper: [
      { num: 18, status: 'healthy' }, { num: 17, status: 'healthy' }, { num: 16, status: 'healthy' },
      { num: 15, status: 'filled' }, { num: 14, status: 'healthy' }, { num: 13, status: 'healthy' },
      { num: 12, status: 'healthy' }, { num: 11, status: 'healthy' }, { num: 21, status: 'healthy' },
      { num: 22, status: 'healthy' }, { num: 23, status: 'healthy' }, { num: 24, status: 'healthy' },
      { num: 25, status: 'decayed' }, { num: 26, status: 'healthy' }, { num: 27, status: 'healthy' },
      { num: 28, status: 'healthy' },
    ],
    lower: [
      { num: 48, status: 'healthy' }, { num: 47, status: 'healthy' }, { num: 46, status: 'healthy' },
      { num: 45, status: 'healthy' }, { num: 44, status: 'healthy' }, { num: 43, status: 'healthy' },
      { num: 42, status: 'healthy' }, { num: 41, status: 'healthy' }, { num: 31, status: 'healthy' },
      { num: 32, status: 'healthy' }, { num: 33, status: 'healthy' }, { num: 34, status: 'healthy' },
      { num: 35, status: 'crown' }, { num: 36, status: 'root-canal' }, { num: 37, status: 'extracted' },
      { num: 38, status: 'healthy' },
    ]
  },
  revenue: [
    { month: 'Jan', value: 98 }, { month: 'Feb', value: 85 }, { month: 'Mar', value: 110 },
    { month: 'Apr', value: 92 }, { month: 'May', value: 115 }, { month: 'Jun', value: 125 },
  ],
  treatmentBreakdown: [
    { name: 'Cleaning', percent: 35, color: '#0ea5ff' },
    { name: 'Fillings', percent: 25, color: '#f59e0b' },
    { name: 'Root Canal', percent: 20, color: '#ef4444' },
    { name: 'Extractions', percent: 12, color: '#22c55e' },
    { name: 'Others', percent: 8, color: '#64748b' },
  ],
  currentOption: 'a',
  currentPage: 'dashboard',
  patientFilter: 'all',
  invoiceFilter: 'all',
  calendarMonth: 5, // June (0-indexed)
  calendarYear: 2026,
  calendarView: 'month',
  isEditing: false,
};


// ===== SAFE STORAGE HELPERS =====
function safeStorageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* silent fail in private mode */ }
}
function safeStorageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

// ===== DEBOUNCE HELPER =====
let searchTimeout = null;
function debouncedSearch(fn, delay = 300) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(fn, delay);
}

// ===== VOICE RECOGNITION CLEANUP =====
function stopAllVoiceRecognition() {
  if (recognition) {
    try { recognition.stop(); } catch (e) {}
    recognition = null;
  }
  document.querySelectorAll('.voice-input-btn.recording, .voice-btn.recording, #global-voice-btn.recording')
    .forEach(btn => btn.classList.remove('recording'));
}

// ===== NAVIGATION =====
function navigateTo(page) {
  // Cleanup voice recognition before switching pages
  stopAllVoiceRecognition();
  // Clear any active search timeouts
  clearTimeout(searchTimeout);

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageMap = {
    'dashboard': 'page-dashboard',
    'patients': 'page-patients',
    'patients-new': 'page-patients-new',
    'patients-detail': 'page-patients-detail',
    'appointments': 'page-appointments',
    'appointments-new': 'page-appointments-new',
    'billing': 'page-billing',
    'billing-new': 'page-billing-new',
    'billing-invoice': 'page-billing-invoice',
    'reports': 'page-reports',
    'settings': 'page-settings',
    'login': 'page-login'
  };

  const navMap = {
    'dashboard': 'dashboard', 'patients': 'patients', 'patients-new': 'patients', 'patients-detail': 'patients',
    'appointments': 'appointments', 'appointments-new': 'appointments',
    'billing': 'billing', 'billing-new': 'billing', 'billing-invoice': 'billing',
    'reports': 'reports', 'settings': 'settings'
  };

  const pageId = pageMap[page];
  if (!pageId) {
    console.warn('Unknown page:', page);
    page = 'dashboard';
  }
  const targetPage = document.getElementById(pageId || 'page-dashboard');
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo(0, 0);
  } else {
    console.error('Page element not found:', pageId);
    document.getElementById('page-dashboard').classList.add('active');
  }

  if (navMap[page]) {
    const navItem = document.querySelector(`.nav-item[data-page="${navMap[page]}"]`);
    if (navItem) navItem.classList.add('active');
  }

  store.currentPage = page;

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');

  // Refresh page-specific content
  refreshPageContent(page);
}

function refreshPageContent(page) {
  switch(page) {
    case 'dashboard':
      renderDashboardSchedule();
      renderDashboardAlerts();
      animateCounters();
      break;
    case 'patients':
      renderPatientsTable();
      renderPatientsMobile();
      renderPagination();
      break;
    case 'patients-detail':
      renderToothChart();
      renderToothLegend();
      renderFileGallery();
      renderTreatmentTimeline();
      renderPatientAppointments();
      break;
    case 'appointments':
      renderCalendar();
      renderUpcomingAppointments();
      break;
    case 'billing':
      renderInvoicesTable();
      renderInvoicesMobile();
      break;
    case 'reports':
      renderRevenueChart();
      renderTreatmentBreakdown();
      break;
    case 'settings':
      renderUsersList();
      break;
  }
}

// ===== OPTION SWITCHING =====
function switchOption(opt) {
  document.body.classList.remove('show-option-a', 'show-option-b');
  document.body.classList.add('show-option-' + opt);

  document.getElementById('btn-opt-a').classList.toggle('active', opt === 'a');
  document.getElementById('btn-opt-b').classList.toggle('active', opt === 'b');

  const badge = document.getElementById('option-badge');
  badge.className = 'option-badge option-' + opt;
  badge.textContent = opt === 'a' ? 'Basic' : 'Pro';

  store.currentOption = opt;
  showToast('Switched to ' + (opt === 'a' ? 'Basic' : 'Pro') + ' Package', 'success');

  // Refresh current page
  refreshPageContent(store.currentPage);
}

// ===== THEME =====
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  safeStorageSet('theme', newTheme);
  showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'success');
}

// ===== ACCESSIBILITY MODAL =====
function closeAccessToolbar() {
  const overlay = document.getElementById('access-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.querySelectorAll('.mobile-access-btn, .sidebar-access-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

function toggleAccessToolbar() {
  const overlay = document.getElementById('access-modal-overlay');
  if (!overlay) return;
  const isOpen = !overlay.classList.contains('active');
  overlay.classList.toggle('active', isOpen);
  overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  document.querySelectorAll('.mobile-access-btn, .sidebar-access-btn').forEach(btn => {
    btn.classList.toggle('active', isOpen);
  });
}

// ===== FONT SIZE =====
function setFontSize(size) {
  document.body.classList.toggle('font-large', size === 'large');
  document.getElementById('btn-font-normal').classList.toggle('active', size === 'normal');
  document.getElementById('btn-font-large').classList.toggle('active', size === 'large');
  safeStorageSet('fontSize', size);
}

// ===== CONTRAST =====
function setContrast(mode) {
  document.body.classList.toggle('high-contrast', mode === 'high');
  document.getElementById('btn-contrast-normal').classList.toggle('active', mode === 'normal');
  document.getElementById('btn-contrast-high').classList.toggle('active', mode === 'high');
  safeStorageSet('contrast', mode);
}

// ===== VOICE INPUT =====
let recognition = null;
function toggleVoiceInput(btn) {
  const isRecording = btn.classList.toggle('recording');
  if (isRecording) {
    // Stop any existing recognition first
    stopAllVoiceRecognition();
    btn.classList.add('recording');

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = 'en-PH';
      recognition.continuous = true;
      recognition.interimResults = true;
      const input = btn.parentElement.querySelector('input, textarea');
      let finalTranscript = input ? input.value : '';

      recognition.onresult = (e) => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) {
            finalTranscript += e.results[i][0].transcript;
          } else {
            interim += e.results[i][0].transcript;
          }
        }
        if (input) input.value = finalTranscript + interim;
      };

      recognition.onerror = (e) => {
        console.warn('Speech recognition error:', e.error);
        btn.classList.remove('recording');
        if (e.error !== 'aborted') {
          showToast('Voice input error: ' + e.error, 'error');
        }
      };

      recognition.onend = () => {
        btn.classList.remove('recording');
        recognition = null;
      };

      try {
        recognition.start();
        showToast('Listening... Speak now');
      } catch (err) {
        showToast('Could not start voice input', 'error');
        btn.classList.remove('recording');
      }
    } else {
      showToast('Voice input not supported in this browser', 'error');
      btn.classList.remove('recording');
    }
  } else {
    stopAllVoiceRecognition();
    showToast('Voice input stopped');
  }
}

function toggleGlobalVoice() {
  const btn = document.getElementById('global-voice-btn');
  toggleVoiceInput(btn);
}

// ===== TABS =====
function switchTab(btn, tabId) {
  btn.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// ===== TOAST =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const icons = {
    success: '<path d="M20 6 9 17l-5-5"/>',
    error: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };
  toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[type] || icons.info}</svg><span>${message}</span>`;
  container.appendChild(toast);
  toast.onclick = () => toast.remove();
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===== MODAL =====
function showToothModal(number) {
  document.getElementById('tooth-number').textContent = number;
  document.getElementById('tooth-modal').classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function saveToothStatus() {
  const num = parseInt(document.getElementById('tooth-number').textContent);
  const status = document.getElementById('tooth-status').value;
  const notes = document.getElementById('tooth-notes').value;

  if (isNaN(num)) {
    showToast('Invalid tooth number', 'error');
    return;
  }

  // Update store
  let found = false;
  ['upper', 'lower'].forEach(jaw => {
    const tooth = store.teeth[jaw].find(t => t.num === num);
    if (tooth) {
      tooth.status = status;
      tooth.notes = notes;
      found = true;
    }
  });

  if (found) {
    renderToothChart(); // Re-render to show updated color
    closeModal('tooth-modal');
    showToast('Tooth #' + num + ' status updated!', 'success');
  } else {
    showToast('Tooth not found', 'error');
  }
}

// ===== MOBILE SIDEBAR =====
function toggleMobileSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('active');
}

function toggleMobileSearch() {
  document.getElementById('mobile-search-overlay').classList.toggle('active');
  if (document.getElementById('mobile-search-overlay').classList.contains('active')) {
    setTimeout(() => document.getElementById('mobile-search-input').focus(), 100);
  }
}

// ===== USER MENU =====
function toggleUserMenu() {
  // Handled by CSS hover
}

// ===== SEARCH =====
function handleSearch(input) {
  const results = input.parentElement.querySelector('.search-results');
  if (input.value.length > 0) {
    results.classList.add('active');
    results.innerHTML = store.patients.filter(p =>
      p.firstName.toLowerCase().includes(input.value.toLowerCase()) ||
      p.lastName.toLowerCase().includes(input.value.toLowerCase()) ||
      p.phone.includes(input.value)
    ).map(p => `
      <div class="search-result-item" onclick="showToast('Opening patient record...')">
        <div class="recent-avatar" style="background:var(--primary);width:36px;height:36px;font-size:14px">${p.firstName[0]}${p.lastName[0]}</div>
        <div><div style="font-weight:600">${p.firstName} ${p.lastName}</div><div style="font-size:12px;color:var(--text-muted)">${p.phone}</div></div>
      </div>
    `).join('') || '<div class="search-result-item"><div style="padding:12px;color:var(--text-muted)">No patients found</div></div>';
  } else {
    results.classList.remove('active');
  }
}

// ===== PATIENTS =====
function renderPatientsTable() {
  const tbody = document.getElementById('patients-table-body');
  if (!tbody) return;

  let filtered = store.patients;
  if (store.patientFilter !== 'all') {
    // Simple filter logic for demo
    if (store.patientFilter === 'recent') filtered = filtered.slice(0, 3);
  }

  const searchInput = document.getElementById('patients-search-input');
  if (searchInput && searchInput.value) {
    const q = searchInput.value.toLowerCase();
    filtered = filtered.filter(p =>
      p.firstName.toLowerCase().includes(q) ||
      p.lastName.toLowerCase().includes(q) ||
      p.phone.includes(q)
    );
  }

  tbody.innerHTML = filtered.map(p => {
    const statusClass = p.status === 'active' ? 'status-scheduled' : p.status === 'completed' ? 'status-completed' : 'status-pending';
    const statusText = p.status.charAt(0).toUpperCase() + p.status.slice(1);
    return `
      <tr onclick="navigateTo('patients-detail')" style="cursor:pointer">
        <td>
          <div style="display:flex;align-items:center;gap:12px">
            <div class="recent-avatar" style="background:var(--primary);width:36px;height:36px;font-size:14px">${p.firstName[0]}${p.lastName[0]}</div>
            <div><div style="font-weight:600">${p.firstName} ${p.lastName}</div><div style="font-size:12px;color:var(--text-muted)">${p.code}</div></div>
          </div>
        </td>
        <td>${p.phone}</td>
        <td>${p.lastVisit}</td>
        <td>${p.nextAppt}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td><button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();navigateTo('patients-detail')">View</button></td>
      </tr>
    `;
  }).join('');
}

function renderPatientsMobile() {
  const container = document.getElementById('patients-mobile-cards');
  if (!container) return;

  let filtered = store.patients;
  const searchInput = document.getElementById('patients-search-input');
  if (searchInput && searchInput.value) {
    const q = searchInput.value.toLowerCase();
    filtered = filtered.filter(p =>
      p.firstName.toLowerCase().includes(q) ||
      p.lastName.toLowerCase().includes(q)
    );
  }

  container.innerHTML = filtered.slice(0, 4).map(p => {
    const statusClass = p.status === 'active' ? 'status-scheduled' : p.status === 'completed' ? 'status-completed' : 'status-pending';
    return `
      <div class="mobile-card" onclick="navigateTo('patients-detail')">
        <div class="mobile-card-row"><span class="mobile-card-label">Patient</span><span class="mobile-card-value" style="display:flex;align-items:center;gap:8px"><div class="recent-avatar" style="background:var(--primary);width:28px;height:28px;font-size:12px">${p.firstName[0]}${p.lastName[0]}</div>${p.firstName} ${p.lastName}</span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Phone</span><span class="mobile-card-value">${p.phone}</span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Last Visit</span><span class="mobile-card-value">${p.lastVisit}</span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Status</span><span class="status-badge ${statusClass}">${p.status}</span></div>
      </div>
    `;
  }).join('');
}

function filterPatients(value) {
  renderPatientsTable();
  renderPatientsMobile();
}

function setPatientFilter(btn) {
  document.querySelectorAll('#patient-filters .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  store.patientFilter = btn.dataset.filter;
  renderPatientsTable();
  renderPatientsMobile();
}

function sortPatients(field) {
  showToast(`Sorting by ${field}...`, 'info');
}

function renderPagination() {
  const container = document.getElementById('patients-pagination');
  if (!container) return;
  container.innerHTML = `
    <button class="page-btn" disabled><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
    <button class="page-btn active">1</button>
    <button class="page-btn">2</button>
    <button class="page-btn">3</button>
    <button class="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></button>
  `;
}

// ===== SAVE PATIENT =====
function savePatient(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  if (!firstName || !lastName) {
    showToast('Please fill in required fields', 'error');
    return;
  }
  showToast('Patient saved successfully!', 'success');
  setTimeout(() => navigateTo('patients'), 1000);
}

// ===== EDIT MODE =====
function toggleEditMode() {
  store.isEditing = !store.isEditing;
  const btnText = document.getElementById('edit-btn-text');
  const fields = document.querySelectorAll('.detail-field');

  if (store.isEditing) {
    btnText.textContent = 'Save';
    fields.forEach(f => {
      f.disabled = false;
      f.classList.add('editable');
    });
    showToast('Edit mode enabled', 'info');
  } else {
    btnText.textContent = 'Edit';
    fields.forEach(f => {
      f.disabled = true;
      f.classList.remove('editable');
    });
    showToast('Changes saved!', 'success');
  }
}

// ===== TOOTH CHART =====
function renderToothChart() {
  const upper = document.getElementById('upper-jaw');
  const lower = document.getElementById('lower-jaw');
  if (!upper || !lower) return;

  const toothHtml = (t) => `
    <div class="tooth ${t.status}" onclick="showToothModal(${t.num})" title="Tooth ${t.num} - ${t.status}">
      <span class="tooth-number">${t.num}</span>
      <div class="tooth-status"></div>
    </div>
  `;

  upper.innerHTML = store.teeth.upper.map(toothHtml).join('');
  lower.innerHTML = store.teeth.lower.map(toothHtml).join('');
}

function renderToothLegend() {
  const legend = document.getElementById('tooth-legend');
  if (!legend) return;
  const items = [
    { label: 'Healthy', color: 'var(--success)' },
    { label: 'Decayed', color: 'var(--danger)' },
    { label: 'Filled', color: 'var(--warning)' },
    { label: 'Crown', color: '#c0c0c0' },
    { label: 'Root Canal', color: '#8b5cf6' },
    { label: 'Extracted', color: 'var(--text-muted)' },
  ];
  legend.innerHTML = items.map(i => `
    <div class="legend-item"><div class="legend-dot" style="background:${i.color};${i.label === 'Extracted' ? 'opacity:0.3' : ''}"></div> ${i.label}</div>
  `).join('');
}

// ===== FILE GALLERY =====
function renderFileGallery() {
  const gallery = document.getElementById('file-gallery');
  if (!gallery) return;
  gallery.innerHTML = store.files.map(f => {
    const isPdf = f.type === 'pdf';
    const hasPreview = f.dataUrl && !isPdf;
    return `
      <div class="file-card" onclick="openFileViewer(${f.id})">
        <div class="file-thumb" style="${isPdf ? 'color:var(--danger)' : ''}">
          ${hasPreview
            ? `<img src="${f.dataUrl}" alt="${f.name}" style="width:100%;height:100%;object-fit:cover">`
            : isPdf
              ? '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
              : '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>'
          }
        </div>
        <div class="file-info">
          <div class="file-name">${f.name}</div>
          <div class="file-meta">${f.type.toUpperCase()} • ${f.size} • ${f.date}</div>
        </div>
      </div>
    `;
  }).join('');
}

function openFileViewer(id) {
  const file = store.files.find(f => f.id === id);
  if (!file) return;
  document.getElementById('file-viewer-title').textContent = file.name;
  const img = document.getElementById('file-viewer-img');
  const pdf = document.getElementById('file-viewer-pdf');
  if (file.type === 'pdf') {
    img.style.display = 'none';
    pdf.style.display = 'flex';
  } else {
    img.src = file.dataUrl || '';
    img.style.display = 'block';
    pdf.style.display = 'none';
  }
  document.getElementById('file-viewer-modal').classList.add('active');
}

function handleFileUpload(input) {
  const files = Array.from(input.files);
  if (files.length === 0) return;

  let processed = 0;
  files.forEach(file => {
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      showToast(`File "${file.name}" exceeds 10MB limit`, 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        type: file.type.includes('pdf') ? 'pdf' : 'photo',
        size: file.size > 1024 * 1024 
          ? (file.size / 1024 / 1024).toFixed(1) + ' MB' 
          : (file.size / 1024).toFixed(0) + ' KB',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        patientId: 1, // current patient context
        dataUrl: e.target.result
      };
      store.files.push(newFile);
      processed++;
      if (processed === files.length) {
        renderFileGallery();
        showToast(`${processed} file(s) uploaded successfully!`, 'success');
      }
    };
    reader.onerror = () => {
      showToast(`Failed to read "${file.name}"`, 'error');
    };
    reader.readAsDataURL(file);
  });

  // Clear input so same file can be selected again
  input.value = '';
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files);
  if (files.length > 0) {
    // Create a mock input to reuse handleFileUpload logic
    const mockInput = { files: files };
    handleFileUpload(mockInput);
  }
}

// ===== TREATMENT TIMELINE =====
function renderTreatmentTimeline() {
  const container = document.getElementById('treatment-timeline');
  if (!container) return;
  container.innerHTML = store.treatments.map(t => `
    <div class="timeline-item ${t.status}">
      <div class="timeline-date">${t.date}</div>
      <div class="timeline-title">${t.title}</div>
      <div class="timeline-desc">${t.desc}</div>
      <div style="margin-top:8px"><span class="badge-sm badge-${t.status === 'completed' ? 'green' : 'amber'}">${t.status}</span> <span style="font-size:13px;color:var(--text-muted)">${t.cost.toLocaleString()}</span></div>
    </div>
  `).join('');
}

// ===== PATIENT APPOINTMENTS =====
function renderPatientAppointments() {
  const container = document.getElementById('patient-appointment-list');
  if (!container) return;
  const appts = store.appointments.filter(a => a.patientId === 1);
  container.innerHTML = appts.map(a => {
    const statusClass = a.status === 'completed' ? 'status-completed' : a.status === 'confirmed' ? 'status-confirmed' : 'status-scheduled';
    const label = a.status === 'completed' ? 'Completed' : a.status === 'confirmed' ? 'Confirmed' : 'Upcoming';
    return `
      <div class="recent-item">
        <div class="recent-avatar" style="background:var(--${a.status === 'completed' ? 'success' : a.status === 'confirmed' ? 'primary' : 'warning'})">${a.date.split('-')[2]}</div>
        <div class="recent-info"><h4>${a.date} • ${a.time}</h4><p>${a.type.charAt(0).toUpperCase() + a.type.slice(1)}</p></div>
        <span class="status-badge ${statusClass}">${label}</span>
      </div>
    `;
  }).join('');
}

// ===== CALENDAR =====
function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;

  const view = store.calendarView || 'month';

  if (view === 'month') {
    renderMonthView(grid);
  } else if (view === 'week') {
    renderWeekView(grid);
  } else if (view === 'day') {
    renderDayView(grid);
  }
}

function renderMonthView(grid) {
  const monthNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(store.calendarYear, store.calendarMonth + 1, 0).getDate();
  const firstDay = new Date(store.calendarYear, store.calendarMonth, 1).getDay();

  document.getElementById('calendar-month').textContent =
    new Date(store.calendarYear, store.calendarMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  let html = monthNames.map(d => `<div class="calendar-day-header">${d}</div>`).join('');

  // Previous month days
  const prevDays = firstDay;
  for (let i = 0; i < prevDays; i++) {
    html += `<div class="calendar-day other-month"><div class="day-number">${new Date(store.calendarYear, store.calendarMonth, 0).getDate() - prevDays + i + 1}</div></div>`;
  }

  // Current month days
  const today = new Date();
  const isCurrentMonth = today.getMonth() === store.calendarMonth && today.getFullYear() === store.calendarYear;
  const todayDate = today.getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isCurrentMonth && day === todayDate;
    const dateStr = `${store.calendarYear}-${String(store.calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayAppts = store.appointments.filter(a => a.date === dateStr);

    const apptsHtml = dayAppts.slice(0, 3).map(a =>
      `<div class="day-appt ${a.type}" title="${a.patientName} - ${a.type}">${a.patientName.split(' ')[0]} - ${a.time}</div>`
    ).join('');
    const moreHtml = dayAppts.length > 3 ? `<div class="day-appt" style="font-size:9px;color:var(--text-muted)">+${dayAppts.length - 3} more</div>` : '';
    const apptCount = dayAppts.length;

    html += `
      <div class="calendar-day ${isToday ? 'today' : ''}" onclick="showDayAppointments('${dateStr}')" title="${apptCount} appointment${apptCount !== 1 ? 's' : ''}">
        <div class="day-number">${day}</div>
        <div class="day-appointments">${apptsHtml}${moreHtml}</div>
      </div>
    `;
  }

  // Next month days - only render needed cells, not always 42
  const totalCells = prevDays + daysInMonth;
  const rows = Math.ceil(totalCells / 7);
  const remaining = (rows * 7) - totalCells;
  for (let i = 1; i <= remaining; i++) {
    html += `<div class="calendar-day other-month"><div class="day-number">${i}</div></div>`;
  }

  grid.innerHTML = html;
  grid.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
}

function renderWeekView(grid) {
  // Get the start of the current week (Sunday)
  const currentDate = new Date(store.calendarYear, store.calendarMonth, 1);
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());

  document.getElementById('calendar-month').textContent =
    'Week of ' + weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let html = '';

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(weekStart);
    dayDate.setDate(weekStart.getDate() + i);
    const dateStr = `${dayDate.getFullYear()}-${String(dayDate.getMonth() + 1).padStart(2, '0')}-${String(dayDate.getDate()).padStart(2, '0')}`;
    const dayAppts = store.appointments.filter(a => a.date === dateStr);
    const isToday = new Date().toDateString() === dayDate.toDateString();

    const apptsHtml = dayAppts.map(a =>
      `<div class="week-appt-item ${a.type}" onclick="event.stopPropagation();showAppointmentDetail(${a.id})">
        <span class="week-appt-time">${a.time}</span>
        <span class="week-appt-name">${a.patientName}</span>
        <span class="week-appt-type">${a.type}</span>
      </div>`
    ).join('');

    html += `
      <div class="week-day ${isToday ? 'today' : ''}" onclick="showDayAppointments('${dateStr}')">
        <div class="week-day-header">
          <span class="week-day-name">${days[i]}</span>
          <span class="week-day-date">${dayDate.getDate()}</span>
        </div>
        <div class="week-appts">${apptsHtml || '<div class="week-no-appts">No appointments</div>'}</div>
      </div>
    `;
  }

  grid.innerHTML = html;
  grid.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
}

function renderDayView(grid) {
  const today = new Date();
  const isCurrentMonth = today.getMonth() === store.calendarMonth && today.getFullYear() === store.calendarYear;
  const dayNum = isCurrentMonth ? today.getDate() : 1;
  const dateStr = `${store.calendarYear}-${String(store.calendarMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

  document.getElementById('calendar-month').textContent =
    new Date(store.calendarYear, store.calendarMonth, dayNum).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const dayAppts = store.appointments.filter(a => a.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));

  let html = '<div class="day-view-container">';

  if (dayAppts.length === 0) {
    html += `
      <div class="day-view-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <h3>No Appointments</h3>
        <p>No appointments scheduled for this day.</p>
        <button class="btn btn-primary" onclick="navigateTo('appointments-new')" style="margin-top:16px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Appointment
        </button>
      </div>
    `;
  } else {
    html += '<div class="day-view-timeline">';
    const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    timeSlots.forEach(slot => {
      const slotAppts = dayAppts.filter(a => {
        const apptHour = parseInt(a.time.split(':')[0]);
        const slotHour = parseInt(slot.split(':')[0]);
        return apptHour === slotHour;
      });

      html += `<div class="day-view-slot">`;
      html += `<div class="day-view-time">${slot}</div>`;
      html += `<div class="day-view-slots">`;

      if (slotAppts.length > 0) {
        slotAppts.forEach(a => {
          const statusClass = a.status === 'confirmed' ? 'status-confirmed' : a.status === 'scheduled' ? 'status-scheduled' : 'status-pending';
          html += `
            <div class="day-view-appt ${a.type}" onclick="showAppointmentDetail(${a.id})">
              <div class="day-view-appt-header">
                <span class="day-view-appt-time">${a.time}</span>
                <span class="status-badge ${statusClass}">${a.status}</span>
              </div>
              <div class="day-view-appt-name">${a.patientName}</div>
              <div class="day-view-appt-dentist">${a.dentist}</div>
            </div>
          `;
        });
      } else {
        html += `<div class="day-view-slot-empty">Available</div>`;
      }

      html += `</div></div>`;
    });
    html += '</div>';
  }

  html += '</div>';
  grid.innerHTML = html;
  grid.style.gridTemplateColumns = '1fr';
}

function showDayAppointments(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const dayAppts = store.appointments.filter(a => a.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));

  if (dayAppts.length === 0) {
    showToast(`No appointments on ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
    return;
  }

  // Build modal content
  const apptsHtml = dayAppts.map(a => {
    const statusClass = a.status === 'confirmed' ? 'status-confirmed' : a.status === 'scheduled' ? 'status-scheduled' : 'status-pending';
    return `
      <div class="day-modal-appt ${a.type}">
        <div class="day-modal-appt-time">${a.time}</div>
        <div class="day-modal-appt-info">
          <div class="day-modal-appt-name">${a.patientName}</div>
          <div class="day-modal-appt-meta">${a.type} &bull; ${a.dentist}</div>
        </div>
        <span class="status-badge ${statusClass}">${a.status}</span>
      </div>
    `;
  }).join('');

  // Create a temporary modal
  const modalHtml = `
    <div class="modal-overlay active" id="day-appts-modal" onclick="if(event.target===this)closeModal('day-appts-modal')">
      <div class="modal">
        <div class="modal-header">
          <h3>${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
          <button class="modal-close" onclick="closeModal('day-appts-modal')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="day-modal-appts">${apptsHtml}</div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeModal('day-appts-modal')">Close</button>
          <button class="btn btn-primary" onclick="closeModal('day-appts-modal');navigateTo('appointments-new')">New Appointment</button>
        </div>
      </div>
    </div>
  `;

  // Remove existing day modal if any
  const existing = document.getElementById('day-appts-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function showAppointmentDetail(id) {
  const appt = store.appointments.find(a => a.id === id);
  if (!appt) return;

  const patient = store.patients.find(p => p.id === appt.patientId) || {};
  const statusClass = appt.status === 'confirmed' ? 'status-confirmed' : appt.status === 'scheduled' ? 'status-scheduled' : 'status-pending';
  const statusLabel = appt.status === 'confirmed' ? 'Confirmed' : appt.status === 'scheduled' ? 'Scheduled' : 'Pending';

  const modalHtml = `
    <div class="modal-overlay active" id="appt-detail-modal" onclick="if(event.target===this)closeModal('appt-detail-modal')">
      <div class="modal">
        <div class="modal-header">
          <h3>Appointment Details</h3>
          <button class="modal-close" onclick="closeModal('appt-detail-modal')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="appt-detail-card">
            <div class="appt-detail-row">
              <span class="appt-detail-label">Patient</span>
              <span class="appt-detail-value">${appt.patientName}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Phone</span>
              <span class="appt-detail-value">${patient.phone || 'N/A'}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Date</span>
              <span class="appt-detail-value">${appt.date}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Time</span>
              <span class="appt-detail-value">${appt.time}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Type</span>
              <span class="appt-detail-value">${appt.type.charAt(0).toUpperCase() + appt.type.slice(1)}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Dentist</span>
              <span class="appt-detail-value">${appt.dentist}</span>
            </div>
            <div class="appt-detail-row">
              <span class="appt-detail-label">Status</span>
              <span class="status-badge ${statusClass}">${statusLabel}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeModal('appt-detail-modal')">Close</button>
          <button class="btn btn-primary" onclick="closeModal('appt-detail-modal');showToast('Edit appointment coming soon')">Edit</button>
        </div>
      </div>
    </div>
  `;

  const existing = document.getElementById('appt-detail-modal');
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}


function changeMonth(delta) {
  store.calendarMonth += delta;
  if (store.calendarMonth > 11) { store.calendarMonth = 0; store.calendarYear++; }
  if (store.calendarMonth < 0) { store.calendarMonth = 11; store.calendarYear--; }
  renderCalendar();
}

function goToToday() {
  const now = new Date();
  store.calendarMonth = now.getMonth();
  store.calendarYear = now.getFullYear();
  renderCalendar();
}

function setCalendarView(btn, view) {
  document.querySelectorAll('.calendar-views .btn-sm').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  store.calendarView = view;
  renderCalendar();
  showToast(`Switched to ${view} view`, 'info');
}

// ===== UPCOMING APPOINTMENTS =====
function renderUpcomingAppointments() {
  const container = document.getElementById('upcoming-appointments-list');
  if (!container) return;
  container.innerHTML = store.appointments.slice(0, 4).map(a => {
    const statusClass = a.status === 'confirmed' ? 'status-confirmed' : a.status === 'scheduled' ? 'status-scheduled' : 'status-pending';
    const label = a.status === 'confirmed' ? 'Confirmed' : a.status === 'scheduled' ? 'Scheduled' : 'Pending';
    return `
      <div class="recent-item" onclick="showAppointmentDetail(${a.id})" style="cursor:pointer">
        <div class="recent-avatar" style="background:var(--primary)">${a.date.split('-')[2]}</div>
        <div class="recent-info"><h4>${a.date}, ${a.time}</h4><p>${a.patientName} - ${a.type.charAt(0).toUpperCase() + a.type.slice(1)}</p></div>
        <span class="status-badge ${statusClass}">${label}</span>
      </div>
    `;
  }).join('');
}

// ===== APPOINTMENT FORM =====
function searchPatientsForAppt(input) {
  const results = document.getElementById('appt-search-results');
  if (input.value.length > 0) {
    results.classList.add('active');
    const matches = store.patients.filter(p =>
      p.firstName.toLowerCase().includes(input.value.toLowerCase()) ||
      p.lastName.toLowerCase().includes(input.value.toLowerCase())
    );
    results.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="selectPatientForAppt(${p.id}, '${p.firstName} ${p.lastName}')">
        <div class="recent-avatar" style="background:var(--primary);width:36px;height:36px;font-size:14px">${p.firstName[0]}${p.lastName[0]}</div>
        <div><div style="font-weight:600">${p.firstName} ${p.lastName}</div><div style="font-size:12px;color:var(--text-muted)">${p.phone}</div></div>
      </div>
    `).join('');
  } else {
    results.classList.remove('active');
  }
}

function selectPatientForAppt(id, name) {
  document.getElementById('appt-patient-search').value = name;
  document.getElementById('appt-patient-id').value = id;
  document.getElementById('appt-search-results').classList.remove('active');
}

function saveAppointment(e) {
  e.preventDefault();
  showToast('Appointment scheduled successfully!', 'success');
  setTimeout(() => navigateTo('appointments'), 1000);
}

// ===== INVOICES =====
function renderInvoicesTable() {
  const tbody = document.getElementById('invoices-table-body');
  if (!tbody) return;

  let filtered = store.invoices;
  if (store.invoiceFilter !== 'all') {
    filtered = filtered.filter(i => i.status === store.invoiceFilter);
  }

  tbody.innerHTML = filtered.map(inv => {
    const statusClass = inv.status === 'paid' ? 'status-completed' : inv.status === 'pending' ? 'status-pending' : 'status-cancelled';
    const statusText = inv.status.charAt(0).toUpperCase() + inv.status.slice(1);
    return `
      <tr onclick="navigateTo('billing-invoice')" style="cursor:pointer">
        <td><strong>${inv.number}</strong></td>
        <td>${inv.patientName}</td>
        <td>${inv.date}</td>
        <td style="font-weight:600">${inv.amount.toLocaleString()}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td><button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();navigateTo('billing-invoice')">View</button></td>
      </tr>
    `;
  }).join('');
}

function renderInvoicesMobile() {
  const container = document.getElementById('invoices-mobile-cards');
  if (!container) return;
  container.innerHTML = store.invoices.slice(0, 3).map(inv => {
    const statusClass = inv.status === 'paid' ? 'status-completed' : inv.status === 'pending' ? 'status-pending' : 'status-cancelled';
    return `
      <div class="mobile-card" onclick="navigateTo('billing-invoice')">
        <div class="mobile-card-row"><span class="mobile-card-label">Invoice</span><span class="mobile-card-value"><strong>${inv.number}</strong></span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Patient</span><span class="mobile-card-value">${inv.patientName}</span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Amount</span><span class="mobile-card-value">${inv.amount.toLocaleString()}</span></div>
        <div class="mobile-card-row"><span class="mobile-card-label">Status</span><span class="status-badge ${statusClass}">${inv.status}</span></div>
      </div>
    `;
  }).join('');
}

function filterInvoices(filter, btn) {
  document.querySelectorAll('#billing-filters .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  store.invoiceFilter = filter;
  renderInvoicesTable();
}

// ===== INVOICE FORM =====
function searchPatientsForInvoice(input) {
  const results = document.getElementById('invoice-search-results');
  if (input.value.length > 0) {
    results.classList.add('active');
    const matches = store.patients.filter(p =>
      p.firstName.toLowerCase().includes(input.value.toLowerCase()) ||
      p.lastName.toLowerCase().includes(input.value.toLowerCase())
    );
    results.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="selectPatientForInvoice(${p.id}, '${p.firstName} ${p.lastName}', '${p.phone}')">
        <div class="recent-avatar" style="background:var(--primary);width:36px;height:36px;font-size:14px">${p.firstName[0]}${p.lastName[0]}</div>
        <div><div style="font-weight:600">${p.firstName} ${p.lastName}</div><div style="font-size:12px;color:var(--text-muted)">${p.phone}</div></div>
      </div>
    `).join('');
  } else {
    results.classList.remove('active');
  }
}

function selectPatientForInvoice(id, name, phone) {
  document.getElementById('invoice-patient-search').value = name;
  document.getElementById('invoice-patient-id').value = id;
  document.getElementById('preview-patient-name').textContent = name;
  document.getElementById('preview-patient-phone').textContent = phone;
  document.getElementById('invoice-search-results').classList.remove('active');
}

function selectPayment(el) {
  el.parentElement.querySelectorAll('.payment-method').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

function saveInvoice(e) {
  e.preventDefault();
  showToast('Invoice created successfully!', 'success');
  setTimeout(() => navigateTo('billing'), 1000);
}

// ===== DASHBOARD =====
function renderDashboardSchedule() {
  const container = document.getElementById('dashboard-schedule-list');
  if (!container) return;
  container.innerHTML = store.appointments.slice(0, 4).map(a => {
    const statusClass = a.status === 'confirmed' ? 'status-confirmed' : 'status-scheduled';
    const label = a.status === 'confirmed' ? 'Confirmed' : 'Scheduled';
    const colors = { scheduled: 'var(--primary)', confirmed: 'var(--success)', pending: 'var(--warning)' };
    return `
      <div class="recent-item" onclick="showAppointmentDetail(${a.id})">
        <div class="recent-avatar" style="background:${colors[a.status] || colors.scheduled}">${a.patientName.split(' ').map(n => n[0]).join('')}</div>
        <div class="recent-info"><h4>${a.patientName}</h4><p>${a.type.charAt(0).toUpperCase() + a.type.slice(1)} • ${a.time}</p></div>
        <span class="status-badge ${statusClass}">${label}</span>
      </div>
    `;
  }).join('');
}

function renderDashboardAlerts() {
  const container = document.getElementById('dashboard-alerts-list');
  if (!container) return;
  container.innerHTML = store.alerts.map(a => `
    <div class="alert-item">
      <div class="alert-icon ${a.type}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
      <div class="alert-content"><h4>${a.title}</h4><p>${a.message}</p></div>
    </div>
  `).join('');
}

function animateCounters() {
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ===== REPORTS =====
function renderRevenueChart() {
  const container = document.getElementById('revenue-chart');
  if (!container) return;
  const max = Math.max(...store.revenue.map(r => r.value));
  container.innerHTML = store.revenue.map((r, i) => {
    const height = (r.value / max) * 100;
    const isLast = i === store.revenue.length - 1;
    return `
      <div class="chart-bar-item">
        <div class="chart-bar-value">${r.value}K</div>
        <div class="chart-bar-fill" style="height:${height}%;background:${isLast ? 'var(--success)' : 'var(--primary)'}"></div>
        <div class="chart-bar-label">${r.month}</div>
      </div>
    `;
  }).join('');
}

function renderTreatmentBreakdown() {
  const container = document.getElementById('treatment-breakdown');
  if (!container) return;
  container.innerHTML = store.treatmentBreakdown.map(t => `
    <div class="treatment-breakdown-item">
      <div class="treatment-breakdown-header">
        <span>${t.name}</span>
        <span style="font-weight:600">${t.percent}%</span>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${t.percent}%;background:${t.color}"></div></div>
    </div>
  `).join('');
}

// ===== SETTINGS =====
function renderUsersList() {
  const container = document.getElementById('users-list');
  if (!container) return;
  const roleColors = { Dentist: 'blue', Admin: 'green', Receptionist: 'amber' };
  container.innerHTML = store.users.map(u => `
    <div class="recent-item">
      <div class="recent-avatar" style="background:var(--primary)">${u.initials}</div>
      <div class="recent-info"><h4>${u.name}</h4><p>${u.role} • ${u.status}</p></div>
      <span class="badge-sm badge-${roleColors[u.role] || 'blue'}">${u.role}</span>
    </div>
  `).join('');
}

function saveClinicSettings(e) {
  e.preventDefault();
  showToast('Settings saved successfully!', 'success');
}

// ===== COMPARISON SLIDER =====
function handleComparison(e, container) {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
  container.querySelector('.comparison-before').style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  container.querySelector('.comparison-slider').style.left = percent + '%';
}

function handleComparisonTouch(e, container) {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = container.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
  container.querySelector('.comparison-before').style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  container.querySelector('.comparison-slider').style.left = percent + '%';
}

// ===== LOGIN =====
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (email && password) {
    showToast('Welcome back, Dr. Demo!', 'success');
    setTimeout(() => navigateTo('dashboard'), 800);
  } else {
    showToast('Please enter email and password', 'error');
  }
}

function togglePassword(btn) {
  const input = btn.parentElement.querySelector('input');
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  btn.innerHTML = isPassword
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.getElementById('mobile-search-overlay').classList.remove('active');
    closeAccessToolbar();
  }
  // Ctrl+K for search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) searchInput.focus();
  }
});

// ===== CLICK OUTSIDE =====
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    document.querySelectorAll('.search-results').forEach(r => r.classList.remove('active'));
  }
  // Close access modal when clicking outside panel (not on trigger buttons)
  const accessOverlay = document.getElementById('access-modal-overlay');
  if (accessOverlay && accessOverlay.classList.contains('active') && !e.target.closest('.access-toolbar') && !e.target.closest('.mobile-access-btn') && !e.target.closest('.sidebar-access-btn')) {
    closeAccessToolbar();
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences
  const savedTheme = safeStorageGet('theme');
  if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

  const savedFont = safeStorageGet('fontSize');
  if (savedFont) setFontSize(savedFont);

  const savedContrast = safeStorageGet('contrast');
  if (savedContrast) setContrast(savedContrast);

  // Set max date for DOB
  const dobInput = document.getElementById('dob');
  if (dobInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dobInput.max = `${yyyy}-${mm}-${dd}`;
  }

  // Set min date for appointments
  const apptDate = document.getElementById('appt-date');
  if (apptDate) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    apptDate.min = `${yyyy}-${mm}-${dd}`;
  }

  // Initialize page content
  refreshPageContent('dashboard');

  // Invoice preview live update
  const amountInput = document.getElementById('invoice-amount');
  const discountInput = document.getElementById('invoice-discount');
  const treatmentSelect = document.getElementById('invoice-treatment');

  function updatePreview() {
    const amount = parseFloat(amountInput?.value) || 0;
    const discount = parseFloat(discountInput?.value) || 0;
    const treatment = treatmentSelect?.options[treatmentSelect.selectedIndex]?.text || '---';
    const total = Math.max(0, amount - discount);

    const previewAmount = document.getElementById('preview-amount');
    const previewDiscount = document.getElementById('preview-discount');
    const previewTotal = document.getElementById('preview-total');
    const previewTreatment = document.getElementById('preview-treatment');

    if (previewAmount) previewAmount.textContent = amount.toLocaleString('en-US', { minimumFractionDigits: 2 });
    if (previewDiscount) previewDiscount.textContent = '-' + discount.toLocaleString('en-US', { minimumFractionDigits: 2 });
    if (previewTotal) previewTotal.textContent = total.toLocaleString('en-US', { minimumFractionDigits: 2 });
    if (previewTreatment) previewTreatment.textContent = treatment;
  }

  if (amountInput) amountInput.addEventListener('input', updatePreview);
  if (discountInput) discountInput.addEventListener('input', updatePreview);
  if (treatmentSelect) treatmentSelect.addEventListener('change', updatePreview);

  // Touch swipe for sidebar
  let touchStartX = 0;
  let touchStartY = 0;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });
  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    // Only trigger if horizontal swipe is dominant (avoid scroll conflicts)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
      if (diffX > 80 && touchStartX < 50) {
        toggleMobileSidebar();
      } else if (diffX < -80) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').classList.remove('active');
      }
    }
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    stopAllVoiceRecognition();
    clearTimeout(searchTimeout);
  });

  // Visibility API - pause voice when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAllVoiceRecognition();
    }
  });
});

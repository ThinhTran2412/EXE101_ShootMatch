/**
 * PicKicAuth — Role-Aware Authentication Manager
 * Manages Customer vs Photographer sessions.
 * On register: stores user data in localStorage + triggers users.txt download.
 *
 * Roles: 'customer' | 'photographer'
 *
 * localStorage keys:
 *   pickic_auth_users   — array of all registered users (fake DB)
 *   pickic_auth_session — current logged-in user object
 */

window.PicKicAuth = (function () {
  'use strict';

  const KEYS = {
    USERS:   'pickic_auth_users',
    SESSION: 'pickic_auth_session',
  };

  // ─── SEED DEMO ACCOUNTS ──────────────────────────────────────────────────────
  const DEMO_ACCOUNTS = [
    {
      id: 'u001',
      role: 'customer',
      name: 'Nguyễn Văn An',
      email: 'an@pickic.vn',
      password: '123456',
      phone: '0901 234 567',
      joinedAt: '2026-01-10T08:00:00.000Z',
    },
    {
      id: 'ph001',
      role: 'photographer',
      name: 'Elena Vance',
      email: 'elena@pickic.vn',
      password: '123456',
      phone: '0987 654 321',
      studio: 'Kyoto Studio',
      joinedAt: '2026-01-05T09:00:00.000Z',
    },
    {
      id: 'ph002',
      role: 'photographer',
      name: 'Minh Khải',
      email: 'minhkhai@pickic.vn',
      password: '123456',
      phone: '0912 345 678',
      studio: 'Sài Gòn Lens',
      joinedAt: '2026-01-08T10:00:00.000Z',
    },
  ];

  // ─── HELPERS ─────────────────────────────────────────────────────────────────
  function _getAll() {
    try {
      const raw = localStorage.getItem(KEYS.USERS);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function _setAll(users) {
    try { localStorage.setItem(KEYS.USERS, JSON.stringify(users)); } catch (e) {}
  }

  function _getSession() {
    try {
      const raw = sessionStorage.getItem(KEYS.SESSION);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function _setSession(user) {
    try { sessionStorage.setItem(KEYS.SESSION, JSON.stringify(user)); } catch (e) {}
  }

  // ─── INIT ────────────────────────────────────────────────────────────────────
  function init() {
    if (!_getAll()) {
      _setAll(DEMO_ACCOUNTS);
      console.log('PicKicAuth: Demo accounts seeded.');
    }
  }

  // ─── TXT EXPORT ──────────────────────────────────────────────────────────────
  function _exportTxt(users) {
    const header = [
      '# PicKic Users Registry',
      '# Exported: ' + new Date().toLocaleString('vi-VN'),
      '# Format: id | role | name | email | phone | studio | joinedAt',
      '',
    ].join('\n');

    const rows = users.map(u =>
      [u.id, u.role, u.name, u.email, u.phone || '', u.studio || '', u.joinedAt].join(' | ')
    ).join('\n');

    const content = header + rows + '\n';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  }

  // ─── REGISTER ────────────────────────────────────────────────────────────────
  /**
   * Register a new user.
   * @param {object} data — { role, name, email, password, phone, studio? }
   * @returns {{ success: boolean, error?: string, user?: object }}
   */
  function registerUser(data) {
    const users = _getAll() || [];

    if (!data.email || !data.password || !data.name || !data.role) {
      return { success: false, error: 'Vui lòng điền đầy đủ thông tin.' };
    }
    if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: 'Email này đã được đăng ký.' };
    }

    const prefix = data.role === 'photographer' ? 'ph' : 'u';
    const newUser = {
      id: prefix + Date.now(),
      role: data.role,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
      phone: (data.phone || '').trim(),
      studio: (data.studio || '').trim(),
      joinedAt: new Date().toISOString(),
    };

    users.push(newUser);
    _setAll(users);

    // Set session immediately
    const sessionUser = { ...newUser };
    delete sessionUser.password;
    _setSession(sessionUser);

    // Also sync with PicKicStore if available
    if (window.PicKicStore) {
      window.PicKicStore.saveUser(sessionUser);
    }

    // Export updated users.txt
    _exportTxt(users);

    return { success: true, user: sessionUser };
  }

  // ─── LOGIN ───────────────────────────────────────────────────────────────────
  /**
   * Login with email + password + expected role.
   * @param {string} email
   * @param {string} password
   * @param {string} role — 'customer' | 'photographer'
   * @returns {{ success: boolean, error?: string, user?: object }}
   */
  function loginUser(email, password, role) {
    const users = _getAll() || [];
    const found = users.find(u =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
    );

    if (!found) {
      return { success: false, error: 'Email hoặc mật khẩu không đúng.' };
    }
    if (found.role !== role) {
      const roleLabel = found.role === 'photographer' ? 'Thợ chụp ảnh' : 'Khách hàng';
      return {
        success: false,
        error: `Tài khoản này là ${roleLabel}. Vui lòng chọn đúng loại tài khoản.`
      };
    }

    const sessionUser = { ...found };
    delete sessionUser.password;
    _setSession(sessionUser);

    if (window.PicKicStore) {
      window.PicKicStore.saveUser(sessionUser);
    }

    return { success: true, user: sessionUser };
  }

  // ─── SESSION ─────────────────────────────────────────────────────────────────
  function getSession() {
    return _getSession();
  }

  function getRole() {
    const s = _getSession();
    return s ? s.role : null;
  }

  function isLoggedIn() {
    return !!_getSession();
  }

  function logout() {
    sessionStorage.removeItem(KEYS.SESSION);
    if (window.PicKicStore) {
      localStorage.removeItem('pickic_user');
      localStorage.removeItem('pickic_initialized');
    }
    window.location.href = 'login.html';
  }

  // ─── ROUTING ─────────────────────────────────────────────────────────────────
  /**
   * Redirect to the correct home page based on role.
   */
  function redirectAfterLogin(role) {
    if (role === 'photographer') {
      window.location.href = 'photographer-landing.html';
    } else {
      window.location.href = 'index.html';
    }
  }

  /**
   * Guard: call at top of pages that require login.
   * If not logged in, redirect to login.html.
   */
  function requireLogin() {
    if (!isLoggedIn()) {
      window.location.href = 'login.html';
    }
  }

  /**
   * Guard: call on login/register pages.
   * If already logged in, redirect to appropriate home.
   */
  function redirectIfLoggedIn() {
    const session = _getSession();
    if (session) redirectAfterLogin(session.role);
  }

  // ─── PUBLIC API ──────────────────────────────────────────────────────────────
  return {
    init,
    registerUser,
    loginUser,
    getSession,
    getRole,
    isLoggedIn,
    logout,
    redirectAfterLogin,
    requireLogin,
    redirectIfLoggedIn,
  };
})();

// Auto-init on load
PicKicAuth.init();

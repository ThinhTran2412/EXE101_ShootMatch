/**
 * PicKicAdminAuth — Admin Authentication & Data Manager
 * Handles admin login session and service package CRUD.
 */

window.PicKicAdmin = (function () {
  'use strict';

  const KEYS = {
    ADMIN_SESSION: 'pickic_admin_session',
    PACKAGES: 'pickic_service_packages',
    USERS: 'pickic_auth_users',
  };

  // ─── DEMO ADMIN ACCOUNT ──────────────────────────────────────────────────────
  const ADMIN_ACCOUNT = {
    id: 'admin001',
    email: 'admin@pickic.vn',
    password: 'admin123',
    name: 'Admin PicKic',
    role: 'admin',
    avatar: '🛡️',
  };

  // ─── SEED SERVICE PACKAGES ───────────────────────────────────────────────────
  const DEFAULT_PACKAGES = [
    {
      id: 'pkg001',
      name: 'Starter',
      nameVi: 'Gói Cơ Bản',
      icon: '🌱',
      price: 0,
      priceLabel: 'Miễn phí',
      period: 'tháng',
      color: '#22c55e',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      features: [
        '5 booking mỗi tháng',
        'Tìm kiếm nhiếp ảnh gia',
        'Chat cơ bản',
        'Đánh giá & review',
      ],
      limitations: ['Không có portfolio ưu tiên'],
      targetRole: 'customer',
      isPopular: false,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    {
      id: 'pkg002',
      name: 'Pro',
      nameVi: 'Gói Chuyên Nghiệp',
      icon: '⚡',
      price: 199000,
      priceLabel: '199K',
      period: 'tháng',
      color: '#ff4200',
      gradient: 'linear-gradient(135deg, #ff4200, #cc3500)',
      features: [
        'Không giới hạn booking',
        'Priority matching',
        'Video call tư vấn',
        'Lưu trữ ảnh 10GB',
        'Hỗ trợ 24/7',
        'Badge "Verified Customer"',
      ],
      limitations: [],
      targetRole: 'customer',
      isPopular: true,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    {
      id: 'pkg003',
      name: 'Elite',
      nameVi: 'Gói Cao Cấp',
      icon: '👑',
      price: 499000,
      priceLabel: '499K',
      period: 'tháng',
      color: '#3617cf',
      gradient: 'linear-gradient(135deg, #3617cf, #5238e0)',
      features: [
        'Tất cả tính năng Pro',
        'Dedicated photographer',
        'Lưu trữ ảnh không giới hạn',
        'Album digital cao cấp',
        'Chỉnh sửa ảnh premium',
        'Xuất file RAW',
        'Report phân tích phong cách',
      ],
      limitations: [],
      targetRole: 'customer',
      isPopular: false,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    {
      id: 'pkg004',
      name: 'Photographer Basic',
      nameVi: 'Nhiếp Ảnh Cơ Bản',
      icon: '📷',
      price: 99000,
      priceLabel: '99K',
      period: 'tháng',
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      features: [
        'Portfolio 20 ảnh',
        'Hiển thị trong tìm kiếm',
        'Nhận booking cơ bản',
        'Dashboard quản lý',
      ],
      limitations: ['Không có boost hiển thị'],
      targetRole: 'photographer',
      isPopular: false,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    {
      id: 'pkg005',
      name: 'Photographer Pro',
      nameVi: 'Nhiếp Ảnh Pro',
      icon: '🎯',
      price: 299000,
      priceLabel: '299K',
      period: 'tháng',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      features: [
        'Portfolio không giới hạn',
        'Featured trong Discovery',
        'Boost hiển thị x3',
        'Analytics chi tiết',
        'Hỗ trợ booking quốc tế',
        'Badge "Top Photographer"',
        'Ưu tiên matching thuật toán',
      ],
      limitations: [],
      targetRole: 'photographer',
      isPopular: true,
      isActive: true,
      createdAt: '2026-01-01T00:00:00.000Z',
    },
  ];

  // ─── INIT ────────────────────────────────────────────────────────────────────
  function init() {
    if (!localStorage.getItem(KEYS.PACKAGES)) {
      localStorage.setItem(KEYS.PACKAGES, JSON.stringify(DEFAULT_PACKAGES));
    }
  }

  // ─── ADMIN LOGIN ─────────────────────────────────────────────────────────────
  function loginAdmin(email, password) {
    if (
      email.toLowerCase() === ADMIN_ACCOUNT.email &&
      password === ADMIN_ACCOUNT.password
    ) {
      const session = { ...ADMIN_ACCOUNT };
      delete session.password;
      sessionStorage.setItem(KEYS.ADMIN_SESSION, JSON.stringify(session));
      return { success: true, admin: session };
    }
    return { success: false, error: 'Email hoặc mật khẩu admin không đúng.' };
  }

  function getAdminSession() {
    try {
      const raw = sessionStorage.getItem(KEYS.ADMIN_SESSION);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function isAdminLoggedIn() {
    return !!getAdminSession();
  }

  function logoutAdmin() {
    sessionStorage.removeItem(KEYS.ADMIN_SESSION);
    window.location.href = 'admin-login.html';
  }

  function requireAdmin() {
    if (!isAdminLoggedIn()) {
      window.location.href = 'admin-login.html';
    }
  }

  // ─── PACKAGES CRUD ───────────────────────────────────────────────────────────
  function getPackages() {
    try {
      const raw = localStorage.getItem(KEYS.PACKAGES);
      return raw ? JSON.parse(raw) : DEFAULT_PACKAGES;
    } catch (e) { return DEFAULT_PACKAGES; }
  }

  function savePackages(packages) {
    localStorage.setItem(KEYS.PACKAGES, JSON.stringify(packages));
  }

  function createPackage(data) {
    const packages = getPackages();
    const newPkg = {
      id: 'pkg' + Date.now(),
      ...data,
      isActive: true,
      createdAt: new Date().toISOString(),
    };
    packages.push(newPkg);
    savePackages(packages);
    return newPkg;
  }

  function updatePackage(id, data) {
    const packages = getPackages();
    const idx = packages.findIndex(p => p.id === id);
    if (idx === -1) return false;
    packages[idx] = { ...packages[idx], ...data, updatedAt: new Date().toISOString() };
    savePackages(packages);
    return packages[idx];
  }

  function deletePackage(id) {
    const packages = getPackages();
    const filtered = packages.filter(p => p.id !== id);
    savePackages(filtered);
    return filtered.length < packages.length;
  }

  function togglePackageStatus(id) {
    const packages = getPackages();
    const pkg = packages.find(p => p.id === id);
    if (!pkg) return false;
    pkg.isActive = !pkg.isActive;
    savePackages(packages);
    return pkg.isActive;
  }

  // ─── STATS ───────────────────────────────────────────────────────────────────
  function getStats() {
    try {
      const raw = localStorage.getItem(KEYS.USERS);
      const users = raw ? JSON.parse(raw) : [];
      const customers = users.filter(u => u.role === 'customer').length;
      const photographers = users.filter(u => u.role === 'photographer').length;
      const packages = getPackages();
      return {
        totalUsers: users.length,
        customers,
        photographers,
        activePackages: packages.filter(p => p.isActive).length,
        totalPackages: packages.length,
        // Mock revenue stats
        revenue: 48600000,
        bookings: 1247,
        rating: 4.9,
      };
    } catch (e) {
      return { totalUsers: 3, customers: 1, photographers: 2, activePackages: 5, totalPackages: 5, revenue: 48600000, bookings: 1247, rating: 4.9 };
    }
  }

  // ─── PUBLIC API ──────────────────────────────────────────────────────────────
  return {
    init,
    loginAdmin,
    getAdminSession,
    isAdminLoggedIn,
    logoutAdmin,
    requireAdmin,
    getPackages,
    createPackage,
    updatePackage,
    deletePackage,
    togglePackageStatus,
    getStats,
  };
})();

PicKicAdmin.init();

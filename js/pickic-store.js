/**
 * PicKicStore — Central localStorage Data Manager
 * Không cần backend. Dữ liệu lưu trên trình duyệt.
 *
 * Keys:
 *   pickic_user          — object user đang login
 *   pickic_favorites     — array photographers yêu thích
 *   pickic_bookings      — array lịch đặt
 *   pickic_notif_unread  — number thông báo chưa đọc
 *   pickic_initialized   — flag đã seed demo data
 */

window.PicKicStore = (function () {
  'use strict';

  // ─── DEMO DATA ─────────────────────────────────────────────────────────────
  const DEMO_USER = {
    id: 'u001',
    name: 'Nguyễn Văn An',
    email: 'an.nguyen@email.com',
    phone: '0901 234 567',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIWRKDnXjM2KaMVaMG4MZ-f2-TDUuI4YDJPVUQZ6huNmjdPINP3GKkKERH51od1peg_63OEN34H6KMOvgyiRRT79MSbEo4sSWQAXvC8gUDp-psRl8zcFrLa1cAlhqy22MyRspLimSt9mw4D4d_oaWhEU46R9edGVcWOnzdeAYYHm68BO2Zv-RyttWCDRP1M9MKxj-Bckj0WUx_58I3mrXrMtHf9WjIiuywAmSTP9dAzE-G-uyazVpV2eGbZ3BcTS52-z61gZ5rhFY',
    joinedAt: '2024-08-15',
  };

  const DEMO_FAVORITES = [
    {
      id: 'ph001',
      name: 'Elena Vance',
      studio: 'Kyoto Studio',
      location: 'Hà Nội',
      rating: 4.9,
      price: '2.5M VNĐ',
      tags: ['Portrait', 'Fashion', 'Editorial'],
      image: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80")',
      savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  const DEMO_BOOKINGS = [
    {
      id: 'bk001',
      photographerId: 'ph001',
      photographerName: 'Elena Vance',
      studio: 'Kyoto Studio',
      date: '25/01/2026',
      time: '14:00',
      location: '12 Nguyễn Du, Hà Nội',
      price: '2.500.000₫',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'bk002',
      photographerId: 'ph002',
      photographerName: 'Minh Khải',
      studio: 'Sài Gòn Lens',
      date: '28/01/2026',
      time: '10:00',
      location: 'Studio tại quận 1, TP.HCM',
      price: '3.200.000₫',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&q=80',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'bk003',
      photographerId: 'ph003',
      photographerName: 'Lisa Nakamura',
      studio: 'Tokyo Minimal',
      date: 'Hôm nay',
      time: '15:00',
      location: '45 Trần Phú, Hà Nội',
      price: '1.800.000₫',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'bk004',
      photographerId: 'ph012',
      photographerName: 'Trần Quang Dũng',
      studio: 'Mono Vision',
      date: '20/01/2026',
      time: '10:00',
      location: 'Studio TP.HCM',
      price: '2.000.000₫',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  // ─── HELPERS ────────────────────────────────────────────────────────────────
  function _get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function _set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('PicKicStore: localStorage full or unavailable', e);
    }
  }

  // ─── INIT (seed demo data vào lần đầu) ─────────────────────────────────────
  function initDemoData() {
    if (_get('pickic_initialized', false)) return;
    _set('pickic_user', DEMO_USER);
    _set('pickic_favorites', DEMO_FAVORITES);
    _set('pickic_bookings', DEMO_BOOKINGS);
    _set('pickic_notif_unread', 2);
    _set('pickic_initialized', true);
    console.log('PicKicStore: Demo data initialized');
  }

  // ─── USER SESSION ───────────────────────────────────────────────────────────
  function getUser() {
    return _get('pickic_user', null);
  }

  function saveUser(userData) {
    _set('pickic_user', { ...userData, updatedAt: new Date().toISOString() });
  }

  function logout() {
    localStorage.removeItem('pickic_user');
    localStorage.removeItem('pickic_initialized');
    window.location.href = 'login.html';
  }

  // ─── FAVORITES ──────────────────────────────────────────────────────────────
  function getFavorites() {
    return _get('pickic_favorites', []);
  }

  function isFavorite(photographerId) {
    return getFavorites().some(p => p.id === photographerId);
  }

  function toggleFavorite(photographer) {
    let favs = getFavorites();
    const idx = favs.findIndex(p => p.id === photographer.id);
    if (idx >= 0) {
      favs.splice(idx, 1);        // unfavorite
    } else {
      favs.unshift({              // add to top
        ...photographer,
        savedAt: new Date().toISOString(),
      });
    }
    _set('pickic_favorites', favs);
    return idx < 0;               // true nếu vừa thêm vào
  }

  function removeFavorite(photographerId) {
    const favs = getFavorites().filter(p => p.id !== photographerId);
    _set('pickic_favorites', favs);
  }

  // ─── BOOKINGS ───────────────────────────────────────────────────────────────
  function getBookings() {
    return _get('pickic_bookings', []);
  }

  function addBooking(bookingData) {
    const bookings = getBookings();
    const newBooking = {
      ...bookingData,
      id: 'bk' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    bookings.unshift(newBooking);
    _set('pickic_bookings', bookings);
    return newBooking;
  }

  // ─── NOTIFICATIONS ──────────────────────────────────────────────────────────
  function getUnreadCount() {
    return _get('pickic_notif_unread', 0);
  }

  function markAllRead() {
    _set('pickic_notif_unread', 0);
  }

  function addUnread(n = 1) {
    _set('pickic_notif_unread', getUnreadCount() + n);
  }

  // ─── UI HELPERS (dùng ở nhiều trang) ────────────────────────────────────────
  /**
   * Cập nhật notification badge trên header.
   * Tự động ẩn/hiện dot đỏ dựa vào unread count.
   */
  function refreshNotifBadge() {
    const count = getUnreadCount();
    const dots = document.querySelectorAll('.notif-badge');
    dots.forEach(dot => {
      dot.style.display = count > 0 ? '' : 'none';
    });
  }

  // ─── PUBLIC API ─────────────────────────────────────────────────────────────
  return {
    // Init
    initDemoData,

    // User
    getUser,
    saveUser,
    logout,

    // Favorites
    getFavorites,
    isFavorite,
    toggleFavorite,
    removeFavorite,

    // Bookings
    getBookings,
    addBooking,

    // Notifications
    getUnreadCount,
    markAllRead,
    addUnread,

    // UI helpers
    refreshNotifBadge,
  };
})();

// ─── AUTO INIT ──────────────────────────────────────────────────────────────
// Seed demo data ngay khi script load
PicKicStore.initDemoData();

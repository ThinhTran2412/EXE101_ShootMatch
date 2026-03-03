# PicKic - Website Tĩnh

Website tĩnh kết nối photographers với khách hàng, được thiết kế với ngôn ngữ thiết kế hiện đại, tối giản và nghệ thuật.

## 🎨 Design System

Website sử dụng ngôn ngữ thiết kế với các đặc điểm:
- **Film Grain Overlay**: Hiệu ứng texture phim ảnh
- **Claymorphic Design**: Nút và card với hiệu ứng clay/neumorphic
- **Editorial Typography**: Kết hợp serif và sans-serif
- **Minimal Aesthetic**: Thiết kế tối giản, tập trung vào nội dung
- **Smooth Transitions**: Chuyển động mượt mà giữa các trang

## 📁 Cấu Trúc Dự Án

```
├── css/
│   └── pickic-design-system.css    # Design system chung
├── index.html                       # Trang chủ
├── discovery.html                   # Trang swipe/khám phá
├── photo-profile.html               # Profile photographer
├── concept.html                     # Chọn concept
├── all-chat.html                    # Danh sách tin nhắn
├── chat.html                        # Trang chat chi tiết
├── checkout.html                    # Đặt lịch/checkout
├── booking-success.html             # Trang thành công sau đặt lịch
├── login.html                       # Đăng nhập
├── register.html                    # Đăng ký
├── gallery.html                     # Gallery ảnh
├── search.html                      # Tìm kiếm
├── search-results.html              # Kết quả tìm kiếm
├── filters.html                     # Bộ lọc nâng cao
├── profile.html                     # Hồ sơ người dùng
├── settings.html                    # Cài đặt
├── notifications.html               # Thông báo
├── my-bookings.html                # Đặt lịch của tôi
├── favorites.html                   # Yêu thích
├── reviews.html                     # Đánh giá
├── photographer-dashboard.html      # Dashboard photographer
├── upload-portfolio.html            # Tải portfolio
├── help.html                        # Trợ giúp & FAQ
├── during-progress.html             # Booking đang tiến hành
├── create-project.html              # Tạo project brief
├── collection.html                  # Curated collections
├── payment-methods.html             # Phương thức thanh toán
├── edit-profile.html                # Chỉnh sửa hồ sơ
├── booking-detail.html              # Chi tiết booking
├── about.html                       # Về PicKic
├── contact.html                     # Liên hệ hỗ trợ
└── README.md                        # File này
```

## 🚀 Các Trang Chính

### 1. **Trang Chủ** (`index.html`)
- Giới thiệu ứng dụng
- Quick actions (Khám phá, Chọn concept, Tin nhắn)
- Featured photographers
- Navigation bar

### 2. **Discovery** (`discovery.html`)
- Swipe left/right để tìm photographer
- Hiển thị thông tin photographer (lens, aperture, ISO)
- Progress indicator
- Touch swipe support

### 3. **Profile Photographer** (`photo-profile.html`)
- Thông tin chi tiết photographer
- Portfolio gallery (masonry layout)
- Technical specs (camera, lens)
- Stats (works, rating, price)
- CTA đặt lịch

### 4. **Concept Selection** (`concept.html`)
- Chọn concept chụp ảnh
- Filter tabs (Editorial, Street, Avant-Garde)
- Concept cards với thông tin chi tiết
- Progress indicator

### 5. **Chat** (`chat.html`, `all-chat.html`)
- Danh sách cuộc trò chuyện
- Chat interface với messages
- File/image sharing
- Input với actions (mic, photo, add)

### 6. **Checkout** (`checkout.html`)
- Tóm tắt đặt lịch
- Concept, location, duration
- Photographer info
- Payment summary
- CTA đặt lịch

### 7. **Authentication** (`login.html`, `register.html`)
- Đăng nhập/Đăng ký
- Form validation
- User type selection (Khách hàng/Photographer/Studio)

### 8. **Gallery** (`gallery.html`)
- Masonry layout gallery
- Category filters
- Featured artists section

### 9. **Search** (`search.html`, `search-results.html`)
- Tìm kiếm photographers
- Trending searches
- Category suggestions
- Kết quả tìm kiếm với filters

### 10. **Filters** (`filters.html`)
- Bộ lọc nâng cao (khu vực, concept, giá, rating, thiết bị)
- Verified filter
- Reset filters

### 11. **User Profile** (`profile.html`)
- Thông tin người dùng
- Quick stats
- Menu items (bookings, favorites, reviews, payments, help, settings)

### 12. **Settings** (`settings.html`)
- Account settings
- Notification preferences
- App settings (language, dark mode, storage)
- Support & Legal links

### 13. **Notifications** (`notifications.html`)
- Thông báo đặt lịch
- Tin nhắn mới
- Cập nhật portfolio
- Nhắc nhở đánh giá

### 14. **My Bookings** (`my-bookings.html`)
- Lịch sử đặt lịch
- Tabs: Sắp tới, Đã hoàn thành, Đã hủy
- Chi tiết booking với status

### 15. **Favorites** (`favorites.html`)
- Danh sách photographers đã lưu
- Grid layout với favorite indicator

### 16. **Reviews** (`reviews.html`)
- Đánh giá đã viết
- Cần đánh giá
- Star ratings
- Edit/Delete reviews

### 17. **Photographer Dashboard** (`photographer-dashboard.html`)
- Availability toggle
- Performance stats (revenue, bookings)
- New booking requests
- Upcoming schedule
- Quick actions

### 18. **Upload Portfolio** (`upload-portfolio.html`)
- Drag & drop upload
- Image preview
- Photo details (title, concept, description, camera, lens)
- Privacy settings

### 19. **Help** (`help.html`)
- FAQ với accordion
- Search FAQ
- Category navigation
- Contact support

### 20. **During Progress** (`during-progress.html`)
- Live session tracker với timer
- Photo preview real-time
- Session controls (start, pause, extra hours)
- Quick actions (chat, profile)

### 21. **Create Project** (`create-project.html`)
- Tạo project brief chi tiết
- Chọn concept, date, location
- Upload moodboard
- Requirements và budget

### 22. **Collection** (`collection.html`)
- Curated photo collections
- Editorial grid layout
- Save và share collections
- Cinematic gallery view

### 23. **Payment Methods** (`payment-methods.html`)
- Quản lý thẻ và ví điện tử
- Thêm phương thức thanh toán
- Security info

### 24. **Edit Profile** (`edit-profile.html`)
- Chỉnh sửa thông tin cá nhân
- Upload avatar
- Cập nhật địa chỉ, giới thiệu

### 25. **Booking Detail** (`booking-detail.html`)
- Chi tiết đầy đủ về booking
- Photographer info
- Payment summary
- Actions (view progress, chat, cancel)

### 26. **About** (`about.html`)
- Thông tin về PicKic
- Sứ mệnh và đội ngũ
- Contact information
- Social links

### 27. **Contact** (`contact.html`)
- Liên hệ hỗ trợ
- Contact form
- Office hours
- Multiple contact methods

## 🎯 Tính Năng

- ✅ Navigation hoàn chỉnh giữa các trang (27+ trang)
- ✅ Responsive design (mobile-first)
- ✅ Smooth page transitions
- ✅ **Tinder-like swipe** với animations mượt mà
- ✅ **Image carousel** trong discovery cards
- ✅ **Card stack effect** (hiển thị card sau)
- ✅ Claymorphic UI components
- ✅ Film grain texture overlay
- ✅ Editorial typography
- ✅ Hover effects và animations
- ✅ Search & Filter system
- ✅ User profile & settings
- ✅ Notification system
- ✅ Booking management với live tracking
- ✅ Reviews & ratings
- ✅ Photographer dashboard
- ✅ Portfolio upload
- ✅ FAQ với accordion
- ✅ Favorites system
- ✅ **During Progress** - Live session tracker
- ✅ **Create Project** - Project brief creation
- ✅ **Collections** - Curated galleries
- ✅ Payment methods management
- ✅ Profile editing
- ✅ Booking details với full info

## 🛠️ Công Nghệ

- **HTML5**: Cấu trúc semantic
- **CSS3**: Custom properties, animations, transitions
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Tối thiểu, chỉ cho interactions cơ bản
- **Material Symbols**: Icon set

## 📱 Responsive

Website được thiết kế mobile-first với:
- Max width container (430px) cho mobile
- Touch-friendly interactions
- Bottom navigation bar (iOS style)
- Sticky headers với backdrop blur

## 🎨 Color Palette

- **Primary**: `#f8f8d9` (Beige/cream)
- **Accent**: `#1a1a0f` (Dark brown/black)
- **Clay Shadow**: `#d9d9bc` / `#e0e0c0`
- **Clay Highlight**: `#ffffff`

## 📝 Lưu Ý

- Website hoàn toàn tĩnh (static), không có backend
- Tất cả links đều hoạt động và điều hướng giữa các trang
- Form submissions được prevent default (demo only)
- Images sử dụng placeholder từ Google AIDA
- Design system được tập trung trong `css/pickic-design-system.css`

## 🚀 Cách Sử Dụng

1. Mở `index.html` trong browser
2. Navigate giữa các trang qua links và navigation bar
3. Test swipe interactions trên `discovery.html`
4. Explore các tính năng UI/UX

## 📄 License

Dự án này được tạo cho mục đích demo/portfolio.

---

**PicKic** - Kết nối Photographers với Khách hàng

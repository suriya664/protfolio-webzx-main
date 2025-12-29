# Dashboard Documentation

## Overview
Three professional dashboards have been added to your Photography Booking website:

1. **Admin Dashboard** (`admin-dashboard.html`)
2. **Photographer Dashboard** (`photographer-dashboard.html`)
3. **Customer/User Dashboard** (`customer-dashboard.html`)

## Files Created

### HTML Files
- `admin-dashboard.html` - Admin management dashboard
- `photographer-dashboard.html` - Photographer booking management
- `customer-dashboard.html` - Customer booking portal

### CSS Files
- `dashboard.css` - Shared dashboard styles (glassmorphism design)

### JavaScript Files
- `dashboard.js` - Common dashboard functionality

## Features

### ✅ Admin Dashboard
- Overview stats cards (Total Bookings, Completed, Pending, Earnings)
- Booking Management Table
- User Management (View only UI)
- Photographer Management (View only UI)
- Analytics section placeholder

### ✅ Photographer Dashboard
- Earnings summary card
- Upcoming Bookings list
- Calendar/Schedule view
- Accept/Reject booking buttons (UI only)
- Upload Gallery section (UI layout)
- Booking cards with status badges

### ✅ Customer Dashboard
- My Bookings list with status
- Payment History table
- Download Photos section
- Profile Settings form
- Quick stats overview

## Design Features

- **Glassmorphism UI** - Modern frosted glass effect
- **Fully Responsive** - Mobile, Tablet, Desktop
- **Dark/Light Theme** - Ready for theme switching
- **Smooth Animations** - Professional transitions
- **Sidebar Navigation** - Collapsible on mobile
- **Matches Existing Design** - Uses your copper/industrial theme

## Responsive Behavior

### Desktop (>1024px)
- Full sidebar (280px width)
- Two-column layouts
- Full dashboard experience

### Tablet (768px - 1024px)
- Sidebar becomes drawer menu
- Single column layouts
- Touch-friendly interface

### Mobile (<768px)
- Sidebar overlay menu
- Compact stats cards
- Stacked layouts
- Mobile-optimized tables (horizontal scroll)

## Usage

### Accessing Dashboards

Simply navigate to:
- `admin-dashboard.html` for admin access
- `photographer-dashboard.html` for photographer access
- `customer-dashboard.html` for customer access

### Sidebar Toggle

- **Desktop**: Click hamburger icon to collapse/expand sidebar
- **Mobile/Tablet**: Click hamburger icon to open/close drawer menu

### Theme Toggle

Click the moon icon in the header to toggle dark/light theme (if implemented in your main script.js).

## Integration with Existing Site

The dashboards:
- ✅ Use your existing `styles.css` variables
- ✅ Match your color scheme (copper/industrial theme)
- ✅ Use same fonts (Inter, Playfair Display)
- ✅ Include links back to main website
- ✅ Don't interfere with existing pages

## Customization

### Colors
All colors use CSS variables from `styles.css`:
- `--molten-copper` - Primary accent
- `--text-color` - Text color
- `--bg-color` - Background
- `--border-color` - Borders

### Adding Functionality

The dashboards are UI-ready. To add backend functionality:

1. Connect forms to your backend API
2. Implement real data fetching
3. Add authentication checks
4. Connect action buttons to actual functions

### Example: Adding Real Data

```javascript
// In dashboard.js or separate file
async function loadBookings() {
    const response = await fetch('/api/bookings');
    const bookings = await response.json();
    // Update UI with real data
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All dashboards are standalone HTML files
- No external dependencies except Font Awesome and Google Fonts
- Sidebar state persists on desktop (localStorage)
- Theme preference persists (localStorage)
- Tables scroll horizontally on mobile for better UX

## Future Enhancements

Consider adding:
- Real-time notifications
- Chart libraries (Chart.js, ApexCharts) for analytics
- File upload functionality
- Calendar integration (FullCalendar.js)
- Search and filtering
- Export functionality (PDF, CSV)

---

**Created for PhotoStudio Photography Booking Website**
All dashboards maintain consistency with your existing design system.


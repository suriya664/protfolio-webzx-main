/* ====================================
   DASHBOARD JAVASCRIPT - Common Functionality
   ==================================== */

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initThemeToggle();
    initMobileMenu();
    initTooltips();
});

// Sidebar Toggle Functionality
function initSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                // Mobile: Toggle sidebar with overlay
                sidebar.classList.toggle('mobile-open');
                if (sidebarOverlay) {
                    sidebarOverlay.classList.toggle('active');
                }
            } else {
                // Desktop: Collapse/Expand sidebar
                sidebar.classList.toggle('collapsed');
                // Save state to localStorage
                localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
            }
        });
    }
    
    // Close sidebar when clicking overlay (mobile)
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    // Restore sidebar state on load (desktop only)
    if (window.innerWidth > 1024) {
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('mobile-open');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
        }
    });
}

// Theme Toggle (if exists in dashboard)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
        });
        
        // Restore theme preference
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-theme');
        }
    }
}

// Mobile Menu Handling
function initMobileMenu() {
    const menuItems = document.querySelectorAll('.sidebar-menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                const sidebar = document.querySelector('.dashboard-sidebar');
                const sidebarOverlay = document.querySelector('.sidebar-overlay');
                sidebar.classList.remove('mobile-open');
                if (sidebarOverlay) {
                    sidebarOverlay.classList.remove('active');
                }
            }
        });
    });
}

// Tooltips (simple implementation)
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => tooltip.classList.add('show'), 10);
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}

// Format DateTime
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Show Notification (simple toast)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Confirm Action
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// Loading State
function setLoading(element, isLoading) {
    if (isLoading) {
        element.classList.add('loading');
        element.disabled = true;
    } else {
        element.classList.remove('loading');
        element.disabled = false;
    }
}

// Logout Functionality
function initLogout() {
    const logoutButtons = document.querySelectorAll('.logout-btn');
    
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            confirmAction('Are you sure you want to logout?', function() {
                // Clear any stored data
                localStorage.removeItem('darkTheme');
                localStorage.removeItem('sidebarCollapsed');
                
                // Show logout notification
                showNotification('Logging out...', 'info');
                
                // Redirect to home page after a short delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 500);
            });
        });
    });
}

// Initialize logout on page load
document.addEventListener('DOMContentLoaded', function() {
    initLogout();
});

// Export functions for use in dashboard pages
window.dashboardUtils = {
    formatCurrency,
    formatDate,
    formatDateTime,
    showNotification,
    confirmAction,
    setLoading,
    initLogout
};


/* ====================================
   FREELANCER PORTFOLIO - JAVASCRIPT
   ==================================== */

// ============= IMAGE FALLBACK HANDLER =============
function initImageFallbacks() {
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        const fallbackSources = [
            'https://picsum.photos/600/500?random=2',
            'https://images.unsplash.com/photo-1493863641943-9b67192e85d4?w=600&h=500&fit=crop',
            'https://via.placeholder.com/600x500/B87333/FFFFFF?text=Professional+Photographer'
        ];
        
        let currentIndex = 0;
        
        aboutImage.addEventListener('error', function() {
            if (currentIndex < fallbackSources.length - 1) {
                currentIndex++;
                this.src = fallbackSources[currentIndex];
            } else {
                // Final fallback - SVG placeholder
                this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIj48cmVjdCBmaWxsPSIjRjVGNUY1IiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjUwMCIvPjx0ZXh0IGZpbGw9IiNCODYzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIHg9IjUwJSIgeT0iNTAlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5Qcm9mZXNzaW9uYWwgUGhvdG9ncmFwaGVyPC90ZXh0Pjwvc3ZnPg==';
                this.style.display = 'block';
            }
        });
        
        // Try to load the image
        if (!aboutImage.complete || aboutImage.naturalHeight === 0) {
            aboutImage.src = fallbackSources[0];
        }
    }
}

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize skip button first
        const skipBtn = document.getElementById('skip-animation');
        const openingAnim = document.getElementById('opening-animation');
        if (skipBtn && openingAnim) {
            skipBtn.addEventListener('click', () => {
                openingAnim.classList.add('hide');
                setTimeout(() => {
                    openingAnim.style.display = 'none';
                }, 300);
            });
        }
        
    initImageFallbacks();
    initOpeningAnimation();
    initPreloader();
    initNavigation();
    initThemeToggle();
    initTypingEffect();
        initScrollAnimations();
        initCounters();
        initSkillBars();
        initPortfolioFilter();
        initPortfolioModal();
        initTestimonialSlider();
        initContactForm();
        initBookingForm();
        initFAQ();
        initScrollTop();
        initSmoothScroll();
        initFooterYear();
        initCursorTrail();
        
        console.log('Website initialized successfully');
    } catch (error) {
        console.error('Error initializing website:', error);
        // Hide animations on error
        const openingAnim = document.getElementById('opening-animation');
        const preloader = document.querySelector('.preloader');
        if (openingAnim) openingAnim.style.display = 'none';
        if (preloader) preloader.style.display = 'none';
    }
});

// ============= OPENING ANIMATION =============
function initOpeningAnimation() {
    const openingAnim = document.getElementById('opening-animation');
    if (!openingAnim) return;
    
    // Hide opening animation quickly for better UX
    const hideAnimation = () => {
        openingAnim.classList.add('hide');
        setTimeout(() => {
            openingAnim.style.display = 'none';
        }, 1000);
    };
    
    // Hide after page loads (reduced time)
    window.addEventListener('load', () => {
        setTimeout(hideAnimation, 2000); // 2 seconds
    });
    
    // Fallback: Hide after 3 seconds regardless
    setTimeout(hideAnimation, 3000);
    
    // Allow manual skip on click
    openingAnim.addEventListener('click', hideAnimation);
}

// ============= CURSOR TRAIL EFFECT =============
function initCursorTrail() {
    let trail = [];
    const trailLength = 8;
    let lastTime = 0;
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        // Throttle trail creation for performance
        if (now - lastTime < 50) return;
        lastTime = now;
        
        const trailDot = document.createElement('div');
        trailDot.className = 'cursor-trail';
        trailDot.style.left = e.clientX + 'px';
        trailDot.style.top = e.clientY + 'px';
        document.body.appendChild(trailDot);
        
        trail.push(trailDot);
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        setTimeout(() => {
            if (trailDot.parentNode) {
                trailDot.parentNode.removeChild(trailDot);
            }
        }, 500);
    });
}

// ============= PRELOADER =============
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;
    
    const hidePreloader = () => {
        if (preloader && !preloader.classList.contains('hide')) {
            preloader.classList.add('hide');
            setTimeout(() => {
                if (preloader) {
                    preloader.style.display = 'none';
                }
            }, 500);
        }
    };
    
    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 2500);
    } else {
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 2500);
        });
    }
    
    // Fallback: Hide preloader after 3 seconds regardless
    setTimeout(hidePreloader, 3000);
}

// ============= NAVIGATION =============
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to get current navbar height
    function getNavbarHeight() {
        return navbar.offsetHeight;
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu on dashboard button click
    const dashboardBtnMobile = document.querySelector('.nav-dashboard-btn-mobile');
    if (dashboardBtnMobile) {
        dashboardBtnMobile.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    }

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section, .hero');
        const navbarHeight = getNavbarHeight();

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Use dynamic navbar height for consistent detection
            if (window.scrollY >= sectionTop - navbarHeight - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============= THEME TOGGLE =============
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    
    // Get all theme toggle buttons
    const themeToggles = [themeToggle, themeToggleMobile].filter(Boolean);
    
    if (themeToggles.length === 0) return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
        updateThemeIcons(true);
    } else {
        body.classList.remove('dark-theme');
        updateThemeIcons(false);
    }
    
    // Toggle theme on button click for all toggle buttons
    themeToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                body.classList.toggle('dark-theme');
                const isDark = body.classList.contains('dark-theme');
                
                // Save preference to localStorage
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                
                // Update all icons
                updateThemeIcons(isDark);
                
                // Close mobile menu if mobile toggle was clicked
                if (toggle.id === 'theme-toggle-mobile') {
                    const hamburger = document.getElementById('hamburger');
                    const navMenu = document.getElementById('nav-menu');
                    if (hamburger && navMenu) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        }
    });
    
    // Function to update theme icons for all toggle buttons
    function updateThemeIcons(isDark) {
        themeToggles.forEach(toggle => {
            if (!toggle) return;
            const icon = toggle.querySelector('i');
            if (icon) {
                if (isDark) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    toggle.setAttribute('aria-label', 'Toggle Light Mode');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    toggle.setAttribute('aria-label', 'Toggle Dark Mode');
                }
            }
        });
    }
}

// ============= TYPING EFFECT =============
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const words = [
        'Photographer',
        'Wedding Photographer',
        'Portrait Photographer',
        'Event Photographer',
        'Creative Artist'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 100;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ============= SCROLL ANIMATIONS =============
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .blog-card, .skill-item, .timeline-item, .contact-item'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============= ANIMATED COUNTERS =============
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const countedCounters = new Set();

    const countUp = (counter) => {
        // Skip if already counted
        if (countedCounters.has(counter)) return;
        countedCounters.add(counter);
        counter.setAttribute('data-counted', 'true');
        
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target) || target === 0) {
            counter.textContent = target + '+';
            counter.style.opacity = '1';
            return;
        }
        
        // Show initial value immediately
        counter.style.opacity = '1';
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;
        let step = 0;

        const updateCounter = () => {
            step++;
            current += increment;
            
            if (step < steps) {
                const displayValue = Math.ceil(current);
                counter.textContent = displayValue + '+';
                setTimeout(updateCounter, stepDuration);
            } else {
                counter.textContent = target + '+';
            }
        };

        // Start counting immediately
        updateCounter();
    };

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Count all counters in the about section
                const sectionCounters = entry.target.querySelectorAll('.stat-number');
                sectionCounters.forEach(counter => {
                    if (!countedCounters.has(counter)) {
                        countUp(counter);
                    }
                });
            }
        });
    }, observerOptions);

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        observer.observe(aboutSection);
        
        // Check if section is already visible on load - trigger immediately
        const checkVisibility = () => {
            const rect = aboutSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
            if (isVisible) {
                counters.forEach(counter => {
                    if (!countedCounters.has(counter)) {
                        countUp(counter);
                    }
                });
            }
        };
        
        // Check immediately
        checkVisibility();
        
        // Also check after a short delay to catch any timing issues
        setTimeout(checkVisibility, 100);
        setTimeout(checkVisibility, 500);
        
        // Also trigger on scroll to catch when user scrolls to it
        window.addEventListener('scroll', checkVisibility, { once: false, passive: true });
    }
}

// ============= SKILL BARS ANIMATION =============
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;

    const animateSkills = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateSkills();
                animated = true;
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ============= PORTFOLIO FILTER =============
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioGrid = document.querySelector('.portfolio-grid');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            // Handle single item centering
            setTimeout(() => {
                const visibleItems = Array.from(portfolioItems).filter(item => 
                    item.style.display !== 'none' && 
                    (filter === 'all' || item.getAttribute('data-category') === filter)
                );
                
                if (visibleItems.length === 1) {
                    portfolioGrid.classList.add('single-item');
                } else {
                    portfolioGrid.classList.remove('single-item');
                }
            }, 350);
        });
    });

    // Initial check for single items
    const visibleItems = Array.from(portfolioItems).filter(item => 
        item.style.display !== 'none'
    );
    
    if (visibleItems.length === 1) {
        portfolioGrid.classList.add('single-item');
    }
}

// ============= PORTFOLIO MODAL =============
function initPortfolioModal() {
    const modal = document.getElementById('portfolio-modal');
    const viewBtns = document.querySelectorAll('.view-btn');
    const closeBtn = document.querySelector('.close-modal');

    // Portfolio project data
    const projects = {
        '1': {
            title: 'Wedding Ceremony',
            category: 'Wedding Photography',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop',
            description: 'Beautiful outdoor wedding ceremony captured with natural lighting and artistic composition. Every moment from the vows to the first dance was perfectly documented, creating timeless memories for the couple.',
            technologies: ['Canon EOS R5', 'Natural Light', 'Adobe Lightroom', 'Color Grading']
        },
        '2': {
            title: 'Professional Portrait',
            category: 'Portrait Photography',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=900&fit=crop',
            description: 'Professional headshot session with studio lighting setup. Captured the subject\'s personality and professionalism through careful composition and lighting techniques.',
            technologies: ['Sony A7III', 'Studio Lighting', 'Adobe Photoshop', 'Professional Editing']
        },
        '3': {
            title: 'Family Session',
            category: 'Family Photography',
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=900&fit=crop',
            description: 'Outdoor family portrait session capturing genuine moments and connections. Used natural light and scenic backgrounds to create warm, authentic family memories.',
            technologies: ['Canon EOS R5', 'Natural Light', 'Adobe Lightroom', 'Family Portraits']
        },
        '4': {
            title: 'Wedding Reception',
            category: 'Wedding Photography',
            image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=900&fit=crop',
            description: 'Romantic wedding reception photography capturing the celebration, emotions, and joy of the special day. Candid moments and posed shots beautifully documented.',
            technologies: ['Canon EOS R5', 'Low Light Photography', 'Adobe Lightroom', 'Event Coverage']
        },
        '5': {
            title: 'Corporate Event',
            category: 'Event Photography',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=900&fit=crop',
            description: 'Professional corporate event coverage documenting speakers, networking, and key moments. Delivered high-quality images for company marketing and documentation.',
            technologies: ['Sony A7III', 'Event Photography', 'Adobe Lightroom', 'Quick Turnaround']
        },
        '6': {
            title: 'Business Headshot',
            category: 'Portrait Photography',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1200&h=900&fit=crop',
            description: 'Professional business headshot session for corporate use. Clean, modern style with perfect lighting and composition suitable for LinkedIn, websites, and marketing materials.',
            technologies: ['Canon EOS R5', 'Studio Setup', 'Adobe Photoshop', 'Professional Retouching']
        }
    };

    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                document.getElementById('modal-title').textContent = project.title;
                document.getElementById('modal-category').textContent = project.category;
                const modalImg = document.getElementById('modal-img');
                modalImg.src = project.image;
                modalImg.onerror = function() {
                    this.src = 'https://via.placeholder.com/800x600/1A1A1A/C0C0C0?text=Image+Not+Available';
                };
                document.getElementById('modal-description').textContent = project.description;

                // Update technologies
                const techContainer = document.getElementById('modal-tech');
                techContainer.innerHTML = '';
                project.technologies.forEach(tech => {
                    const span = document.createElement('span');
                    span.textContent = tech;
                    techContainer.appendChild(span);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ============= TESTIMONIAL SLIDER =============
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const dotsContainer = document.getElementById('testimonial-dots');

    if (testimonials.length === 0) return;

    let currentSlide = 0;

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);

    // Show first slide
    showSlide(0);
}

// ============= CONTACT FORM =============
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission (replace with actual API call)
        try {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // In production, replace this with:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            showMessage('Thank you! Your message has been sent successfully.', 'success');
            form.reset();

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

        } catch (error) {
            showMessage('Oops! Something went wrong. Please try again.', 'error');
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
        }
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// ============= BOOKING FORM =============
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    const formMessage = document.getElementById('booking-form-message');
    const dateInput = document.getElementById('booking-date');

    // Set minimum date to today
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('booking-name').value,
            email: document.getElementById('booking-email').value,
            phone: document.getElementById('booking-phone').value,
            package: document.getElementById('booking-package').value,
            date: document.getElementById('booking-date').value,
            time: document.getElementById('booking-time').value,
            location: document.getElementById('booking-location').value,
            message: document.getElementById('booking-details').value
        };

        // Validate
        if (!formData.name || !formData.email || !formData.phone || !formData.package || !formData.date || !formData.time) {
            showBookingMessage('Please fill in all required fields', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showBookingMessage('Please enter a valid email address', 'error');
            return;
        }

        // Validate date is not in the past
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showBookingMessage('Please select a future date', 'error');
            return;
        }

        // Simulate form submission
        try {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // In production, replace this with:
            // const response = await fetch('/api/booking', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            showBookingMessage('Thank you! Your booking request has been submitted. We\'ll confirm your session within 24 hours.', 'success');
            form.reset();

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

        } catch (error) {
            showBookingMessage('Oops! Something went wrong. Please try again.', 'error');
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Submit Booking Request <i class="fas fa-calendar-check"></i>';
            submitBtn.disabled = false;
        }
    });

    function showBookingMessage(message, type) {
        if (!formMessage) return;
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 6000);
    }
}

// ============= SCROLL TO TOP =============
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============= SMOOTH SCROLL =============
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const navbar = document.getElementById('navbar');

    // Function to get current navbar height
    function getNavbarHeight() {
        return navbar.offsetHeight;
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                // Calculate navbar height dynamically
                const navbarHeight = getNavbarHeight();
                const offsetTop = target.offsetTop - navbarHeight - 20; // Extra 20px for better spacing

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============= NEWSLETTER FORM =============
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
}

// ============= LAZY LOADING IMAGES =============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ============= PARALLAX EFFECT (Removed to prevent overlap issues) =============
// The parallax effect was causing the hero section to overlap with other sections
// during scroll, so it has been removed for better layout stability

// ============= CONSOLE MESSAGE =============
console.log('%c📸 Welcome to Photo Studio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cBook your photography session today!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cContact us: hello@photostudio.com', 'font-size: 14px; color: #ec4899;');


// ============= FOOTER YEAR =============
function initFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}


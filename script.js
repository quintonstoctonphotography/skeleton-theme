
// Drawer Navigation
const hamburger = document.querySelector('.hamburger');
const drawerNav = document.getElementById('drawerNav');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');
const drawerLinks = document.querySelectorAll('.drawer-links a');

// Open drawer
hamburger.addEventListener('click', () => {
    drawerNav.classList.add('active');
    drawerOverlay.classList.add('active');
});

// Close drawer
function closeDrawer() {
    drawerNav.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer when clicking a link
drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeDrawer();
    });
});

// Carousel Functionality
function initCarousel(trackId, prevBtnId, nextBtnId, counterId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const counter = document.getElementById(counterId);

    if (!track || !prevBtn || !nextBtn) return;

    let currentScroll = 0;
    const itemWidth = track.querySelector('.carousel-item').offsetWidth;
    const gap = 24; // 1.5rem gap
    const scrollAmount = itemWidth + gap;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    const totalItems = track.querySelectorAll('.carousel-item').length;
    let currentPage = 1;

    function updateButtons() {
        prevBtn.disabled = currentScroll <= 0;
        nextBtn.disabled = currentScroll >= maxScroll;

        // Calculate current page
        currentPage = Math.round(currentScroll / scrollAmount) + 1;
        if (counter) {
            counter.textContent = `${currentPage}/${totalItems}`;
        }
    }

    prevBtn.addEventListener('click', () => {
        currentScroll = Math.max(0, currentScroll - scrollAmount);
        track.style.transform = `translateX(-${currentScroll}px)`;
        updateButtons();
    });

    nextBtn.addEventListener('click', () => {
        currentScroll = Math.min(maxScroll, currentScroll + scrollAmount);
        track.style.transform = `translateX(-${currentScroll}px)`;
        updateButtons();
    });

    updateButtons();
}

// Initialize all carousels and performance features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousels
    initCarousel('merchTrack', 'merchPrev', 'merchNext', 'merchCounter');
    initCarousel('serviceTrack', 'servicePrev', 'serviceNext', 'serviceCounter');
    initCarousel('presetTrack', 'presetPrev', 'presetNext', 'presetCounter');

    // Performance: Lazy load images
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
});

// Recalculate on window resize
window.addEventListener('resize', () => {
    initCarousel('merchTrack', 'merchPrev', 'merchNext', 'merchCounter');
    initCarousel('serviceTrack', 'servicePrev', 'serviceNext', 'serviceCounter');
    initCarousel('presetTrack', 'presetPrev', 'presetNext', 'presetCounter');
});


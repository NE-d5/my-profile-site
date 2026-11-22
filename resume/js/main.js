// 모바일 메뉴 토글
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
    mobileMenu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}

menuBtn.addEventListener('click', () => {
    setMenu(mobileMenu.classList.contains('hidden'));
});

// 메뉴 링크를 누르면 모바일 메뉴 닫기
mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
});

// 스크롤 시 현재 섹션의 메뉴 링크 강조
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-40% 0px -55% 0px' }); // 화면 중앙 부근에 오면 현재 섹션으로 판단

sections.forEach((section) => observer.observe(section));

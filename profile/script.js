// 노귀현 프로필 - 인터랙션 스크립트

// 1. 모바일 메뉴 토글
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// 2. 스크롤 시 요소 나타나기 (.reveal -> .visible)
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 한 번만 실행
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));

// 3. 이메일 복사 버튼
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');
const EMAIL = 'dk99605@naver.com';

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyMsg.textContent = '이메일이 복사되었습니다.';
  } catch (err) {
    // 클립보드 API를 쓸 수 없는 환경(http 등)에서는 안내만 표시
    copyMsg.textContent = '복사에 실패했습니다. 이메일을 직접 선택해 주세요.';
  }
});

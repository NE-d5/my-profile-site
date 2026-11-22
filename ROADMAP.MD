# 개발자 웹 이력서 ROADMAP

## 목표

개발자 한 명의 소개와 경력을 보여주는 단일 페이지 웹 이력서를 만든다. 빌드 도구 없이 브라우저에서 `index.html`을 열면 바로 동작하는 정적 사이트를 목표로 한다.

## 기술 스택

- HTML5: 시맨틱 태그(`header`, `main`, `section`, `footer`)로 구조 작성
- CSS3: Tailwind로 처리하기 어려운 부분만 `css/styles.css`에서 보완
- JavaScript (Vanilla): 스크롤 이동, 모바일 메뉴 토글 등 최소한의 동작
- Tailwind CSS: CDN(`cdn.tailwindcss.com`)으로 로드, 설치나 빌드 단계 없음

## 폴더 구조

```
resume/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── ROADMAP.MD
```

## 이력서 내용 (일반적인 샘플)

| 섹션 | 내용 |
|------|------|
| 소개 (Hero) | 이름, 직무(프론트엔드 개발자), 한 줄 소개, 연락처 버튼 |
| 소개글 (About) | 3~4줄 자기소개와 개발 철학 |
| 기술 스택 (Skills) | HTML, CSS, JavaScript, Tailwind CSS, Git |
| 경력 (Experience) | 회사명, 직책, 기간, 담당 업무 2~3줄 (2개 항목) |
| 프로젝트 (Projects) | 프로젝트명, 설명, 사용 기술, 링크 (카드 3개) |
| 학력 (Education) | 학교, 전공, 기간 |
| 연락처 (Contact) | 이메일, GitHub, LinkedIn |

> 실제 내용은 샘플이므로 본인 정보로 교체한다.

## 단계별 개발 계획

### 1단계: 프로젝트 세팅

- [ ] 폴더와 `index.html`, `css/styles.css`, `js/main.js` 생성
- [ ] HTML 기본 골격 작성 (`lang="ko"`, viewport 메타 태그)
- [ ] Tailwind CDN과 CSS, JS 파일 연결
- [ ] 브라우저에서 열어 Tailwind 클래스 적용 확인

### 2단계: 레이아웃과 콘텐츠 작성

- [ ] 상단 네비게이션 바 (섹션 앵커 링크)
- [ ] Hero, About, Skills, Experience, Projects, Education, Contact 섹션 마크업
- [ ] 샘플 텍스트 입력

### 3단계: 스타일링

- [ ] 색상과 폰트 정하기 (본문은 Pretendard 같은 한글 웹폰트)
- [ ] 섹션별 여백과 최대 너비(`max-w-4xl`) 통일
- [ ] 기술 스택은 뱃지, 프로젝트는 카드로 표현
- [ ] 버튼과 카드 호버 효과 추가

### 4단계: 반응형

- [ ] 모바일 우선으로 작성하고 `md:`, `lg:` 접두어로 확장
- [ ] 모바일에서 네비게이션을 햄버거 메뉴로 전환
- [ ] 320px, 768px, 1280px 너비에서 레이아웃 확인

### 5단계: JavaScript 동작

- [ ] 네비게이션 클릭 시 부드러운 스크롤 (CSS `scroll-behavior: smooth`로 처리 가능하면 JS 생략)
- [ ] 모바일 메뉴 열기/닫기 토글
- [ ] 스크롤 시 현재 섹션 메뉴 강조 (선택)

### 6단계: 마무리와 배포

- [ ] 이미지 `alt` 속성, 링크 `aria-label`, 색 대비 등 접근성 점검
- [ ] 메타 태그 (`title`, `description`, OG 태그) 추가
- [ ] 깨진 링크와 오타 확인
- [ ] GitHub Pages 또는 Netlify에 배포

## 완료 기준

- `index.html`을 열면 모든 섹션이 표시된다.
- 모바일과 데스크톱 모두에서 레이아웃이 깨지지 않는다.
- 외부 의존성은 Tailwind CDN과 웹폰트뿐이다.

## 나중에 고려할 것 (지금은 하지 않음)

- 다크 모드 토글
- 영문/국문 전환
- PDF 다운로드 버튼

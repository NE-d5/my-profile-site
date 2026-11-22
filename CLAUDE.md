# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- 기본 응답 언어: 한국어
- 코드 주석: 한국어로 작성
- 커밋 메시지: 한국어로 작성
- 문서화: 한국어로 작성
- 변수명, 함수명: 영어 (코드 표준 준수)
- UI 문구도 한국어로 작성해 기존 파일과 맞춘다.

## Commands

No build, lint, or test tooling. No package manifest, no git repo. Open an HTML file in a browser to run it (e.g. `start "261027 운세 뽑기/slides.html"`). `bucket-list-main` can also be served with `python -m http.server 8000` from its folder.

## Structure

This folder is a collection of independent study projects. Each subfolder is self-contained, with no shared code between them.

- `261027 운세 뽑기/`: two standalone HTML files (CSS and JS inline, no libraries, no build step).
- `261110 프로젝트 분석하기/bucket-list-main/`: vanilla JS bucket-list app styled with Tailwind CDN. It has its own `CLAUDE.md` with architecture and known pitfalls. Read that first when working there.
- `ROADMAP.MD`: plan for a developer web résumé (HTML/CSS/JS + Tailwind CDN). The résumé itself is not built yet. Follow the roadmap's folder layout when starting it.

### 261027 운세 뽑기/slides.html

37-slide lecture deck in Korean (`lang="ko"`). Slides are `<section class="slide" id="sN">` stacked vertically with CSS scroll-snap. Section comments (`섹션 1`–`섹션 5`) group slides. Slide numbering has gaps (no `s14`), so don't assume contiguous IDs.

- Animation: elements with `.reveal` (+ `.d1`–`.d4` delay classes) fade in. An IntersectionObserver adds `.visible` to a slide when it's ~35% on screen, which triggers the reveal.
- Navigation: JS `go(index)` drives arrow keys, space, PageUp/PageDown, wheel, and touch swipe. `F` toggles fullscreen.
- Styling: all colors and type sizes are CSS custom properties on `:root`. Font-size and padding tokens scale down under `max-height` media queries. Change them there, not per element.
- External resources: Pretendard (jsDelivr) and JetBrains Mono (Google Fonts). Without network, fallbacks apply.

### 261027 운세 뽑기/fortune.html

Single-screen "오늘의 운세" card draw. The `CARDS` array (8 entries: icon, name, msg) is the only content. Click handler picks a random card with `Math.random()`, then flips it by toggling `.flipped` (CSS `rotateY(180deg)`, 0.8s transition).

## Conventions

- Keep each project standalone. Don't add shared CSS/JS files or a build step unless asked.

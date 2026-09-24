export const CATEGORY_ORDER = ['개발언어', '마크업/스타일', '프레임워크', '라이브러리', '데이터베이스', '개발툴', '기타']

// 프로젝트 노출 순서: CAFE ERP → 새싹 → 회계 자동화 → 포트폴리오 → Movie Log 앱 → Movie Log
export const PROJECT_ORDER = [1, 2, 5, 6, 4, 3]

// 프로젝트 카드 태그에서 제외할 보조 기술 (상세 페이지에는 전체 표시)
export const MINOR_TECH = new Set([
  'HTML5', 'CSS3', 'VSCode', 'STS', 'Eclipse', 'Android Studio',
  'HeidiSQL', 'DBeaver', 'R Studio', 'Git/GitHub', 'Figma',
])

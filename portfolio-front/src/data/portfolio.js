// 기존 Spring Boot API(data.sql) 응답과 동일한 형태의 정적 데이터

export const profile = {
  name: '유조현',
  nameEn: 'Yu JoHyun',
  email: 'yjh0207m@naver.com',
  phone: '010-8868-1937',
  location: '경기도 수원시 장안구',
  github: 'https://github.com/yjh0207m',
  summary: '기술로 무언가를 만들고 자동화하는 일에 매력을 느끼는 풀스택 개발자입니다.',
  desiredJob: '풀스택, PM, 앱 개발, RPA 개발',
  position: '풀스택 개발자',
}

// showOnProfile=false 항목은 프로젝트 기술 스택에는 쓰이지만 스킬 목록에는 노출하지 않음
const techSkills = [
  { id: 1, name: 'Java', category: '개발언어', showOnProfile: true },
  { id: 2, name: 'Python', category: '개발언어', showOnProfile: true },
  { id: 3, name: 'JavaScript', category: '개발언어', showOnProfile: true },
  { id: 4, name: 'TypeScript', category: '개발언어', showOnProfile: true },
  { id: 5, name: 'Spring Boot', category: '프레임워크', showOnProfile: true },
  { id: 6, name: 'Spring Security', category: '프레임워크', showOnProfile: true },
  { id: 7, name: 'React Native', category: '프레임워크', showOnProfile: true },
  { id: 8, name: 'Expo', category: '프레임워크', showOnProfile: true },
  { id: 9, name: 'React', category: '라이브러리', showOnProfile: true },
  { id: 10, name: 'MyBatis', category: '라이브러리', showOnProfile: true },
  { id: 11, name: 'NumPy', category: '라이브러리', showOnProfile: true },
  { id: 12, name: 'pandas', category: '라이브러리', showOnProfile: true },
  { id: 13, name: 'prophet', category: '라이브러리', showOnProfile: true },
  { id: 14, name: 'scikit-learn', category: '라이브러리', showOnProfile: true },
  { id: 15, name: 'VSCode', category: '개발툴', showOnProfile: true },
  { id: 16, name: 'STS', category: '개발툴', showOnProfile: true },
  { id: 17, name: 'Eclipse', category: '개발툴', showOnProfile: true },
  { id: 18, name: 'Android Studio', category: '개발툴', showOnProfile: true },
  { id: 19, name: 'MariaDB', category: '데이터베이스', showOnProfile: true },
  { id: 20, name: 'Firebase', category: '데이터베이스', showOnProfile: true },
  { id: 21, name: 'Brity RPA', category: '기타', showOnProfile: true },
  { id: 22, name: 'Git/GitHub', category: '기타', showOnProfile: true },
  { id: 23, name: 'Figma', category: '기타', showOnProfile: true },
  { id: 24, name: 'HeidiSQL', category: '기타', showOnProfile: false },
  { id: 25, name: 'DBeaver', category: '기타', showOnProfile: false },
  { id: 26, name: 'R Studio', category: '기타', showOnProfile: false },
  { id: 27, name: 'Node.js', category: '프레임워크', showOnProfile: true },
  { id: 28, name: 'HTML5', category: '마크업/스타일', showOnProfile: true },
  { id: 29, name: 'CSS3', category: '마크업/스타일', showOnProfile: true },
]

export const skills = techSkills
  .filter((s) => s.showOnProfile)
  .map(({ name, category }) => ({ name, category }))

const techById = new Map(techSkills.map((s) => [s.id, { name: s.name, category: s.category }]))
const stack = (...ids) => ids.map((id) => techById.get(id))
// public/projects/<slug>/1.jpg ~ n.jpg (첫 번째 이미지가 카드 썸네일)
const shots = (slug, count) => Array.from({ length: count }, (_, i) => `/projects/${slug}/${i + 1}.jpg`)

export const projects = [
  {
    id: 1,
    title: 'CAFE ERP',
    description:
      'Spring Boot 기반 카페 통합 관리 시스템. Brity RPA·Python으로 데이터 분석 소요 시간을 33초로 단축. 재무제표 및 보고서용 대시보드 생성시간을 3분 45초로 단축.',
    techStack: stack(1, 2, 3, 28, 29, 5, 6, 10, 15, 16, 19, 24, 21, 22),
    period: '2026.03 – 2026.04',
    role: '팀장',
    implementationType: '팀협동',
    lesson:
      '팀장으로서 일정 관리, 업무 분담, 원활한 소통과 함께 보안·무결성 등 프로젝트 전반을 꼼꼼히 검증하는 역량이 중요함을 깨달았습니다. OCR, AI 모델, Brity RPA 등 외부 기술 간의 연계가 결과물의 완성도를 좌우한다는 점을 체감했습니다.',
    metrics: [
      { value: '33초', label: '데이터 분석 소요 시간 (기존 60분)' },
      { value: '3분 45초', label: '리포트 자동 생성' },
      { value: '6개', label: '구현 모듈 수' },
    ],
    githubUrl: 'https://github.com/yjh0207m/CAFE_ERP_Project',
    demoUrl: '',
    pptUrl: '/ppt/cafe_erp.pdf',
    images: shots('cafe-erp', 4),
  },
  {
    id: 2,
    title: '새싹 (DateApp)',
    description:
      'React Native 기반 데이트 코스 추천 소셜 앱. Firebase 실시간 DB로 채팅 기능 구현. 3방향 스와이프 UI 탐색으로 피드형 매칭 구현. Google Map API 활용 위치 기반 매칭 시도 시스템 구현',
    techStack: stack(3, 4, 28, 29, 7, 20, 18, 22),
    period: '2026.01',
    role: '단독 개발',
    implementationType: '단독',
    lesson:
      'Open API를 활용하며 외부 리소스를 적재적소에 사용하는 것도 개발 역량의 일부임을 깨달았습니다. 또한 단독 작업일수록 탄탄한 사전 설계가 개발 효율을 좌우한다는 점을 체감했습니다.',
    metrics: [
      { value: '실시간', label: 'Firebase 채팅 구현' },
      { value: '3개', label: '핵심 화면 구현' },
      { value: 'TypeScript', label: '타입 안정성 확보' },
    ],
    githubUrl: 'https://github.com/yjh0207m/SaeSak',
    demoUrl: '',
    pptUrl: null,
    images: shots('saesak', 4),
  },
  {
    id: 3,
    title: 'Movie Log',
    description: 'React로 구현한 영화 예매 종합 플랫폼. 검색·기록·예매 등의 기본 기능을 제공합니다.',
    techStack: stack(28, 29, 3, 9, 19, 24, 25, 23, 22, 15),
    period: '2025.12',
    role: '프론트엔드 개발',
    implementationType: '팀협동',
    lesson:
      'DB 스키마를 탄탄히 설계할수록 개발 중 시행착오가 줄고 업무 효율이 높아진다는 것을 체감했습니다. 또한 독창적인 컨셉도 중요하지만, 표준화된 디자인 체계 안에서 차별성을 추구하는 것이 더 효과적임을 느꼈습니다.',
    metrics: [
      { value: 'API', label: '영화 검색 연동' },
      { value: '기록', label: '감상 로그 저장' },
      { value: 'TypeScript', label: '타입 안정성' },
    ],
    githubUrl: 'https://github.com/PigDuck5390/MovieLog',
    demoUrl: '',
    pptUrl: '/ppt/movie_log.pdf',
    images: shots('movie-log', 4),
  },
  {
    id: 4,
    title: 'Movie Log 모바일 앱',
    description:
      'React Native + Expo로 제작한 모바일 영화 예매 플랫폼. 검색·기록·예매 등의 기본 기능을 제공합니다.',
    techStack: stack(3, 4, 28, 29, 8, 20, 18, 22),
    period: '2026.01',
    role: '프론트엔드 개발',
    implementationType: '팀협동',
    lesson:
      '서비스 개발 시 웹/앱 확장을 고려한 DB 선택이 범용성과 이식성에 큰 영향을 미친다는 것을 깨달았습니다. 최적화된 코드가 개발 속도, 유지 보수성, 처리 성능을 좌우한다는 점을 체감했습니다.',
    metrics: [
      { value: '좌석', label: '인터랙티브 선택 UI' },
      { value: 'Expo', label: '크로스 플랫폼 지원' },
      { value: '전체', label: '예매 플로우 구현' },
    ],
    githubUrl: 'https://github.com/PigDuck5390/MovieLogApp',
    demoUrl: '',
    pptUrl: null,
    images: shots('movie-log-app', 3),
  },
  {
    id: 5,
    title: '회계 자동화 시스템',
    description:
      'Brity RPA를 활용한 회계 업무 자동화 프로젝트. 매출·매입 데이터 자동 집계 및 보고서 자동 생성 프로세스를 구현했습니다.',
    techStack: stack(21, 2),
    period: '2026.03',
    role: '자동화 개발',
    implementationType: '팀협동',
    lesson: 'RPA 자동화를 통해 반복 업무를 제거하는 것이 실질적인 업무 효율 개선으로 이어진다는 점을 체감했습니다.',
    metrics: [],
    githubUrl: '',
    demoUrl: '',
    pptUrl: '/ppt/accounting_rpa.pdf',
    images: shots('accounting', 4),
  },
  {
    id: 6,
    title: '개발자 포트폴리오',
    description:
      'Spring Boot REST API + React 기반 풀스택 개발자 웹 포트폴리오. DB 설계부터 풀스택을 단독으로 개발하여 AWS(Elastic Beanstalk·S3·CloudFront)로 배포했으며, 이후 비용 최적화를 위해 백엔드 없는 정적 구조로 전환해 Vercel로 이전했습니다.',
    techStack: stack(1, 3, 28, 29, 5, 9, 19, 22),
    period: '2026.04',
    role: '풀스택 개발',
    implementationType: '단독',
    lesson:
      '백엔드 및 DB 설계와 프론트엔드 UI를 혼자 구현·연동·배포하며 풀스택 역량과 IaaS 활용 역량을 키웠습니다. 또한 AWS 운영 중 예상치 못한 요금이 발생한 경험을 계기로 서버 비용을 고려한 아키텍처 설계와 Vercel 기반 정적 배포로의 전환 방법을 익혔습니다.',
    metrics: [
      { value: '풀스택', label: '단독 설계·개발' },
      { value: '6개', label: 'REST API 엔드포인트' },
      { value: '5개', label: '구현 페이지' },
    ],
    githubUrl: 'https://github.com/yjh0207m/YJH---Developer-Portfolio-',
    demoUrl: '',
    pptUrl: null,
    images: [1, 2, 3, 4].map((n) => `/projects/portfolio/${n}.png`),
  },
]

export const highlights = [
  { value: '33초', label: '데이터 분석', sub: '기존 60분 → RPA 자동화' },
  { value: '4.18', label: '학점', sub: '4.5 만점 기준' },
  { value: `${projects.length}개`, label: '프로젝트', sub: '풀스택 · 모바일 · RPA' },
]

export const resume = {
  education: [
    {
      schoolName: '국제예술대학교',
      major: '실용음악과 작곡 전공',
      startYear: '2019',
      endYear: '2023',
      graduation: '졸업',
      gpa: 4.18,
      gpaMax: 4.5,
    },
    {
      schoolName: '율천고등학교',
      major: '일반',
      startYear: '2016',
      endYear: '2019',
      graduation: '졸업',
      gpa: null,
      gpaMax: null,
    },
  ],
  military: {
    status: '군필',
    branch: '육군',
    rank: '병장',
    specialty: '통신',
    startDate: '2020-10-13',
    endDate: '2022-04-12',
  },
  certifications: [
    { name: '정보처리산업기사', issuer: '한국산업인력공단', issuedDate: '2026-06-12', category: '국가기술자격', isInProgress: false },
    { name: '프로그래밍기능사', issuer: '한국산업인력공단', issuedDate: '2026-04-01', category: '국가기술자격', isInProgress: false },
    { name: '실기교사(음악)교원자격증', issuer: '교육부', issuedDate: '2023-02-01', category: '교원자격', isInProgress: false },
    { name: '1종보통운전면허', issuer: '경찰청', issuedDate: '2023-03-01', category: '운전면허', isInProgress: false },
  ],
  trainings: [
    {
      institution: '(주)글로벌 아카데미',
      courseName: 'K-Digital 차세대 AI 개발 솔루션',
      content: 'SW 개발실무',
      startDate: '2025-11-01',
      endDate: '2026-04-30',
    },
  ],
  awards: [
    { name: 'K-Digital 차세대 AI 개발 솔루션 우수 훈련생 표창', awardYear: '2026', organization: '글로벌아카데미', note: '1위' },
    { name: 'K-Digital 차세대 AI 개발 솔루션 우수 프로젝트 표창', awardYear: '2026', organization: '글로벌아카데미', note: 'CAFE ERP 프로젝트' },
    { name: '전공실기 최우수 장학', awardYear: '2019', organization: '국제예술대학교', note: null },
    { name: '수업 경연대회 우수 수업동영상 1위', awardYear: '2022', organization: '국제예술대학교', note: null },
    { name: '수업 경연대회 우수 수업지도안 2위', awardYear: '2022', organization: '국제예술대학교', note: null },
  ],
}

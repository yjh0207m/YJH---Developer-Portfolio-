export const projects = [
  {
    id: 1,
    title: 'CAFE ERP',
    description:
      'Spring Boot 기반 카페 통합 관리 시스템. Brity RPA·Python으로 데이터 분석 소요 시간을 60분 → 40초로 단축.',
    techStack: ['Spring Boot', 'Brity RPA', 'Python', 'MariaDB', 'MyBatis'],
    period: '2025.11 – 2026.04',
    role: '팀장',
    type: '팀 프로젝트',
    summary:
      '카페 운영에 필요한 재고 관리, 매출 분석, 자동 리포트 생성을 일원화한 ERP 시스템. Brity RPA 워크플로우와 Python 데이터 파이프라인을 Spring Boot 백엔드와 연동해 반복 업무를 자동화했습니다.',
    metrics: [
      { value: '40초', label: '데이터 분석 소요 시간 (기존 60분)' },
      { value: '3분 40초', label: '리포트 자동 생성' },
      { value: '6개', label: '구현 모듈 수' },
    ],
    mainRole:
      '팀장으로서 전체 아키텍처 설계 및 Spring Boot 백엔드 개발 담당. Brity RPA 워크플로우 구축 및 Python 데이터 파이프라인 설계를 리드했습니다.',
    challenge:
      'Brity RPA와 Spring Boot 간 데이터 연동 시 발생하는 비동기 처리 문제를 이벤트 기반 아키텍처로 해결했습니다. 또한 RPA 실패 시 폴백 처리 로직을 구현해 안정성을 확보했습니다.',
    githubUrl: 'https://github.com/yjh0207m/CAFE_ERP_Project',
    demoUrl: '',
  },
  {
    id: 2,
    title: '새싹 (DateApp)',
    description:
      'React Native 기반 데이트 코스 추천 소셜 앱. Firebase 실시간 DB로 채팅 기능을 구현했습니다.',
    techStack: ['React Native', 'Firebase', 'TypeScript'],
    period: '2025.11 – 2026.04',
    role: '프론트엔드 개발',
    type: '팀 프로젝트',
    summary:
      '커플 간 데이트 코스를 공유하고 추천받을 수 있는 소셜 모바일 앱. Firebase Realtime Database를 활용한 실시간 채팅과 코스 피드 기능을 구현했습니다.',
    metrics: [
      { value: '실시간', label: 'Firebase 채팅 구현' },
      { value: '3개', label: '핵심 화면 구현' },
      { value: 'TypeScript', label: '타입 안정성 확보' },
    ],
    mainRole:
      'React Native 화면 개발 및 Firebase 실시간 DB 연동 담당. 채팅 UI 및 데이트 코스 피드 화면을 설계하고 구현했습니다.',
    challenge:
      'React Native에서 Firebase Realtime Database와의 실시간 동기화 시 발생하는 과도한 리렌더링 문제를 useMemo와 구독 최적화로 해결했습니다.',
    githubUrl: 'https://github.com/yjh0207m/SaeSak',
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Movie Log',
    description:
      'React + TypeScript로 구현한 영화 감상 기록 웹앱. 영화 API 연동으로 검색·기록 기능을 제공합니다.',
    techStack: ['React', 'TypeScript'],
    period: '2025.11 – 2026.04',
    role: '개인 프로젝트',
    type: '개인 프로젝트',
    summary:
      '영화 API를 활용해 영화를 검색하고 감상 기록을 남길 수 있는 웹 애플리케이션. TypeScript 도입으로 타입 안정성과 코드 품질을 높였습니다.',
    metrics: [
      { value: 'API', label: '영화 검색 연동' },
      { value: '기록', label: '감상 로그 저장' },
      { value: 'TypeScript', label: '타입 안정성' },
    ],
    mainRole:
      '전체 기획, 설계 및 개발. 영화 API 연동, 검색 기능, 감상 기록 CRUD를 혼자 구현했습니다.',
    challenge:
      'TypeScript 타입 시스템을 전면 도입해 런타임 에러를 빌드 타임에 사전 차단하고, API 응답 타입 정의로 안전한 데이터 처리를 구현했습니다.',
    githubUrl: 'https://github.com/PigDuck5390/MovieLog',
    demoUrl: '',
  },
  {
    id: 4,
    title: '영화 예매 앱',
    description:
      'React Native + Expo로 제작한 모바일 영화 예매 애플리케이션. 인터랙티브 좌석 선택 UI를 구현했습니다.',
    techStack: ['React Native', 'Expo'],
    period: '2025.11 – 2026.04',
    role: '개인 프로젝트',
    type: '개인 프로젝트',
    summary:
      '영화 조회, 좌석 선택, 예매 플로우를 갖춘 모바일 앱. Expo를 활용해 iOS·Android 크로스 플랫폼으로 배포할 수 있습니다.',
    metrics: [
      { value: '좌석', label: '인터랙티브 선택 UI' },
      { value: 'Expo', label: '크로스 플랫폼 지원' },
      { value: '전체', label: '예매 플로우 구현' },
    ],
    mainRole:
      '전체 기획, 설계 및 개발. 좌석 선택 UI, 영화 목록, 예매 확인 플로우를 혼자 구현했습니다.',
    challenge:
      'Expo 환경에서 인터랙티브 좌석 선택 컴포넌트를 구현하고, 좌석 상태(선택/점유/빈 자리) 관리를 Context API로 최적화했습니다.',
    githubUrl: 'https://github.com/PigDuck5390/MovieLogApp',
    demoUrl: '',
  },
]

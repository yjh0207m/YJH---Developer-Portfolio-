# 유조현 포트폴리오 사이트 요구사항 명세서

> 작성일: 2026-04-24  
> 프로젝트명: 유조현 개발자 포트폴리오  
> 버전: v1.0.0

---

## 1. 프로젝트 개요

### 1.1 목적
- 개발자 취업을 위한 개인 포트폴리오 웹사이트 구축
- React + Spring Boot REST API 분리 아키텍처로 풀스택 역량 증명
- AWS 인프라 배포 경험 확보

### 1.2 대상 사용자
- 채용 담당자 및 개발팀 면접관
- 협업 제안 관계자

---

## 2. 기술 스택

### 2.1 프론트엔드

| 항목 | 기술 |
|------|------|
| 언어 | JavaScript |
| 프레임워크 | React |
| 라우팅 | React Router v6 |
| 상태관리 | useState + Context API |
| 스타일링 | CSS (CSS Module) |
| HTTP 통신 | Fetch API |
| 빌드 도구 | Vite |

### 2.2 백엔드

| 항목 | 기술 |
|------|------|
| 언어 | Java 17 |
| 프레임워크 | Spring Boot (Spring MVC 내장) |
| 빌드 도구 | Maven |
| ORM | JPA (Hibernate) |
| DB | MariaDB |
| API 문서 | Swagger (SpringDoc OpenAPI) |
| 통신 방식 | REST API (JSON) |

### 2.3 인프라 (AWS)

| 항목 | 서비스 |
|------|--------|
| 프론트 배포 | S3 + CloudFront |
| 백엔드 배포 | Elastic Beanstalk |
| 데이터베이스 | RDS (MariaDB) |
| CI/CD | GitHub Actions |
| 도메인 | Route 53 |

---

## 3. 페이지 구성

### 3.1 페이지 목록

| 페이지 | URL | 설명 |
|--------|-----|------|
| Home | `/` | 히어로, 프로젝트 4장, 스킬 |
| Projects | `/projects` | 전체 프로젝트 목록 |
| Project Detail | `/projects/:id` | 프로젝트 상세 정보 |
| About | `/about` | 자기소개, 경력, 수상 |
| Contact | `/contact` | 연락처, 이력서 다운로드 |

### 3.2 공통 컴포넌트

- 상단 고정 Navigation Bar (로고 + 메뉴 링크)
- Footer (이름, 이메일, 연도)
- 페이지 전환 fade 애니메이션

---

## 4. 페이지별 상세 요구사항

### 4.1 Home (`/`)

#### Hero 섹션
- [ ] 이름 및 타이틀 표시 ("창작이 곧 개발이었습니다.")
- [ ] 한 줄 소개 문구
- [ ] "프로젝트 보기" 버튼 → `/projects` 이동
- [ ] "연락하기" 버튼 → `/contact` 이동

#### Featured Projects 섹션
- [ ] 프로젝트 카드 4장 그리드 표시
- [ ] 각 카드: 아이콘, 프로젝트명, 한 줄 설명, 기술 태그, 상세 보기 링크
- [ ] 카드 클릭 시 `/projects/:id` 이동

#### Skills 섹션
- [ ] 기술 태그 목록 표시
- [ ] 핵심 스킬 (React, Spring Boot, Brity RPA, Python) 강조 표시

#### 통계 섹션
- [ ] 주요 성과 수치 3개 표시
  - 60분 → 40초 (CAFE ERP 자동화)
  - 4.18 / 4.5 (학점)
  - 4개 (프로젝트 수)

---

### 4.2 Projects (`/projects`)

- [ ] 전체 프로젝트 4장 카드 그리드 (2x2)
- [ ] 각 카드: 번호, 아이콘, 제목, 설명, 기술 태그, 상세 링크
- [ ] 카드 hover 시 배경색 변경 + 화살표 이동 애니메이션
- [ ] 카드 클릭 시 `/projects/:id` 이동

#### 프로젝트 목록

| ID | 프로젝트명 | 기술 스택 | GitHub |
|----|-----------|-----------|--------|
| 1 | CAFE ERP | Spring Boot, Brity RPA, Python, MariaDB, MyBatis | https://github.com/yjh0207m/CAFE_ERP_Project |
| 2 | 새싹 (DateApp) | React Native, Firebase, TypeScript | https://github.com/yjh0207m/SaeSak |
| 3 | Movie Log | React, TypeScript | https://github.com/PigDuck5390/MovieLog |
| 4 | 영화 예매 앱 | React Native, Expo | https://github.com/PigDuck5390/MovieLogApp |

---

### 4.3 Project Detail (`/projects/:id`)

- [ ] Breadcrumb 표시 (Projects > 프로젝트명)
- [ ] 프로젝트 제목, 기간, 참여 형태 표시
- [ ] 프로젝트 요약 설명
- [ ] 기술 스택 태그
- [ ] 스크린샷 / 시연 GIF 영역 (이미지 슬롯)
- [ ] 성과 지표 3개 (수치 카드)
- [ ] 주요 역할 텍스트
- [ ] 기술적 도전 텍스트
- [ ] GitHub 링크 버튼
- [ ] 시연 영상 링크 버튼
- [ ] "← 목록으로" 뒤로가기

#### CAFE ERP 성과 지표
- 40초 (데이터 분석, 기존 60분)
- 3분 40초 (리포트 자동 생성)
- 6개 (구현 모듈 수)

---

### 4.4 About (`/about`)

#### 자기소개 섹션
- [ ] 리드 문구 ("기술로 무언가를 창작하는 일에 매력을 느끼는 개발자")
- [ ] 본문 소개 텍스트
- [ ] 스토리 인용구 블록 (게임메이커 → RPA 스토리)

#### Education & Experience 타임라인
- [ ] K-Digital 차세대 AI 개발 솔루션 (2025.11 ~)
- [ ] 육군 병장 제대 (2020.10 ~ 2022.04)
- [ ] 국제예술대학교 실용음악과 (2019 ~ 2023, 4.18/4.5)

#### Certifications
- [ ] 프로그래밍기능사 (2026.04, 한국산업인력공단)
- [ ] 실기교사(음악)교원자격증 (2023.02, 교육부)
- [ ] 정보처리산업기사 (준비 중)

#### Awards
- [ ] 수업경연대회 우수수업동영상 1위 (2022, 국제예술대학교)
- [ ] 수업경연대회 우수수업지도안 2위 (2022, 국제예술대학교)
- [ ] 전공 최우수 장학금 (2019, 국제예술대학교)

---

### 4.5 Contact (`/contact`)

- [ ] 헤드라인 ("함께 일해요.")
- [ ] 소개 문구
- [ ] 연락처 정보
  - 이메일: yjh0207m@naver.com
  - 전화: 010-8868-1937
  - 위치: 경기 수원시 장안구
  - GitHub: https://github.com/yjh0207m
- [ ] 문의 폼 (이름, 이메일, 메시지) → JavaMailSender로 메일 발송
- [ ] ~~이력서 PDF 다운로드 버튼~~ (미포함)

---

## 5. 백엔드 API 설계

### 5.1 엔드포인트 목록

| Method | URL | 설명 |
|--------|-----|------|
| GET | `/api/projects` | 전체 프로젝트 목록 조회 |
| GET | `/api/projects/{id}` | 프로젝트 상세 조회 |
| GET | `/api/profile` | 프로필 정보 조회 (About 페이지용) |
| POST | `/api/contact` | 문의 메일 전송 (JavaMailSender) |

### 5.2 응답 형식 (예시)

```json
// GET /api/projects
[
  {
    "id": 1,
    "title": "CAFE ERP",
    "description": "Spring Boot 기반 카페 통합 관리 시스템",
    "techStack": ["Spring Boot", "Brity RPA", "Python"],
    "period": "2025.11 – 2026.04",
    "role": "팀장",
    "metrics": [
      { "value": "40초", "label": "데이터 분석 소요 시간" }
    ],
    "githubUrl": "https://github.com/yjh0207m/CAFE_ERP_Project",
    "demoUrl": ""
  }
]
```

### 5.3 Swagger UI
- 경로: `/swagger-ui/index.html`
- 포트폴리오 About 또는 Contact 페이지에 Swagger UI 링크 노출

---

## 6. DB 테이블 설계 (초안)

### projects
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGINT PK | 프로젝트 ID |
| title | VARCHAR(100) | 프로젝트명 |
| description | TEXT | 설명 |
| period | VARCHAR(50) | 기간 |
| role | VARCHAR(100) | 역할 |
| github_url | VARCHAR(255) | GitHub 링크 |
| demo_url | VARCHAR(255) | 데모 링크 |
| order_num | INT | 정렬 순서 |

### project_tech_stack
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGINT PK | ID |
| project_id | BIGINT FK | 프로젝트 ID |
| tech_name | VARCHAR(50) | 기술명 |

### project_metrics
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGINT PK | ID |
| project_id | BIGINT FK | 프로젝트 ID |
| value | VARCHAR(50) | 수치 값 |
| label | VARCHAR(100) | 설명 |

---

## 7. 디렉토리 구조 (초안)

### 프론트엔드
```
portfolio-front/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Nav.jsx
│   │   │   └── Footer.jsx
│   │   └── projects/
│   │       ├── ProjectCard.jsx
│   │       └── MetricCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── package.json
```

### 백엔드
```
portfolio-back/
├── src/main/java/com/yjh/portfolio/
│   ├── controller/
│   │   ├── ProjectController.java
│   │   ├── ProfileController.java
│   │   └── ContactController.java
│   ├── service/
│   │   ├── ProjectService.java
│   │   └── ContactService.java
│   ├── repository/
│   │   └── ProjectRepository.java
│   ├── entity/
│   │   ├── Project.java
│   │   ├── ProjectTechStack.java
│   │   └── ProjectMetric.java
│   ├── dto/
│   │   ├── ProjectDto.java
│   │   └── ContactDto.java
│   └── PortfolioApplication.java
├── src/main/resources/
│   ├── application.yml
│   └── data.sql
└── pom.xml
```

---

## 8. 배포 아키텍처

```
[사용자]
    ↓
[Route 53] → 도메인 연결
    ↓
[CloudFront] → CDN 캐싱
    ↓
[S3] → React 빌드 파일 (정적)

[React] ←→ REST API ←→ [Elastic Beanstalk] ←→ [RDS MariaDB]
                              (Spring Boot)
```

### CI/CD (GitHub Actions)
```
Push to main
    ↓
Frontend: npm build → S3 업로드 → CloudFront 캐시 무효화
Backend:  Maven build → .jar → Elastic Beanstalk 배포
```

---

## 9. 개발 우선순위

### Phase 1 — 프론트엔드 정적 구현
- [ ] Vite + React 프로젝트 세팅
- [ ] 라우팅 구성 (React Router v6)
- [ ] 다크 디자인 시스템 CSS 변수 정의
- [ ] 5개 페이지 UI 구현 (하드코딩 데이터)
- [ ] S3 배포 테스트

### Phase 2 — 백엔드 API 구현
- [ ] Spring Boot 프로젝트 세팅 (Maven)
- [ ] JPA Entity 설계 및 RDS 연결
- [ ] REST API 4개 엔드포인트 구현
- [ ] Swagger 문서화
- [ ] CORS 설정
- [ ] Elastic Beanstalk 배포

### Phase 3 — 프론트-백엔드 연동
- [ ] Fetch API로 백엔드 연동
- [ ] 하드코딩 데이터 → API 데이터로 교체
- [ ] 에러 처리 및 로딩 상태 구현

### Phase 4 — 마무리
- [ ] GitHub Actions CI/CD 구성
- [ ] Route 53 도메인 연결
- [ ] 반응형 CSS 적용
- [ ] 최종 테스트 및 배포

---

## 10. 미결정 사항

- [ ] 커스텀 도메인 구매 여부 및 도메인명 (개발 완료 후 결정 예정)
- [ ] 각 프로젝트 스크린샷 / 시연 GIF 준비 (README.md 이미지 활용 예정)

## 11. 확정 사항 이력

| 날짜 | 항목 | 결정 내용 |
|------|------|-----------|
| 2026-04-24 | 이메일 발송 서비스 | JavaMailSender (Gmail SMTP) |
| 2026-04-24 | 이력서 PDF | 미포함 |
| 2026-04-24 | GitHub 링크 | 4개 레포 확정 |
| 2026-04-24 | 커스텀 도메인 | 개발 완료 후 결정 |

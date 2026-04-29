-- ============================================================
-- Portfolio Seed Data
-- schema.sql 실행 후 사용
-- ============================================================

-- ─── 1. profile ──────────────────────────────────────────────
INSERT INTO profile (id, name_ko, name_en, birth_date, gender, nationality,
                     address, phone, email, desired_job, hobby, special_skill,
                     summary, github_url)
VALUES (1, '유조현', 'Yu JoHyun', '2000-02-07', 'M', '대한민국',
        '경기도 수원시 장안구 팔달로303번길 24-1 2층',
        '010-8868-1937', 'yjh0207m@naver.com',
        '풀스택, PM, 앱 개발, RPA 개발',
        '게임, 블로그 읽기', '피아노 연주',
        '기술로 무언가를 만들고 자동화하는 일에 매력을 느끼는 풀스택 개발자입니다.',
        'https://github.com/yjh0207m');

-- ─── 2. education ────────────────────────────────────────────
INSERT INTO education (school_name, major, start_year, end_year, graduation, gpa, gpa_max, order_num) VALUES
('국제예술대학교', '실용음악과 작곡 전공', '2019', '2023', '졸업', 4.18, 4.50, 1),
('율천고등학교',   '일반',               '2016', '2019', '졸업', NULL, NULL, 2);

-- ─── 3. military ─────────────────────────────────────────────
INSERT INTO military (id, status, branch, rank, specialty, start_date, end_date)
VALUES (1, '군필', '육군', '병장', '통신', '2020-10-01', '2022-04-01');

-- ─── 4. certifications ───────────────────────────────────────
INSERT INTO certifications (name, issuer, issued_date, category, is_in_progress, order_num) VALUES
('실기교사(음악)교원자격증', '교육부',           '2023-02-01', '교원자격',   0, 1),
('1종보통운전면허',          '경찰청',           '2023-03-01', '운전면허',   0, 2),
('프로그래밍기능사',         '한국산업인력공단', '2026-04-01', '국가기술자격', 0, 3),
('정보처리산업기사',         '한국산업인력공단', NULL,         '국가기술자격', 1, 4);

-- ─── 5. careers ──────────────────────────────────────────────
-- 현재 신입 — 데이터 없음

-- ─── 6. trainings ────────────────────────────────────────────
INSERT INTO trainings (institution, course_name, content, start_date, end_date, order_num) VALUES
('(주)글로벌 아카데미', 'K-Digital 차세대 AI 개발 솔루션', 'SW 개발실무', '2025-11-01', '2026-04-30', 1);

-- ─── 7. awards ───────────────────────────────────────────────
INSERT INTO awards (name, award_year, organization, note, order_num) VALUES
('전공실기 최우수 장학',         '2019', '국제예술대학교', NULL, 1),
('수업 경연대회 우수 수업지도안 2위', '2022', '국제예술대학교', NULL, 2),
('수업 경연대회 우수 수업동영상 1위', '2022', '국제예술대학교', NULL, 3);

-- ─── 8. tech_skills ──────────────────────────────────────────
INSERT INTO tech_skills (id, name, category, show_on_profile) VALUES
-- 개발언어
(1,  'Java',           '개발언어', 1),
(2,  'Python',         '개발언어', 1),
(3,  'JavaScript',     '개발언어', 1),
(4,  'TypeScript',     '개발언어', 1),
-- 프레임워크
(5,  'Spring Boot',    '프레임워크', 1),
(6,  'Spring Security','프레임워크', 1),
(7,  'React Native',   '프레임워크', 1),
(8,  'Expo',           '프레임워크', 1),
-- 라이브러리
(9,  'React',          '라이브러리', 1),
(10, 'MyBatis',        '라이브러리', 1),
(11, 'NumPy',          '라이브러리', 1),
(12, 'pandas',         '라이브러리', 1),
(13, 'prophet',        '라이브러리', 1),
(14, 'scikit-learn',   '라이브러리', 1),
-- 개발툴
(15, 'VSCode',         '개발툴', 1),
(16, 'STS',            '개발툴', 1),
(17, 'Eclipse',        '개발툴', 1),
(18, 'Android Studio', '개발툴', 1),
-- 데이터베이스
(19, 'MariaDB',        '데이터베이스', 1),
(20, 'Firebase',       '데이터베이스', 1),
-- 기타
(21, 'Brity RPA',      '기타', 1),
(22, 'Git/GitHub',     '기타', 1),
(23, 'Figma',          '기타', 1),
(24, 'HeidiSQL',       '기타', 0),  -- 개발툴 보조 (프로필 미노출)
(25, 'DBeaver',        '기타', 0),
(26, 'R Studio',       '기타', 0),
(27, 'Node.js',        '프레임워크', 1),
(28, 'HTML5/CSS3',     '개발언어',   1);

-- ─── 9. projects ─────────────────────────────────────────────
INSERT INTO projects (id, title, description, period, start_date, end_date,
                      role, implementation_type, lesson, github_url, demo_url, ppt_url, order_num) VALUES
(1, 'CAFE ERP',
    'Spring Boot 기반 카페 통합 관리 시스템. Brity RPA·Python으로 데이터 분석 소요 시간을 60분 → 40초로 단축.',
    '2026.03 – 2026.04', '2026-03-10', '2026-04-30',
    '팀장', '팀협동',
    '팀장으로서 일정 관리, 업무 분담, 원활한 소통과 함께 보안·무결성 등 프로젝트 전반을 꼼꼼히 검증하는 역량이 중요함을 깨달았습니다. OCR, AI 모델, Brity RPA 등 외부 기술 간의 연계가 결과물의 완성도와 상업성을 좌우한다는 점을 체감했습니다.',
    'https://github.com/yjh0207m/CAFE_ERP_Project', '', '/ppt/cafe_erp.pdf', 1),

(2, '새싹 (DateApp)',
    'React Native 기반 데이트 코스 추천 소셜 앱. Firebase 실시간 DB로 채팅 기능을 구현했습니다.',
    '2026.01', '2026-01-23', '2026-01-31',
    '단독 개발', '단독',
    'Open API를 활용하며 외부 리소스를 적재적소에 사용하는 것도 개발 역량의 일부임을 깨달았습니다. 단독 작업일수록 탄탄한 사전 설계가 개발 효율을 좌우한다는 점을 체감했습니다.',
    'https://github.com/yjh0207m/SaeSak', '', NULL, 2),

(3, 'Movie Log',
    'React + TypeScript로 구현한 영화 감상 기록 웹앱. 영화 API 연동으로 검색·기록 기능을 제공합니다.',
    '2025.12', '2025-12-02', '2025-12-12',
    '프론트엔드 개발', '팀협동',
    'DB 스키마를 탄탄히 설계할수록 개발 중 시행착오가 줄고 업무 효율이 높아진다는 것을 체감했습니다. 독창적인 컨셉도 중요하지만, 사용자에게 익숙한 트렌디한 디자인 체계 안에서 차별화를 추구하는 것이 더 효과적임을 느꼈습니다.',
    'https://github.com/PigDuck5390/MovieLog', '', '/ppt/movie_log.pdf', 3),

(4, '영화 예매 앱',
    'React Native + Expo로 제작한 모바일 영화 예매 애플리케이션. 인터랙티브 좌석 선택 UI를 구현했습니다.',
    '2026.01', '2026-01-15', '2026-01-23',
    '프론트엔드 개발', '팀협동',
    '서비스 개발 시 웹/앱 확장을 고려한 DB 선택이 범용성과 이식성에 큰 영향을 미친다는 것을 깨달았습니다. 최적화된 코드가 개발 속도, 유지 보수성, 처리 성능을 좌우한다는 점을 체감했습니다.',
    'https://github.com/PigDuck5390/MovieLogApp', '', NULL, 4),

(5, '1팀 회계 자동화 시스템',
    'Brity RPA를 활용한 카페 회계 업무 자동화 미니 프로젝트. 매출·매입 데이터 자동 집계 및 보고서 자동 생성 프로세스를 구현했습니다.',
    '2025.11 – 2026.04', '2025-11-01', '2026-04-30',
    '개발', '팀협동',
    'RPA 자동화를 통해 반복 업무를 제거하는 것이 실질적인 업무 효율 개선으로 이어진다는 점을 체감했습니다.',
    '', '', '/ppt/accounting_rpa.pdf', 5);

-- ─── 10. project_tech_stack ──────────────────────────────────
-- CAFE ERP: Java, Spring Boot, Spring Security, Python, MariaDB, MyBatis, Brity RPA, JavaScript
INSERT INTO project_tech_stack (project_id, tech_id) VALUES
(1,1),(1,5),(1,6),(1,2),(1,19),(1,10),(1,21),(1,3);

-- 1팀 회계 자동화 시스템: Brity RPA
INSERT INTO project_tech_stack (project_id, tech_id) VALUES
(5,21);

-- 새싹: React Native, Firebase, TypeScript, JavaScript
INSERT INTO project_tech_stack (project_id, tech_id) VALUES
(2,7),(2,20),(2,4),(2,3);

-- Movie Log: React, TypeScript, JavaScript
INSERT INTO project_tech_stack (project_id, tech_id) VALUES
(3,9),(3,4),(3,3);

-- 영화 예매 앱: React Native, Expo, TypeScript
INSERT INTO project_tech_stack (project_id, tech_id) VALUES
(4,7),(4,8),(4,4);

-- ─── 11. project_metrics ─────────────────────────────────────
INSERT INTO project_metrics (project_id, value, label) VALUES
(1, '40초',      '데이터 분석 소요 시간 (기존 60분)'),
(1, '3분 40초',  '리포트 자동 생성'),
(1, '6개',       '구현 모듈 수'),
(2, '실시간',    'Firebase 채팅 구현'),
(2, '3개',       '핵심 화면 구현'),
(2, 'TypeScript','타입 안정성 확보'),
(3, 'API',       '영화 검색 연동'),
(3, '기록',      '감상 로그 저장'),
(3, 'TypeScript','타입 안정성'),
(4, '좌석',      '인터랙티브 선택 UI'),
(4, 'Expo',      '크로스 플랫폼 지원'),
(4, '전체',      '예매 플로우 구현');

-- ============================================================
-- Portfolio Database Schema
-- DB: MariaDB 10.x+  |  Charset: utf8mb4
-- ============================================================

-- ─── DROP (의존성 역순) ───────────────────────────────────────
DROP TABLE IF EXISTS project_tech_stack;
DROP TABLE IF EXISTS project_metrics;
DROP TABLE IF EXISTS tech_skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS highlights;
DROP TABLE IF EXISTS awards;
DROP TABLE IF EXISTS trainings;
DROP TABLE IF EXISTS careers;
DROP TABLE IF EXISTS certifications;
DROP TABLE IF EXISTS military;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS profile;

-- ============================================================
-- 1. profile  (기본 프로필 — 단일 행)
-- ============================================================
CREATE TABLE profile (
    id            TINYINT      NOT NULL DEFAULT 1,
    name_ko       VARCHAR(20)  NOT NULL              COMMENT '한글 이름',
    name_en       VARCHAR(50)                        COMMENT '영문 이름',
    birth_date    DATE                               COMMENT '생년월일',
    gender        CHAR(1)                            COMMENT 'M / F',
    nationality   VARCHAR(30)                        COMMENT '국적',
    address       VARCHAR(200)                       COMMENT '현주소',
    phone         VARCHAR(20)                        COMMENT '전화번호',
    email         VARCHAR(100)                       COMMENT '이메일',
    desired_job   VARCHAR(200)                       COMMENT '희망 업무 (콤마 구분)',
    hobby         VARCHAR(200)                       COMMENT '취미',
    special_skill VARCHAR(200)                       COMMENT '특기',
    summary       TEXT                               COMMENT '한 줄 소개',
    github_url    VARCHAR(255)                       COMMENT 'GitHub 프로필 URL',
    blog_url      VARCHAR(255)                       COMMENT '블로그 URL',
    PRIMARY KEY (id),
    CONSTRAINT chk_profile_single CHECK (id = 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 2. education  (학력 — 복수 가능)
-- ============================================================
CREATE TABLE education (
    id          BIGINT       NOT NULL AUTO_INCREMENT,
    school_name VARCHAR(100) NOT NULL              COMMENT '학교명',
    major       VARCHAR(100)                       COMMENT '전공',
    start_year  CHAR(4)                            COMMENT '입학 연도',
    end_year    CHAR(4)                            COMMENT '졸업/수료 연도',
    graduation  VARCHAR(20)                        COMMENT '졸업 | 재학 | 중퇴 | 수료',
    gpa         DECIMAL(3,2)                       COMMENT '학점',
    gpa_max     DECIMAL(3,2)                       COMMENT '만점 기준',
    order_num   INT                                COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 3. military  (병역 — 단일 행)
-- ============================================================
CREATE TABLE military (
    id         TINYINT     NOT NULL DEFAULT 1,
    status     VARCHAR(10) NOT NULL              COMMENT '군필 | 미필 | 면제',
    branch     VARCHAR(20)                       COMMENT '군별 (육군 등)',
    rank       VARCHAR(10)                       COMMENT '최종 계급',
    specialty  VARCHAR(30)                       COMMENT '병과',
    start_date DATE                              COMMENT '입대일',
    end_date   DATE                              COMMENT '전역일',
    PRIMARY KEY (id),
    CONSTRAINT chk_military_single CHECK (id = 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 4. certifications  (자격·면허 — 확장 핵심)
-- ============================================================
CREATE TABLE certifications (
    id             BIGINT       NOT NULL AUTO_INCREMENT,
    name           VARCHAR(100) NOT NULL              COMMENT '자격/면허명',
    issuer         VARCHAR(100)                       COMMENT '발급 기관',
    issued_date    DATE                               COMMENT '취득일 (준비중이면 NULL)',
    category       VARCHAR(30)  NOT NULL              COMMENT '국가기술자격 | 운전면허 | 교원자격 | 어학 | 기타',
    is_in_progress TINYINT(1)   NOT NULL DEFAULT 0   COMMENT '1 = 취득 준비 중',
    order_num      INT                                COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 5. careers  (경력 — 현재 신입, 향후 대비)
-- ============================================================
CREATE TABLE careers (
    id              BIGINT       NOT NULL AUTO_INCREMENT,
    company_name    VARCHAR(100) NOT NULL              COMMENT '직장명',
    position        VARCHAR(100)                       COMMENT '직위 / 담당 업무',
    description     TEXT                               COMMENT '상세 업무 내용',
    start_date      DATE                               COMMENT '입사일',
    end_date        DATE                               COMMENT '퇴사일 (NULL = 재직 중)',
    reason_leaving  VARCHAR(200)                       COMMENT '퇴직 사유',
    order_num       INT                                COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 6. trainings  (교육 이수)
-- ============================================================
CREATE TABLE trainings (
    id          BIGINT       NOT NULL AUTO_INCREMENT,
    institution VARCHAR(100) NOT NULL              COMMENT '교육 기관명',
    course_name VARCHAR(200)                       COMMENT '과정명',
    content     VARCHAR(200)                       COMMENT '교육 내용',
    start_date  DATE                               COMMENT '교육 시작일',
    end_date    DATE                               COMMENT '교육 종료일',
    order_num   INT                                COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 7. awards  (수상 내역)
-- ============================================================
CREATE TABLE awards (
    id           BIGINT       NOT NULL AUTO_INCREMENT,
    name         VARCHAR(200) NOT NULL              COMMENT '수상명',
    award_year   CHAR(4)                            COMMENT '수상 연도',
    organization VARCHAR(100)                       COMMENT '수여 기관',
    note         VARCHAR(200)                       COMMENT '비고',
    order_num    INT                                COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 8. projects  (포트폴리오 프로젝트)
-- ============================================================
CREATE TABLE projects (
    id                  BIGINT       NOT NULL AUTO_INCREMENT,
    title               VARCHAR(100) NOT NULL              COMMENT '프로젝트 이름',
    description         TEXT                               COMMENT '프로젝트 설명',
    period              VARCHAR(50)                        COMMENT '진행 기간 (표시용)',
    start_date          DATE                               COMMENT '시작일 (정렬용)',
    end_date            DATE                               COMMENT '종료일',
    role                VARCHAR(100)                       COMMENT '담당 역할',
    implementation_type VARCHAR(20)                        COMMENT '단독 | 팀내단독 | 팀협동',
    lesson              TEXT                               COMMENT '느낀 점',
    github_url          VARCHAR(255)                       COMMENT 'GitHub URL',
    demo_url            VARCHAR(255)                       COMMENT '배포 URL',
    ppt_url             VARCHAR(255)                       COMMENT 'PPT 다운로드 경로',
    order_num           INT                                COMMENT '정렬 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 9. tech_skills  (기술 마스터)
-- ============================================================
CREATE TABLE tech_skills (
    id              BIGINT      NOT NULL AUTO_INCREMENT,
    name            VARCHAR(50) NOT NULL              COMMENT '기술명 (고유)',
    category        VARCHAR(30) NOT NULL              COMMENT '개발언어 | 프레임워크 | 라이브러리 | 개발툴 | 데이터베이스 | 기타',
    show_on_profile TINYINT(1)  NOT NULL DEFAULT 1   COMMENT '1 = 프로필 Skills 섹션 노출',
    PRIMARY KEY (id),
    UNIQUE KEY uq_tech_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 10. project_tech_stack  (projects ↔ tech_skills junction)
-- ============================================================
CREATE TABLE project_tech_stack (
    project_id BIGINT NOT NULL,
    tech_id    BIGINT NOT NULL,
    PRIMARY KEY (project_id, tech_id),
    CONSTRAINT fk_pts_project FOREIGN KEY (project_id) REFERENCES projects  (id) ON DELETE CASCADE,
    CONSTRAINT fk_pts_tech    FOREIGN KEY (tech_id)    REFERENCES tech_skills(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 11. project_metrics  (프로젝트 수치 성과)
-- ============================================================
CREATE TABLE project_metrics (
    id         BIGINT       NOT NULL AUTO_INCREMENT,
    project_id BIGINT       NOT NULL,
    value      VARCHAR(50)  NOT NULL  COMMENT '수치',
    label      VARCHAR(100) NOT NULL  COMMENT '설명',
    PRIMARY KEY (id),
    CONSTRAINT fk_metric_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 12. highlights  (홈 Highlights 카드)
-- ============================================================
CREATE TABLE highlights (
    id        BIGINT       NOT NULL AUTO_INCREMENT,
    value     VARCHAR(50)  NOT NULL  COMMENT '수치 (예: 40초)',
    label     VARCHAR(100) NOT NULL  COMMENT '항목명',
    sub       VARCHAR(200)           COMMENT '설명',
    order_num INT                    COMMENT '표시 순서',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 인덱스 ───────────────────────────────────────────────────
CREATE INDEX idx_projects_order   ON projects      (order_num);
CREATE INDEX idx_projects_date    ON projects      (start_date);
CREATE INDEX idx_education_order  ON education     (order_num);
CREATE INDEX idx_cert_order       ON certifications(order_num);
CREATE INDEX idx_awards_order     ON awards        (order_num);

import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import Spinner from '../components/common/Spinner'
import styles from './About.module.css'

export default function About() {
  const { data: resume, loading } = useFetch(api.getResume)

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <Spinner />
        </div>
      </div>
    )
  }

  const education = resume?.education ?? []
  const military = resume?.military ?? null
  const certifications = resume?.certifications ?? []
  const trainings = resume?.trainings ?? []
  const awards = resume?.awards ?? []

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Bio */}
        <section className={styles.bio}>
          <h1 className={styles.lead}>
            기술로 무언가를<br />
            창작하는 일에<br />
            매력을 느끼는 개발자
          </h1>
          <div className={styles.bioText}>
            <p>
              음악을 전공하며 작곡과 편곡을 배웠고, 그 경험이 개발로 자연스럽게
              이어졌습니다. 코드로 무언가를 설계하고 완성해 가는 과정이 창작과
              닮아 있었기 때문입니다.
            </p>
            <p>
              현재는 Spring Boot와 React를 중심으로 풀스택 역량을 쌓고 있으며,
              Brity RPA와 Python을 활용한 업무 자동화에도 관심이 깊습니다.
            </p>
          </div>
          <blockquote className={styles.quote}>
            "게임을 만들고 싶어 GameMaker를 독학하던 중학생이, 언젠가 코드로
            세상의 반복 작업을 없애는 개발자가 됐습니다."
          </blockquote>
        </section>

        {/* Education & Military */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education & Experience</h2>
          <div className={styles.timeline}>
            {trainings.map((t) => (
              <div key={t.courseName} className={styles.timelineItem}>
                <div className={styles.timelineDot} data-type="education" />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>
                    {formatDate(t.startDate)} ~ {t.endDate ? formatDate(t.endDate) : '수료 예정'}
                  </span>
                  <h3 className={styles.timelineTitle}>{t.courseName}</h3>
                  <p className={styles.timelineDesc}>{t.institution} · {t.content}</p>
                </div>
              </div>
            ))}
            {military && (
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} data-type="work" />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>
                    {formatDate(military.startDate)} – {formatDate(military.endDate)}
                  </span>
                  <h3 className={styles.timelineTitle}>
                    {military.branch} {military.rank} 만기 제대
                  </h3>
                  <p className={styles.timelineDesc}>
                    {military.status} · {military.specialty}병과
                  </p>
                </div>
              </div>
            )}
            {education.map((e) => (
              <div key={e.schoolName} className={styles.timelineItem}>
                <div className={styles.timelineDot} data-type="education" />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>
                    {e.startYear} – {e.endYear}
                  </span>
                  <h3 className={styles.timelineTitle}>{e.schoolName}</h3>
                  <p className={styles.timelineDesc}>
                    {e.major && `${e.major} · `}{e.graduation}
                    {e.gpa && ` · 학점 ${e.gpa} / ${e.gpaMax}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div className={styles.certList}>
              {certifications.map((c) => (
                <div key={c.name} className={styles.certItem}>
                  <div className={styles.certName}>{c.name}</div>
                  <div className={styles.certMeta}>
                    {c.isInProgress
                      ? '준비 중'
                      : c.issuedDate
                        ? formatYearMonth(c.issuedDate)
                        : ''}
                    {c.issuer && ` · ${c.issuer}`}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Awards</h2>
            <div className={styles.certList}>
              {awards.map((a) => (
                <div key={a.name} className={styles.certItem}>
                  <div className={styles.certName}>{a.name}</div>
                  <div className={styles.certMeta}>
                    {a.awardYear} · {a.organization}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

function formatYearMonth(dateStr) {
  return formatDate(dateStr)
}

import { useEffect, useState } from 'react'
import styles from './IntroAnimation.module.css'

const FREE_NOTES = [
  { ch: '♩', top: '14%', left: '12%' },
  { ch: '♪', top: '28%', left: '62%' },
  { ch: '♫', top: '20%', left: '83%' },
  { ch: '♬', top: '48%', left: '38%' },
  { ch: '♩', top: '58%', left: '74%' },
  { ch: '♪', top: '68%', left: '18%' },
  { ch: '♫', top: '76%', left: '52%' },
  { ch: '♬', top: '36%', left: '92%' },
]

const CODE_ROWS = [
  { num: '01', code: 'public class YuJoHyun {' },
  { num: '02', code: "  String[] mainSkill  = {\"실용음악 작곡\", \"프로그래밍\"}" },
  { num: '03', code: "  String role   = \"풀스택 개발자\"" },
  { num: '04', code: "  String power  = \"음악 × 코드\"" },
  { num: '05', code: '}' },
]

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('music') // 'music' | 'transform' | 'exit'

  useEffect(() => {
    const MUSIC_MS = 900
    const CODE_MS  = 1800
    const EXIT_MS  = 600
    const t1 = setTimeout(() => setPhase('transform'), MUSIC_MS)
    const t2 = setTimeout(() => setPhase('exit'),      MUSIC_MS + CODE_MS)
    const t3 = setTimeout(onComplete,                  MUSIC_MS + CODE_MS + EXIT_MS)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  const isTransform = phase !== 'music'
  const isExit      = phase === 'exit'

  return (
    <div className={`${styles.overlay} ${isExit ? styles.overlayExit : ''}`}>

      {/* 음악 페이즈: 자유 부유 음표 */}
      <div className={`${styles.notesLayer} ${isTransform ? styles.notesHide : ''}`}>
        {FREE_NOTES.map(({ ch, top, left }, i) => (
          <span
            key={i}
            className={styles.freeNote}
            style={{ top, left, '--i': i }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* 공통: 오선지 → 코드 에디터 라인 */}
      <div className={`${styles.codeContainer} ${isTransform ? styles.codeExpand : ''}`}>
        {CODE_ROWS.map(({ num, code }, i) => (
          <div key={i} className={styles.codeRow} style={{ '--i': i }}>
            <div className={styles.codeContent}>
              <span className={`${styles.lineNum} ${isTransform ? styles.show : ''}`}>
                {num}
              </span>
              <span className={`${styles.codeText} ${isTransform ? styles.show : ''}`}>
                {code}
              </span>
            </div>
            <div className={styles.ruler} />
          </div>
        ))}
      </div>

      {/* transform 완료 후 이름 라벨 */}
      <p className={`${styles.authorLine} ${isTransform ? styles.show : ''}`}>
        유조현 포트폴리오
      </p>

    </div>
  )
}

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const EMAILJS_SERVICE_ID  = 'service_xn37eyi'
const EMAILJS_TEMPLATE_ID = 'template_yi0scmp'
const EMAILJS_PUBLIC_KEY  = 'u3ICCanp3MDpsIJ1W'

const contactInfo = [
  { label: '이메일', value: 'yjh0207m@naver.com', href: 'mailto:yjh0207m@naver.com' },
  { label: '전화', value: '010-8868-1937', href: 'tel:01088681937' },
  { label: '위치', value: '경기 수원시 장안구', href: null },
  {
    label: 'GitHub',
    value: 'github.com/yjh0207m',
    href: 'https://github.com/yjh0207m',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'done' | 'error'

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('done')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>함께 일해요.</h1>
          <p className={styles.sub}>
            프로젝트 협업, 채용 문의, 어떤 이야기도 환영합니다.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.infoCol}>
            <h2 className={styles.colTitle}>연락처</h2>
            <ul className={styles.infoList}>
              {contactInfo.map(({ label, value, href }) => (
                <li key={label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className={styles.infoValue}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.colTitle}>문의하기</h2>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? '전송 중...' : '메시지 보내기'}
            </button>
            {status === 'done' && (
              <p className={styles.successMsg}>
                메시지가 전송됐습니다. 감사합니다!
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                전송에 실패했습니다. 이메일로 직접 연락해주세요.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

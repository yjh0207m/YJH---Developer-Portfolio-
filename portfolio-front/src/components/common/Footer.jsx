import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>유조현</span>
        <span className={styles.sep}>·</span>
        <a href="mailto:yjh0207m@naver.com" className={styles.email}>
          yjh0207m@naver.com
        </a>
        <span className={styles.sep}>·</span>
        <span className={styles.year}>
          © {new Date().getFullYear()}. yjh all rights reserved.</span>
      </div>
    </footer>
  )
}

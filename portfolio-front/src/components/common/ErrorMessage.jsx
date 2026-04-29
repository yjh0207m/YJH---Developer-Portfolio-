import styles from './ErrorMessage.module.css'

export default function ErrorMessage({ message = '데이터를 불러오지 못했습니다.' }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{message}</p>
      <button className={styles.retry} onClick={() => window.location.reload()}>
        다시 시도
      </button>
    </div>
  )
}

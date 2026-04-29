import styles from './MetricCard.module.css'

export default function MetricCard({ value, label }) {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

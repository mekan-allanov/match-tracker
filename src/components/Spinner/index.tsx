import styles from "./spinner.module.scss";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <img src="/spinner.svg" alt="spinner" className={styles.spinner__img} />
    </div>
  );
}

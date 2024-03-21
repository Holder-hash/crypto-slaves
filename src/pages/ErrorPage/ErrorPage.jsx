import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  return (
    <div id="error-page" className={styles.wrapper}>
      <h1 className={styles.title}>Oops!</h1>
      <p className={styles.description}>
        Sorry, an unexpected error has occurred.
      </p>
      <p className={styles.message}></p>
    </div>
  );
}

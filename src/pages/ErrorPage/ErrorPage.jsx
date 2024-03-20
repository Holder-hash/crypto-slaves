import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={styles.wrapper}>
      <h1 className={styles.title}>Oops!</h1>
      <p className={styles.description}>
        Sorry, an unexpected error has occurred.
      </p>
      <p className={styles.message}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

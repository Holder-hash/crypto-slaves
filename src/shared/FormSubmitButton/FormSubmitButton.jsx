import styles from "./FormSubmitButton.module.scss";

function FormSubmitButton({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}

export default FormSubmitButton;

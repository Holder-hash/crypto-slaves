import styles from "./FormSelect.module.scss";

function FormSelect({ children, ...props }) {
  return (
    <select {...props} className={styles.select}>
      {children}
    </select>
  );
}

export default FormSelect;

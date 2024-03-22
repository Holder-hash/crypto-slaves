import styles from "./FormInput.module.scss";

function FormInput({ className, ...props }) {
  return <input {...props} className={`${styles.input} ${className}`} />;
}

export default FormInput;

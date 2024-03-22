import styles from "./TopUpPage.module.scss";
import { useForm, Controller } from "react-hook-form";

function TopUpPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Пополнение</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <Controller
            name="number"
            control={control}
            rules={{ required: true, pattern: /^\d{1,4}$/ }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Сумма(от 1 до 10000)"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="text"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Промокод(если есть)"
                style={{ borderColor: errors.text ? "red" : "initial" }}
              />
            )}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Пополнить
        </button>
      </form>
    </div>
  );
}

export default TopUpPage;

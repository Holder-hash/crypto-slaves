import styles from "./TopUpPage.module.scss";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../shared/FormInput/FormInput";
import FormSubmitButton from "../../shared/FormSubmitButton/FormSubmitButton";
import TopUpHistoryTable from "../../widgets/TopUpHistoryTable/TopUpHistoryTable";

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
              <FormInput
                {...field}
                type="number"
                placeholder="Сумма(от 1 до 10000)"
                style={{ borderColor: errors.number ? "red" : "initial" }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                type="text"
                placeholder="Промокод(если есть)"
              />
            )}
          />
        </div>
        <FormSubmitButton
          type="submit"
          onClick={handleSubmit}
          ref={handleSubmit}
        >
          Пополнить
        </FormSubmitButton>
      </form>

      <p className={styles.subtitle}>История пополнений</p>
      <TopUpHistoryTable />
    </div>
  );
}

export default TopUpPage;

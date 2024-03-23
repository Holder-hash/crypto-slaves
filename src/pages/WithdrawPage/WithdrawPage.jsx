import styles from "./WithdrawPage.module.scss";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../shared/FormInput/FormInput";
import FormSubmitButton from "../../shared/FormSubmitButton/FormSubmitButton";
import FormSelect from "../../shared/FormSelect/FormSelect";
import WithdrawHistoryTable from "../../widgets/WithdrawHistoryTable/WithdrawHistoryTable";
import bitcoin from "../../assets/img/formOptionImg/bitcoin.png";

function WithdrawPage() {
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
      <p className={styles.title}>Вывести</p>
      <p className={styles.available}>Доступно для вывода: 200.02$</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <Controller
            name="sum"
            control={control}
            rules={{ required: true, pattern: /^\d{1,4}$/ }}
            render={({ field }) => (
              <FormInput
                {...field}
                type="number"
                placeholder="Сумма(от 1 до 10000)"
                style={{ borderColor: errors.sum ? "red" : "initial" }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="select"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormSelect>
                <option value="">
                  <div
                    style={{
                      width: "30px",
                      backgroundImage: `url(${bitcoin})`,
                      backgroundSize: "cover",
                    }}
                  />
                  <p>Bitcoin</p>
                </option>
              </FormSelect>
            )}
          />
        </div>
        <div>
          <Controller
            name="card"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                {...field}
                type="text"
                placeholder="Номер кошелька"
                style={{ borderColor: errors.card ? "red" : "initial" }}
              />
            )}
          />
        </div>
        <FormSubmitButton
          type="submit"
          onClick={handleSubmit}
          ref={handleSubmit}
        >
          Вывести
        </FormSubmitButton>
      </form>

      <WithdrawHistoryTable />
    </div>
  );
}

export default WithdrawPage;

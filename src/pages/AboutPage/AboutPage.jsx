import styles from "./AboutPage.module.scss";

function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Об игре</p>
      <p className={styles.content}>
        CryptoSlaves - захватывающая игра, которая позволяет вам зарабатывать
        криптовалюту без каких-либо вложений. Приглашайте друзей, выкупайте
        рабов у других пользователей и занимайте топ в рейтинге.
      </p>
      <br />

      <p className={styles.content}>
        Кажду неделю игроки, занявшие топ 3, получают ценные награды.
      </p>
      <br />

      <p className={styles.content}>
        Вы можете зарабатывать с приглашенных друзей,а также покупать роботов,
        которые добывают криптовалюту гораздо быстрее обычных рабов.
      </p>
      <br />

      <p className={styles.content}>
        После покупки раба он становится Вашим на 48ч., затем он может быть
        выкуплен любым другим игроком.
      </p>
      <br />
      <p className={styles.content}>
        Погрузитесь в мир борьбы за финансовую независимость и станьте лидером в
        CryptoSlaves!
      </p>
    </div>
  );
}

export default AboutPage;

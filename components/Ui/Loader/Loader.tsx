import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderBox}>
        {/* SVG ноутбук з екраном */}
        <svg
          className={styles.laptop}
          width="100"
          height="70"
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>

        <p className={styles.text}>
          Зачекайте, будь ласка…
          <br />
          Йде завантаження
        </p>
      </div>
    </div>
  );
};

export default Loader;

import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loader;

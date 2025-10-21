import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.spinner}></div>
    </div>
  );
};

export default Loader;

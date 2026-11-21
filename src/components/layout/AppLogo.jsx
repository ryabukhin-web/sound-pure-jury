import { cx } from "../../utils";

const AppLogo = ({ className }) => {
  return (
    <div className={cx("logo", className)}>
      <a className="logo__link" href="/">
        <img className="logo__image" src="/images/logo.svg" alt="Чистый звук" />
      </a>
    </div>
  );
};

export default AppLogo;

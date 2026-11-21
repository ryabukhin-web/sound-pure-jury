import { cx } from "../../utils";

const AppButton = ({ className, children }) => {
  return (
    <button type="submit" className={cx("button", className)}>
      <span>{children}</span>
    </button>
  );
};

export default AppButton;

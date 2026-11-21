import { cx } from "../../utils";

const AppTitle = ({ className, children }) => {
  return <h1 className={cx("title", className)}>{children}</h1>;
};

export default AppTitle;

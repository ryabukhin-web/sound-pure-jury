import { useState } from "react";
import { fakeLogin } from "../../api/auth";
import AppButton from "../ui/AppButton";
import AppFormField from "../ui/AppFormField";
import { cx } from "../../utils";

const AppForm = ({ className }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fakeLogin({ login, password }); // потом заменить на API
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cx("form", className)}>
      <AppFormField
        label="Логин"
        id="login"
        name="login"
        type="text"
        autoComplete="username"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <AppFormField
        label="Пароль"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="form__button">
        <AppButton type="submit">{isSubmitting ? "Вход…" : "Войти"}</AppButton>
      </div>
    </form>
  );
};

export default AppForm;

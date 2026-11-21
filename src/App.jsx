import "./assets/styles/index.css";
import { IndexContextProvider } from "./context/index-context";
import AppLogo from "./components/layout/AppLogo";
import AppTitle from "./components/layout/AppTitle";
import AppForm from "./components/layout/AppForm";
import AppYearPanel from "./components/layout/AppYearPanel";
import AppBack from "./components/layout/AppBack";


const App = () => {
  return (
    <IndexContextProvider>
      <div className="login">
        <div className="main">
          <div className="main__wrapper">
            <div className="login__logo">
              <AppLogo className="logo_center" />
            </div>
            <div className="login__title">
              <AppTitle className="title_center">Вход для жюри</AppTitle>
            </div>
            <div className="login__form">
              <AppForm />
            </div>
          </div>
        </div>
        <AppYearPanel />
        <AppBack className="back_center" />
      </div>
    </IndexContextProvider>
  );
};

export default App;

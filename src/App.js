import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import "./App.css";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("title")}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="topNav">
        <div>
          <img
            className="btn-image"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
            width="40vw"
            height="20vw"
            type="button"
            onClick={() => changeLanguage("en")}
          />
          <img
            className="btn-image"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
            width="40vw"
            height="20vw"
            type="button"
            onClick={() => changeLanguage("fr")}
          />
          <img
            className="btn-image"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
            width="40vw"
            height="20vw"
            type="button"
            onClick={() => changeLanguage("de")}
          />
          <img
            className="btn-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"
            width="40vw"
            height="20vw"
            type="button"
            onClick={() => changeLanguage("cn")}
          />
        </div>
      </div>
      <Welcome />
      <div>
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

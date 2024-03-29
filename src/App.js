import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import Confirm from "./pages/Confirm/Confirm";
import Success from "./pages/Success/Success";
import { useEffect } from "react";
import { handleInitApp } from "./utils/google-slides";

function loadApi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";
  document.body.appendChild(script);

  script.onload = () => {
    window.gapi.load("client:auth2", handleInitApp.bind(this));
  };
}

function App() {
  useEffect(() => loadApi());

  return (
    <BrowserRouter>
      <Route exact path={["/", "/confirm", "/success"]}>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </MainLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;

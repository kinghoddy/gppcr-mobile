import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Home from "./pages/home/home";
import About from "./pages/About";
import Desk from "./pages/desk/desk";
import Tv from "./pages/tv/tv";
import Settings from "./pages/settings";

/* Theme variables */
import "./theme/variables.css";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "./components/menu/menu";

import { StatusBar } from "@ionic-native/status-bar";

import "./main";

const App: React.FC = () => {
  StatusBar.overlaysWebView(true);
  StatusBar.backgroundColorByHexString("#33000000");

  return (
    <IonApp>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{--ion-safe-area-top: 33px}`,
        }}
      ></style>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/desk" component={Desk} />
            <Route path="/tv" component={Tv} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

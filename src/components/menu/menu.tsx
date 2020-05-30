import React from "react";
import {
  IonMenu,
  IonMenuToggle,
  IonContent,
  IonIcon,
  IonLabel,
  IonList,
  IonItem,
  IonNote,
  IonImg,
  IonFooter,
  IonToolbar,
} from "@ionic/react";
import "./menu.css";
import {
  homeOutline,
  helpOutline,
  settingsOutline,
  newspaperOutline,
  tvOutline,
  star,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";

interface AppPage {
  title: string;
  url: string;
  icon: string;
}
const appAux: AppPage[] = [
  {
    title: "Settings",
    url: "/settings",
    icon: settingsOutline,
  },
  {
    title: "About",
    url: "/about",
    icon: helpOutline,
  },
];
const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: homeOutline,
  },
  {
    title: "Daily blessings",
    url: "/blessings",
    icon: star,
  },
  {
    title: "Ministers Desk",
    url: "/desk",
    icon: newspaperOutline,
  },
  {
    title: "GPPCR Tv",
    url: "/tv",
    icon: tvOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu side="start" contentId="main">
      <IonContent>
        <IonImg className="brand" src="/assets/brand.png" />
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="other-list">
          {appAux.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonNote>Developed by Noel Odunmilade</IonNote>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;

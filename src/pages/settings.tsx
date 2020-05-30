import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonContent,
  IonButtons,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonListHeader,
  IonNote,
  IonAlert,
  IonActionSheet,
} from "@ionic/react";
import {
  moonOutline,
  newspaperSharp,
  reload,
  colorFilter,
  book,
  checkmark,
} from "ionicons/icons";

const Settings: React.FC = () => {
  const [theme, seTheme] = React.useState("success");
  const [showAlert, setShowAlert] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [actionSheetOpen, setActionSheetOpen] = React.useState(false);

  const body = document.body;
  const DM = () => {
    let theme = localStorage.getItem("gppcrTheme");
    if (!theme) {
      localStorage.setItem("gppcrTheme", "light");
      theme = "light";
    }
    if (theme === "dark") {
      body.classList.add("dark");
      setChecked(true);
    } else {
      body.classList.remove("dark");
      setChecked(false);
    }
  };
  React.useEffect(() => {
    DM();
  }, []);

  const darkMode = (e: boolean) => {
    if (e) {
      localStorage.setItem("gppcrTheme", "dark");
      body.classList.add("dark");
    } else {
      localStorage.setItem("gppcrTheme", "light");
      body.classList.remove("dark");
    }
    console.log(e);

    setChecked(e);
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={showAlert}
        message="Are you sure you want to reset"
        buttons={["Ok", "Cancel"]}
      />
      <IonActionSheet
        buttons={[
          "Green",
          "Blue",
          { text: "Cancel", role: "cancel", icon: book },
        ]}
        onDidDismiss={() => setActionSheetOpen(false)}
        header="hello"
        isOpen={actionSheetOpen}
      ></IonActionSheet>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle size="small">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonNote>Text and Themes</IonNote>
          </IonListHeader>
          <IonItem>
            <IonIcon color={theme} slot="start" icon={moonOutline} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              color={theme}
              slot="end"
              checked={checked}
              onIonChange={(e) => darkMode(e.detail.checked)}
            />
          </IonItem>
          <IonItem type="button" onClick={() => setActionSheetOpen(true)}>
            <IonIcon color={theme} slot="start" icon={colorFilter} />
            <IonLabel>Theme color</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon color={theme} slot="start" icon={newspaperSharp} />
            <IonLabel>Font size</IonLabel>
          </IonItem>
          <IonListHeader>
            <IonNote>Other settings</IonNote>
          </IonListHeader>
          <IonItem onClick={() => setShowAlert(true)}>
            <IonIcon color={theme} slot="start" icon={reload} />
            <IonLabel>Reset app</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;

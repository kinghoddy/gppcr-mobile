import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>About </h1>
      </IonContent>
    </IonPage>
  );
};

export default About;

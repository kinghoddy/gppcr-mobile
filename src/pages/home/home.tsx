import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonCard,
  IonImg,
} from "@ionic/react";

import "./home.css";

import {
  shareSocial,
  ellipsisVertical,
  newspaperOutline,
  tvOutline,
  giftOutline,
} from "ionicons/icons";
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={shareSocial} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
          <IonTitle>GPPCR mobile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="display-card">
          <IonImg src="/assets/splash.png" className="display-card-img" />
          <div className="display-card-item">
            <div className="display-card-item-title">
              <IonIcon icon={giftOutline} />
              <h4> Daily blessings</h4>
            </div>
            <IonButton color="success" fill="outline">
              VIEW
            </IonButton>
          </div>
        </IonCard>
        <IonCard className="display-card">
          <IonImg src="/assets/splash.png" className="display-card-img" />
          <div className="display-card-item">
            <div className="display-card-item-title">
              <IonIcon icon={newspaperOutline} />
              <h4> Ministers Desk</h4>
            </div>
            <IonButton routerLink="/desk" color="success" fill="outline">
              VIEW
            </IonButton>
          </div>
        </IonCard>
        <IonCard className="display-card">
          <IonImg src="/assets/tv.jpg" className="display-card-img" />
          <div className="display-card-item">
            <div className="display-card-item-title">
              <IonIcon icon={tvOutline} />
              <h4> GPPCR Tv</h4>
            </div>
            <IonButton routerLink="/tv" color="success" fill="outline">
              VIEW
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonImg,
  IonButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonNote,
  IonItem,
  IonThumbnail,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonText,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./tv.css";
import {
  playOutline,
  tvOutline,
  cloudDownloadOutline,
  timeOutline,
} from "ionicons/icons";
import VC from "../../components/vc/vc";
const Tv: React.FC = () => {
  const [showVc, setShowVc] = React.useState(false);
  return (
    <IonPage>
      <VC isOpen={showVc} dismissed={() => setShowVc(false)} />
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>GPPCR tv</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="banner">
          <IonImg className="banner-img" src="/assets/tv.jpg" />
          <IonButton
            fill="outline"
            onClick={() => setShowVc(true)}
            color="success"
          >
            <IonIcon slot="start" icon={tvOutline} /> Watch Now
          </IonButton>
        </div>

        <IonList>
          <IonListHeader>
            <IonItem mode="md">
              <IonLabel slot="start">
                <div>
                  <h4>Previous Transmissions</h4>
                  <p>
                    <IonNote>23 useDebugValue(value)</IonNote>
                  </p>
                </div>
              </IonLabel>
              <IonButtons slot="end">
                <IonButton
                  mode="ios"
                  size="small"
                  color="success"
                  fill="outline"
                >
                  Downloads
                </IonButton>
              </IonButtons>
            </IonItem>
          </IonListHeader>
          <IonItemSliding>
            <IonItemOptions>
              <IonItemOption>
                <IonIcon slot="icon-only" icon={cloudDownloadOutline} />
              </IonItemOption>
              <IonItemOption color="success">
                <IonIcon slot="icon-only" icon={playOutline} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem lines="full">
              <IonThumbnail slot="start">
                <img src="/assets/splash.png" />
              </IonThumbnail>
              <IonLabel>
                <h3> Sunday service (may 1 , 2020) </h3> <p> May 1 , 2020 </p>
              </IonLabel>
              <IonText color="medium" className=" ion-text-center" slot="end">
                <IonIcon icon={timeOutline} /> <br />
                <small>1hr , 25mins</small>
              </IonText>
            </IonItem>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions>
              <IonItemOption>
                <IonIcon slot="icon-only" icon={cloudDownloadOutline} />
              </IonItemOption>
              <IonItemOption color="success">
                <IonIcon slot="icon-only" icon={playOutline} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem lines="full">
              <IonThumbnail slot="start">
                <img src="/assets/splash.png" />
              </IonThumbnail>
              <IonLabel>
                <h3> Sunday service (may 1 , 2020) </h3> <p> May 1 , 2020 </p>
              </IonLabel>
              <IonText color="medium" className=" ion-text-center" slot="end">
                <IonIcon icon={timeOutline} /> <br />
                <small>1hr , 25mins</small>
              </IonText>
            </IonItem>
          </IonItemSliding>
        </IonList>
      </IonContent>

      <IonFooter className="footer">
        <IonGrid>
          <IonRow className="ion-justify-content-between ion-align-items-center">
            <IonCol>
              <IonText color="dark" >GPPCR tv is now live</IonText>
            </IonCol>
            <IonCol>
              <IonButton
                className="ion-float-right"
                onClick={() => setShowVc(true)}
                color="success"
              >
                <IonIcon slot="start" icon={tvOutline} /> Watch Now
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Tv;

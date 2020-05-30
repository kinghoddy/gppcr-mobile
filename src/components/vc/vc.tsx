import React from "react";
import {
  IonModal,
  IonContent,
  IonSpinner,
  IonIcon,
  IonButton,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import "./vc.css";
import {
  caretDownOutline,
  chevronDownCircleOutline,
  caretUpOutline,
} from "ionicons/icons";
import { RefresherEventDetail } from "@ionic/core";

const VC: React.FC<{ isOpen: boolean; dismissed: () => void }> = (props) => {
  const [showIframe, setShowIframe] = React.useState(false);
  const [pictureMode, setPictureMode] = React.useState(false);
  const dismissed = () => {
    props.dismissed();
    setPictureMode(false);
  };
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log("Begin async operation");
    const vChat: any = document.getElementById("vChat");
    vChat.src = vChat.src;
    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  }
  return (
    <IonModal
      cssClass={pictureMode ? "modal" : ""}
      mode="ios"
      isOpen={props.isOpen}
      onDidDismiss={dismissed}
    >
      {/* <IonContent> */}
      {/* <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher> */}
      <IonSlides options={slideOpts} pager={true}>
        <IonSlide>
          <div className={"vc  " + (showIframe && "show")}>
            <div className="statusbar">
              <span></span>
              <div className="toolbar">
                <IonButton
                  onClick={() => setPictureMode(!pictureMode)}
                  fill="clear"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={!pictureMode ? caretDownOutline : caretUpOutline}
                  />
                </IonButton>
              </div>
            </div>
            {!showIframe && (
              <div className="spinner">
                <IonSpinner name="lines" />
              </div>
            )}

            <iframe
              onLoad={() => setShowIframe(true)}
              allow="microphone; camera; autoplay"
              id="vChat"
              className={"vc-frame "}
              src="https://skychat.daily.co/church"
            ></iframe>
          </div>
        </IonSlide>

        <IonSlide></IonSlide>
      </IonSlides>
      {/* </IonContent> */}
    </IonModal>
  );
};

export default VC;

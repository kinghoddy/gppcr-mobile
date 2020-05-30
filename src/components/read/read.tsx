import React from "react";
import {
  IonPage,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonContent,
  IonText,
  IonLabel,
  IonItem,
  IonAvatar,
} from "@ionic/react";
import firebase from "../../firebaseConfig";
import "firebase/database";
import { ellipsisVertical } from "ionicons/icons";
import dateFormat from "../date";
import { RouteComponentProps } from "react-router";

import './read.css';

interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Read: React.FC<UserDetailPageProps> = ({ match }) => {
  const [post, setPost] = React.useState({
    title: "",
    author: "",
    body: "",
    src: "",
    date: 112233,
  });

  const loadPost = () => {
    firebase
      .database()
      .ref(match.params.id.split("=").join("/"))
      .once("value", (s) => {
        const Post = {
          title: s.val().title,
          body: s.val().body,
          author: s.val().author,
          src: s.val().src,

          date: +s.val().date,
        };
        setPost(Post);
        console.log(Post);
      });
  };
  React.useEffect(() => {
    loadPost();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle className="ion-text-capitalize" size="small">
            {post.title}
          </IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="body" dangerouslySetInnerHTML={{ __html: post.body }}></p>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img alt="" src={"https://gppcr.now.sh" + post.src} />
          </IonAvatar>
          <IonLabel>
            <h4 className="ion-text-capitalize"> By {post.author} </h4>{" "}
            <p> {dateFormat(post.date)} </p>{" "}
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Read;

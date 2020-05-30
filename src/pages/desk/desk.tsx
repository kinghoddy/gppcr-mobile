import React from "react";
import {
  IonPage,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonSpinner,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { Route } from "react-router-dom";
import { ellipsisVertical } from "ionicons/icons";
import firebase from "../../firebaseConfig";
import "firebase/database";
import Read from "../../components/read/read";
import "./desk.css";
import date from "../../components/date";
const DeskHome: React.FC<{
  segmentChanged: (e: CustomEvent) => void;
  value: string;
  loading: boolean;
  posts: {}[];
}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle size="small">Ministers Desk</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color="success">
          <IonSegment value={props.value} onIonChange={props.segmentChanged}>
            <IonSegmentButton value="sermon">
              <IonLabel className="ion-text-capitalize">Sermons</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="blessings">
              <IonLabel className="ion-text-capitalize">
                You <br /> are blessed
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="quickSermons">
              <IonLabel className="ion-text-capitalize">
                Quick <br /> sermons
              </IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {props.loading ? (
          <div className="d-flex">
            <IonSpinner color="success" />
          </div>
        ) : (
          <IonList lines="inset">
            {props.posts.map((cur: any) => (
              <IonItem
                style={{ paddingBottom: "5px" }}
                key={cur.title}
                routerLink={"/desk/" + cur.ref}
              >
                <IonAvatar slot="start">
                  <img src={"https://gppcr.now.sh/" + cur.src} alt="" />
                </IonAvatar>
                <IonLabel className=" ion-text-capitalize">
                  <h2 style={{ color: "#295" }} className="ion-text-wrap">
                    {cur.title}
                  </h2>
                  <h3
                    className="inline"
                    dangerouslySetInnerHTML={{
                      __html: cur.body && cur.body.split("<br>").join(" "),
                    }}
                  ></h3>
                  <p>{date(cur.date)} </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default class Desk extends React.Component {
  state = {
    posts: {
      sermon: [{}],
      blessings: [{}],
      quickSermons: [{}],
    },
    loading: true,
    value: "sermon",
  };
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.setState({ loading: true });
    firebase
      .database()
      .ref("ministers-desk")
      .on("value", (s) => {
        let post: any = {};
        for (let keys in s.val()) {
          post[keys] = [];
          for (let id in s.val()[keys]) {
            post[keys].push({
              ...s.val()[keys][id],
              ref: "ministers-desk=" + keys + "=" + id,
            });
          }
          post[keys] = post[keys].reverse();
        }
        this.setState({ posts: post, loading: false });
      });
  };
  refreshPosts = () => {
    firebase
      .database()
      .ref("ministers-desk")
      .on("value", (s) => {
        let post: any = {};
        for (let keys in s.val()) {
          post[keys] = [];
          for (let id in s.val()[keys]) {
            post[keys].push({
              ...s.val()[keys][id],
              ref: "?ministers-desk/" + keys + "/" + id,
            });
          }
          post[keys] = post[keys].reverse();
        }
        this.setState({ posts: post, loading: false });
      });
  };
  segmentChanged = (e: CustomEvent) => {
    this.setState({ value: e.detail.value });
  };
  render() {
    return (
      <IonRouterOutlet>
        {/* <Route
          path="/desk/:id"
          render={() => <Read posts={this.state.posts} />}
        /> */}
        <Route path="/desk/:id" component={Read} />
        <Route
          exact
          path="/desk"
          render={() => (
            <DeskHome
              segmentChanged={this.segmentChanged}
              value={this.state.value}
              loading={this.state.loading}
              posts={
                this.state.value === "sermon" ||
                this.state.value === "quickSermons" ||
                this.state.value === "blessings"
                  ? this.state.posts[this.state.value]
                  : this.state.posts.sermon
              }
            />
          )}
        />
      </IonRouterOutlet>
    );
  }
}

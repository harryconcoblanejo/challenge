import { Fragment } from "react";
import DataComponent from "./dataComponent";

function App(): JSX.Element {
  return (
    <Fragment>
      <div className="status">Status Dashboard</div>
      <div className="dataContainer">
        <div className="cardContainer">
          <DataComponent name="acounts" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="assets" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="customers" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="datapoints" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="devices" />;
        </div>

        <div className="cardContainer">
          <DataComponent name="documents" />;
        </div>

        <div className="cardContainer">
          <DataComponent name="forms" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="invites" />;
        </div>

        <div className="cardContainer">
          <DataComponent name="media" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="messages" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="namespaces" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="orders" />;
        </div>

        <div className="cardContainer">
          <DataComponent name="patients" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="relationships" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="rules" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="templates" />;
        </div>

        <div className="cardContainer">
          <DataComponent name="users" />;
        </div>
        <div className="cardContainer">
          <DataComponent name="workflows" />;
        </div>
      </div>
    </Fragment>
  );
}

export default App;

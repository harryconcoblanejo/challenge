/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";

import React, { useEffect, useState } from "react";
import "./App.css";

interface Idata {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}
interface Iprops {
  name: string;
}
const DataComponent = (props: Iprops): JSX.Element => {
  const [timer, setTime] = useState(0);
  const url = "https://api.factoryfour.com/API_NAME/health/status";

  const [apis_data, setApis_data] = useState<Idata>();

  const get = async () => {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    setApis_data(response.data);
  };

  useEffect(() => {
    get();
    //setting time

    setTimeout(() => {
      setTime(1);
      if (timer === 1) {
        setTime(0);
      }
      if (timer === 0) {
        setTime(1);
      }
    }, 15000);
  }, [timer]);

  if (!apis_data) {
    return <h1>loading...</h1>; // loader
  } else
    return (
      <div>
        {apis_data.success === true ? (
          <div>
            <div className="title">
              {props.name.split("-")[0].toUpperCase()}
            </div>
            <div className="green_message">
              {apis_data.message.split(":")[0]}
            </div>
            <div className="time">
              {new Date(apis_data.time).toLocaleString().split(",")[1]}
            </div>
            <div className="hostName">
              {" "}
              {props.name} - {apis_data.hostname.split("-")[1]}
            </div>
          </div>
        ) : (
          /* if succes = false---> error card */
          <div>
            <div className="title">
              {props.name.split("-")[0].toUpperCase()}
            </div>
            <div className="red_message">ERROR</div>
            <div className="error_message">OUTAGE</div>
            <div className="error_number">403 FORBIDEN</div>
          </div>
        )}
      </div>
    );
};

export default DataComponent;

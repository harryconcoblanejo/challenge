/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosResponse } from "axios";
import { hostname } from "os";
import React, { Fragment, useEffect, useState } from "react";

const DataComponent = (): JSX.Element => {
  interface Idata {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
    name: string;
  }

  const [timer, setTime] = useState(0);
  const url = "https://api.factoryfour.com/API_NAME/health/status";

  const api_names: Array<string> = [
    "accounts",
    "assets",
    "customers",
    "datapoints",
    "devices",
    "documents",
    "forms",
    "invites",
    "media",
    "messages",
    "namespaces",
    "orders",
    "patients",
    "relationships",
    "rules",
    "templates",
    "users",
    "workfolows",
  ];

  const [apis_data, setApis_data] = useState<Idata[]>([]);
  const initial_data: any = [];

  const get = async () => {
    return await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    api_names.forEach(async (name) => {
      console.log(name);
      const response = await get();

      let hostNumber = response.data.hostname.split("-")[1];
      let newName = name + "-" + hostNumber;

      initial_data.push({
        success: response.data.success,
        message: response.data.message,
        hostname: newName,
        time: response.data.time,
      });

      setApis_data([...initial_data]);
    });

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
    return <h1>loading...</h1>;
  } else
    return (
      <div className="dataContainer">
        <ul>
          *********************************
          {apis_data.map((obj) => (
            <div key={obj.time}>
              <li>
                {obj?.message.split(":")[0]}
                {new Date(obj!.time).toLocaleString().split(",")[1]}
                {obj.hostname}
              </li>
            </div>
          ))}
          *********************************
        </ul>
      </div>
    );
};

export default DataComponent;

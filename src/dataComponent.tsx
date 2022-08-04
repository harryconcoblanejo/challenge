/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosResponse } from "axios";
import React, { Fragment, useEffect, useState } from "react";

const TestComponent = (): JSX.Element => {
  interface Idata {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  }

  const [data, setData] = useState<Idata>();
  const [timer, setTime] = useState(0);

  useEffect(() => {
    const get = async () => {
      const response = await axios.get(
        "https://api.factoryfour.com/ACOUNTS/health/status",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
    };

    setTimeout(() => {
      setTime(1);
      if (timer === 1) {
        setTime(0);
      }
      if (timer === 0) {
        setTime(1);
      }
      get();
      console.log(data);
    }, 5000);
  }, [timer]);

  if (!data) {
    return <h1>loading...</h1>;
  } else
    return (
      <div>
        <h1>Hello</h1>{" "}
        <div>
          <h1>ACOUNTS</h1>
          <h3> {data?.message.split(":")[0]}</h3>
          <h3>{new Date(data!.time).toLocaleString().split(",")[1]}</h3>
        </div>
      </div>
    );
};

export default TestComponent;

import axios, { AxiosResponse } from "axios";
import React, { Fragment, useEffect, useState } from "react";

function App(): JSX.Element {
  interface Idata {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  }

  const [data, setData] = useState<Idata>();
  const [timer, setTime] = useState(0);

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

  useEffect(() => {
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
    }, 2000);
  }, [timer]);

  return (
    <div>
      <h1>ACOUNTS</h1>
      <h3> {data?.message.split(":")[0]}</h3>
      <h3>{data?.time}</h3>
    </div>
  );
}

export default App;

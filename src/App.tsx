import React, { Fragment, useState } from "react";

function App(): JSX.Element {
  const [data, setData] = useState("");

  const getData = () => {
    console.log("saludando");
  };
  return (
    <Fragment>
      <button onClick={getData}></button>
    </Fragment>
  );
}

export default App;

import axios, { AxiosResponse } from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataComponent from "./dataComponent";

function App(): JSX.Element {
  return (
    <div>
      <DataComponent />;
    </div>
  );
}

export default App;

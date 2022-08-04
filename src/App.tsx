import axios, { AxiosResponse } from "axios";
import React, { Fragment, useEffect, useState } from "react";
import TestComponent from "./dataComponent";

function App(): JSX.Element {
  return (
    <div>
      <TestComponent />;
    </div>
  );
}

export default App;

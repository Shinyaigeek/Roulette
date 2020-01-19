import React, { useState } from "react";
import ReactDOM from "react-dom";
import ShowTodos from "./components/ShowTodos";
import AddTodos from "./components/AddTodos";

import "./app.scss"

const App = () => {
  const [elms, setElms] = useState(["rrr"] as string[]);
  return (
    <div>
      <AddTodos elms={elms} setElms={(tar: string[]) => setElms(tar)} />
      <ShowTodos elms={elms} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

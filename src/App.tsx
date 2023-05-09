import React from "react";

import { Home } from "./Pages/Home";
import { createPortal } from "react-dom";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const buttonInstantMessage = document.querySelector(
    "footer._3E8Fg div._2lSWV._3cjY2 div._2xy_p._1bAtO"
  )!;

  console.log("buttonInstantMessage", buttonInstantMessage);
  return <Home />;
}

export default App;

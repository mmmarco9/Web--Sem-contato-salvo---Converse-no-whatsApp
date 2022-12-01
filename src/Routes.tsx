import React from "react";
import { createMemoryRouter } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Help } from "./Pages/Help";
import { InfoDisableCookie } from "./Components/InfoCookie";
import { About } from "./Pages/About";

const cookieIsDisabled = !navigator.cookieEnabled

export const router = createMemoryRouter([
  {
    path: "/",
    element: cookieIsDisabled ? <InfoDisableCookie /> : <Home />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import { router } from "./Routes";
import { theme } from "./Theme/themeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={2000} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </ThemeProvider>
);

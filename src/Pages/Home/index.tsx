import { FormEvent, useState } from "react";
import { useSnackbar } from "notistack";

import { Button, Paper, Box, Checkbox, FormControlLabel } from "@mui/material";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { Header } from "@/Components/Header";
import { Content, Page } from "@/Theme/globalStyles";

import { useWapiService } from "@/Hook/useWapiService";

export function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const [numberPhone, setNumberPhone] = useState("");
  const [typeApp, setTypeApp] = useState("web");
  const disabledButtonOpen = numberPhone?.length <= 3 ? true : false;
  function getValue(number: string) {
    setNumberPhone(number);
  }
  const { wapiService } = useWapiService();

  function openChat(e: FormEvent) {
    e.preventDefault();

    if (numberPhone?.length <= 7)
      return enqueueSnackbar("Número invalido", {
        variant: "error",
      });

    window.open(
      `https://${typeApp}.whatsapp.com/send/?phone=${numberPhone.slice(1)}`
    );
  }

  function handleChecked(select: string) {
    setTypeApp(select);
  }

  if (chrome.extension.getViews({ type: "popup" }).length > 0) {
    return (
      <Page>
        <Header titlePage="" showButtonMenu />
        <form onSubmit={openChat}>
          <Content>
            <Paper elevation={24} style={{ width: "80%" }}>
              <PhoneInput
                placeholder="Digite o número de telefone"
                value={numberPhone}
                onChange={getValue}
                defaultCountry="BR"
              />
            </Paper>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChecked("web")}
                    checked={typeApp === "web" ? true : false}
                  />
                }
                label="Web"
                title="Abrir whatsApp web"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => handleChecked("api")}
                    checked={typeApp === "api" ? true : false}
                  />
                }
                label="App"
                title="Abrir aplicativo whatsApp"
                sx={{ marginLeft: 2 }}
              />
            </Box>

            <Button
              type="submit"
              disabled={disabledButtonOpen}
              variant="contained"
              sx={{ color: "#fff" }}
            >
              Abrir chat
            </Button>
          </Content>
        </form>
      </Page>
    );
  }

  return (
    <>
      <Page>
        <Header titlePage="" showButtonMenu />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            wapiService?.openDirectChat(numberPhone);
          }}
        >
          <Content>
            <Paper elevation={24} style={{ width: "80%" }}>
              <PhoneInput
                placeholder="Digite o número de telefone"
                value={numberPhone}
                onChange={getValue}
                defaultCountry="BR"
              />
            </Paper>

            <Button
              type="submit"
              disabled={disabledButtonOpen}
              variant="contained"
              sx={{ color: "#fff" }}
            >
              Abrir chat
            </Button>
          </Content>
        </form>
      </Page>
    </>
  );
}

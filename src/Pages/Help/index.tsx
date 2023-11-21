import React, { useState } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { Header } from "@/Components/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export function Help() {
  const [active, setActive] = useState<number | null>(null);

  function handleClick(value: number) {
    if (active === value) return setActive(null);
    setActive(value);
  }
  return (
    <Box>
      <Header titlePage="Ajuda" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: "4px",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #f0e4e4",
            p: "4px 6px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize="0.750rem">
              <strong>Botão de Extensão do Google Chrome:</strong>
            </Typography>
            <IconButton onClick={() => handleClick(1)}>
              {active === 1 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </Box>
          {active === 1 && (
            <Typography fontSize="0.750rem">
              Quando você clica no ícone da extensão do Google Chrome, uma
              página do WhatsApp é aberta. Nessa página, você pode digitar o
              número do contato com o qual deseja conversar. Em seguida, você
              tem duas opções: abrir o WhatsApp Web no navegador ou selecionar
              para abrir o aplicativo do WhatsApp instalado no seu computador.
              Essas opções permitem iniciar uma conversa ativa com o número
              digitado. É uma forma conveniente de acessar o WhatsApp e começar
              a conversar sem precisar salvar o contato previamente.
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            border: "1px solid #f0e4e4",
            p: "4px 6px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize="0.750rem">
              <strong>Botão dentro da Página do WhatsApp Web:</strong>
            </Typography>
            <IconButton onClick={() => handleClick(2)}>
              {active === 2 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </Box>
          {active === 2 && (
            <Typography fontSize="0.750rem">
              Dentro da página do WhatsApp Web, você encontrará uma linha de
              botões de ação localizados na parte superior da tela, logo acima
              da área de digitação de pesquisa. O primeiro ícone à direita nessa
              linha de botões é utilizado para abrir uma conversa digitando o
              número do contato desejado. Ao utilizar esse botão, a conversa é
              aberta instantaneamente, sem a necessidade de carregar a página,
              proporcionando um acesso mais rápido e direto. É uma maneira
              conveniente de iniciar uma conversa no WhatsApp Web de forma ágil.
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            border: "1px solid #f0e4e4",
            p: "4px 6px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize="0.750rem">
              <strong>
                Atalho de Teclado (disponível se o WhatsApp Web estiver aberto):
              </strong>
            </Typography>
            <IconButton onClick={() => handleClick(3)}>
              {active === 3 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </Box>
          {active === 3 && (
            <Typography fontSize="0.750rem">
              Existe também um atalho de teclado que permite abrir o aplicativo,
              desde que o WhatsApp Web já esteja aberto em uma guia do
              navegador. Pressionando as teclas{" "}
              <strong> Control + Alt + A (no Windows)</strong> ou{" "}
              <strong>Command + Option + A (no Mac) </strong> , você pode
              acessar facilmente o aplicativo e iniciar uma conversa digitando o
              número do contato desejado.
            </Typography>
          )}
        </Box>
      </Box>

      <Box
        p={2}
        sx={{
          m: "16px 4px 4px 4px ",
          background: "#464646",
          color: "white",
          borderRadius: "8px",
          fontSize: "1rem",
        }}
      >
        <Typography>
          Se você precisar de ajuda, por favor mande uma mensagem para o
          WhatsApp: <br />
          <strong>(55) 5555-5555 </strong>
        </Typography>
      </Box>
    </Box>
  );
}

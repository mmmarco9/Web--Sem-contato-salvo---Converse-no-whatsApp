import React from "react";

import { Box, Typography } from "@mui/material";
import { Header } from "@/Components/Header";

export function Help() {
  return (
    <Box>
      <Header titlePage="Ajuda" />
      <Box p={2}>
        <Typography>Se você precisar de ajuda, por favor mande uma mensagem para o WhatsApp: (55) 99175-2924</Typography>
      </Box>
    </Box>
  );
}

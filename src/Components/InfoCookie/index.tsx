import { Box, Box as Content, Typography } from "@mui/material";

import logo from "@/Assets/logo.png";
import { Logo, Page, Title } from "@/Theme/globalStyles";

export function InfoDisableCookie() {
    return (
        <Page sx={{ marginTop: "20px" }}>
            <Content display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="20px">
                <Logo src={logo} />
                <Box>

                    <Title textAlign="center">
                        O navegador não oferece suporte ou está bloqueando a configuração de cookies.
                    </Title>
                    <Title textAlign="center">
                        Para habilitar digite na barra do navegador: chrome://settings/cookies e selecione a opção "Mostrar cookies", após fecha e abre novamente seu navegador.
                    </Title>


                </Box>

                <Title textAlign="center">
                    Ou
                </Title>

                <Title textAlign="center">Se o problema persitir, por favor mande uma mensagem para o <br /> WhatsApp: (55) 99121-1888</Title>

                {chrome.runtime && (
                    <Box
                        p={1}
                        justifyContent="center"
                    >
                        <Typography variant="overline" align="center">
                            Version {chrome.runtime.getManifest().version}
                        </Typography>
                    </Box>)}
            </Content>


        </Page>
    )
}
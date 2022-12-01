import { Header } from "@/Components/Header";
import { Page, Title } from "@/Theme/globalStyles";
import { Box, Paper, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { ButtonIcon } from "@/Theme/Buttons";

export function About() {
    return (
        <Page>
            <Box pb={6}>
                <Header titlePage="Sobre" />

                <Paper elevation={24}>
                    <Title textAlign="center" pt={1} pb={0}>Desenvolvedores:</Title>
                    <Box display="flex" justifyContent="space-around" alignItems="center" mt={-1}  >
                        <ButtonIcon color="secondary" onClick={() => window.open('https://www.instagram.com/joao_cardoso_silva/')}>
                            <InstagramIcon />  João
                        </ButtonIcon>
                        <ButtonIcon color="secondary" onClick={() => window.open('https://www.instagram.com/mmmarco9/')}>
                            <InstagramIcon />  Marco
                        </ButtonIcon>
                    </Box>

                </Paper>
            </Box>

            {chrome.runtime && (
                <>
                    <Box
                        p={2}
                        style={{ marginBottom: "-100px" }}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography variant="overline" align="center">
                            Version {chrome?.runtime.getManifest().version}
                        </Typography>
                    </Box>

                </>
            )}

        </Page>
    )
}
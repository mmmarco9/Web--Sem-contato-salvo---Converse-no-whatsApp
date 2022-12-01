import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Content = styled(Box)`
&& {
    display: grid;
    grid-template-columns: 20px 1fr 25px;
    align-items: center;
    padding: 20px 0 20px 0
}
`

export const Title = styled(Typography)`
&& {
    font-size: 20px;
    font-weight: bold
}
`
export const Buttons = styled(Box)`
&& {
    display: flex;
  }
`

export const Back = styled(Box)``


import {
  styled,
  Box,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Page = styled(Container)``;

export const Content = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
  }
`;

export const SelectTypeFile = styled(Select)`
&& {
    width: 100%;
    &:hover fieldset {
      border-color: #c62828
    },

    }
    
`;
export const ItemMenu = styled(MenuItem)`
  && {
    transition: 0.8s;

    &:hover {
      color: #ffffff;
      opacity: 2;
    }
  }
`;

export const Title = styled(Typography)`
  && {
    font-weight: 700;
    color: #464646;
  }
`;

export const Logo = styled("img")`
  && {
    width: 120px;
    height: 60px;
  }
`;

export const TitlePage = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }
`;

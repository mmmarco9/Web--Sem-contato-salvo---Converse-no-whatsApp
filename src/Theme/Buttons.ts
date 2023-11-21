import { styled, IconButton } from "@mui/material";

export const ButtonBack = styled(IconButton)`
  && {
    position: absolute;
    left: 10px;
    top: 30px;

    transition: 0.8s;
    &:hover {
      color: #ffffff;
      background: #5ebc67;
    }
  }
`;

export const ButtonIcon = styled(IconButton)`
  && {
    transition: 0.8s;
    &:hover {
      color: #ffffff;
      background: #5ebc67;
    }
  }
`;

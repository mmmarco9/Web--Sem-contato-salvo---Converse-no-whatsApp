import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Back, Content, Buttons, Title } from "./style";
import { ButtonIcon } from "@/Theme/Buttons";
import { Tooltip, Menu } from "@mui/material";
import { Logo, TitlePage } from "@/Theme/globalStyles";
import { MenuItem } from "./MenuItem";
import logo from "@/Assets/logo.png";
import GoogleReviewButton from "../GoogleReviewButton";

type HeaderProps = {
  titlePage: string;
  showButtonMenu?: boolean;
};

export function Header({ titlePage, showButtonMenu }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorBtnMenu, setAnchorBtnMenu] = useState<null | HTMLElement>(null);
  const hasPageHome = location.pathname.toString() === "/";
  const openMenu = Boolean(anchorBtnMenu);

  function handleClickBack() {
    navigate(-1);
  }

  function handleOpenMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorBtnMenu(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorBtnMenu(null);
  }

  return (
    <>
      <Content>
        {hasPageHome && <Logo src={logo} />}

        {!hasPageHome && (
          <Back>
            <Tooltip title="Voltar">
              <ButtonIcon onClick={handleClickBack}>
                <ArrowBackIosIcon sx={{ color: "#888888" }} />
              </ButtonIcon>
            </Tooltip>
          </Back>
        )}
        <TitlePage>
          <Title>{titlePage}</Title>
        </TitlePage>
        {showButtonMenu && (
          <Buttons display="flex" alignItems="center" justifyContent="end">
            <GoogleReviewButton />
            <ButtonIcon onClick={handleOpenMenu} size="small">
              <MoreVertIcon sx={{ color: "#888888" }} />
            </ButtonIcon>
          </Buttons>
        )}
      </Content>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorBtnMenu}
        open={openMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        PaperProps={{
          style: {
            overflow: "hidden",
          },
        }}
      >
        <MenuItem />
      </Menu>
    </>
  );
}

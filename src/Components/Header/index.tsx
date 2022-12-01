import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from "@mui/icons-material/Close";

import { Back, Content, Buttons, Title } from "./style";
import { ButtonIcon } from "@/Theme/Buttons";
import { Box, Divider, Popover, Tooltip, Typography, Menu, Dialog } from "@mui/material";
import { Logo, TitlePage } from "@/Theme/globalStyles";
import { MenuItem } from "./MenuItem";
import logo from "@/Assets/logo.png";

type HeaderProps = {
  titlePage: string;
  showButtonMenu?: boolean;

};

export function Header({ titlePage, showButtonMenu }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation()
  const [anchorBtnMenu, setAnchorBtnMenu] = useState<null | HTMLElement>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const hasPageHome = location.pathname.toString() === "/"
  const openMenu = Boolean(anchorBtnMenu);

  function handleClickBack() {
    navigate(-1)
  }

  function handleOpenMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorBtnMenu(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorBtnMenu(null);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
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
          <Buttons>
            <ButtonIcon onClick={handleOpenMenu}>
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
        anchorOrigin={
          {
            horizontal: "left",
            vertical: "bottom"
          }
        }
        PaperProps={{
          style: {

            overflow: "hidden"
          },
        }}
      >

        <MenuItem />
      </Menu>



    </>

  );
}

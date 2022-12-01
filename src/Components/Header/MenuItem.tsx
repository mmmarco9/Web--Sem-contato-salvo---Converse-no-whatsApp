import { MenuList } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ItemMenu } from "../../Theme/globalStyles";

export function MenuItem() {
  const navegate = useNavigate();

  function handlePageAbout() {
    navegate("/about")
  }

  function handlePageHelp() {
    navegate("/help")
  }

  return (
    <>
      <MenuList dense>
        <ItemMenu onClick={handlePageHelp}>Ajuda</ItemMenu>
        <ItemMenu onClick={handlePageAbout}>Sobre</ItemMenu>
      </MenuList>
    </>
  );
}

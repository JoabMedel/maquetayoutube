import React from "react";

/* Importar los componentes */
import Logo from "./logo";
import SearchBar from "./search-bar";
import Login from "./login";
import Icon from "./icon";
/* Importar los iconos */
import cameraIcon from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import module from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import bell from "../icons/iconfinder_icon-ios7-bell_211694.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={props.logo} />
      <SearchBar />
      <Icon iconUrl={cameraIcon} />
      <Icon iconUrl={module} />
      <Icon iconUrl={bell} />
      <Login />
    </div>
  );
}

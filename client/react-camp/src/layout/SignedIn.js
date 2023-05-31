import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import logo from "../images/me.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginExit } from "../store/action/userActions";
import { toast } from "react-toastify";
//props bir objedir onun için gelecek olan propsları {} obje lotasyonları içerisinde gösterebiliriz
export default function SignedIn() {
  const { userItem } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signOut = () => {
   
    dispatch(loginExit());
    toast.error(`Çıkış Yapıldı...`);
    
  };
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="rsight" src={logo} />
        <Dropdown pointing="top" text="Sefa">
          <Dropdown.Menu>
            <Dropdown.Item text="bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

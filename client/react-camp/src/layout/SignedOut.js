import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
//props bir objedir onun için gelecek olan propsları {} obje lotasyonları içerisinde gösterebiliriz
export default function SignedOut() {
  return (
    <div>
      <Menu.Item >
        <div>
        <Button primary as={NavLink} to="/login">
          Giriş Yap
        </Button>
        <Button primary as={NavLink} to="/signup"  style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
        </div>
      </Menu.Item>
      
    </div>
  );
}

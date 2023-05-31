import CartSammary from "./CartSammary";
import SignedIn from "./SignedIn";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchExampleStandard from "./Seach";
import { Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
//props bir objedir onun için gelecek olan propsları {} obje lotasyonları içerisinde gösterebiliriz
// useState daha kolay yönetebilmek için navi de tanımladık SıgnOut ve SıgnIn navinin içerisinde
export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userItem } = useSelector((state) => state.user);

  return (
    <div className="navi">
      <Menu size="small">
        <Menu.Item name="Ana Sayfa" as={NavLink} to={"/"} />

        <Menu.Menu position="right">
          

          {cartItems.length > 0 && <CartSammary />}
       
          {userItem.success.success ? <SignedIn /> : <SignedOut />}
        </Menu.Menu>
      </Menu>
    </div>
  );
}

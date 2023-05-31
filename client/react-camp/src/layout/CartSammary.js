import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Icon, Label } from "semantic-ui-react";
export default function CartSammary() {
  const trigger = (
    <span>
      <Icon name="shop" /> Sepetiniz
    </span>
  );
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Dropdown pointing="top right" item trigger={trigger}>
      <Dropdown.Menu>
        {cartItems.map((cartItem, index) => (
          <Dropdown.Item key={index}>
            <Label>{cartItem.product.productName}</Label>

            <Label color="black" pointing="left">
              {cartItem.quantity}
            </Label>
          </Dropdown.Item>
        ))}

        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/cart">
          Sepete Git
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

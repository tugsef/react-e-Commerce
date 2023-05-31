import React from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

export default function Calculate() {
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotal2 = cartItems.reduce(
    (acc, product) =>
      acc + product.quantity * (product.product.unitPrice * 1.18),
    0
  );
  let cartTotal13 = cartItems.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };

  return (
    <Table definition fixed padded>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Toplam Ürün Sayısı </Table.Cell>
          <Table.Cell>{cartTotal13} Adet</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Kdv Dahil Sepet Tutarı</Table.Cell>
          <Table.Cell>{financial(cartTotal2)} TL</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

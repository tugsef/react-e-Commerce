import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Header, Item, Label, Message } from "semantic-ui-react";
import logo from "../images/test.jpg";
import { toast } from "react-toastify";
import { addToCard, remove, removeFromCart } from "../store/action/cartActions";
import Calculate from "./Calculate";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

let paragraph =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, reiciendis doloribus! Neque aut molestias dolorum nisi! Corrupti aperiam obcaecati recusandae consequatur sequi! Debitis fugit porro ad blanditiis eligendi, odit nisi!" +
  "Ullam placeat laudantium eum veritatis nemo deleniti mollitia qui numquam perspiciatis. Id ipsa impedit sequi beatae? Temporibus quas enim possimus nam? Aliquam magnam sapiente reiciendis libero perspiciatis inventore doloremque blanditiis!";

export default function CartDetail() {
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };
  const removeToCart = (product) => {
    dispatch(removeFromCart(product));
    product.unitsInStock > 0 &&
      toast.error(`${product.productName} sepetten çıkarıldı!`);
  };
  const removeTo = () => {
    dispatch(remove());
    toast.error(`Sepet Silindi!`);
  };
  useEffect(() => {}, [cartItems]);

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={cartItems.length === 0 ? "false" : "12"}>
          <Header>Seçili Ürünler</Header>
          <hr />
          <Item.Group divided className="pro">
            {cartItems.map((product) => (
              <Item key={product.product.id}>
                <Item.Image
                  src={product.product.url}
                  as={NavLink}
                  to={`/product/${product.product.id}`}
                />

                <Item.Content>
                  <Item.Header>
                    <Label color="green">Adet:{product.quantity}</Label>
                    <Label>{product.product.productName}</Label>
                  </Item.Header>
                  <Item.Meta>
                    <span className="cinema">
                      Kategori:{" "}
                      {product.product.category === undefined
                        ? "-"
                        : product.product.category.categoryName}
                    </span>
                  </Item.Meta>
                  <Item.Description>{paragraph}</Item.Description>
                  <Item.Extra>
                    <Button
                      onClick={() => handleAddToCart(product.product)}
                      primary
                      floated="left"
                      icon="plus"
                    ></Button>
                    <Button
                      onClick={() => removeToCart(product.product)}
                      color="red"
                      floated="left"
                      icon="minus"
                    ></Button>

                    <Label>{financial(product.product.unitPrice)}</Label>
                    <Label
                      color={
                        product.product.unitsInStock === 0 ? "red" : "blue"
                      }
                    >
                      Stok:{product.product.unitsInStock}{" "}
                    </Label>
                    <Label basic>
                      Kdv Dahil:
                      {financial(
                        product.quantity * (product.product.unitPrice * 1.18)
                      )}{" "}
                      TL
                    </Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}

            {cartItems.length === 0 ? (
              <Item.Header>
                <Message positive>
                  <Message.Header>
                    Sepetinizde ürün bulunmamaktadır
                  </Message.Header>
                  <p>
                    Ürün eklemek için <b>anasayfaya</b> geri dönebilirsiniz.
                  </p>
                </Message>
                <Button color="green" as={NavLink} to="/" icon="chevron left" />
              </Item.Header>
            ) : (
              <Button floated="right" onClick={() => removeTo()} color="red">
                Sepeti Sil
              </Button>
            )}
          </Item.Group>
        </Grid.Column>
        {cartItems.length > 0 && (
          <Grid.Column width={4}>
            <Calculate />
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
}

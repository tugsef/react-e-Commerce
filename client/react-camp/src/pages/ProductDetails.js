import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Header, Icon, Item, Label } from "semantic-ui-react";

import ImageGallery from "react-image-gallery";
import ProductService from "../services/productService";
import { toast } from "react-toastify";
import { addToCard } from "../store/action/cartActions";
import { useDispatch } from "react-redux";


export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const images = [
    {
      original:
        product.url,
      thumbnail:
      product.url,
    },
    {
      original:
      product.url,
      thumbnail:
      product.url,
    },
    {
      original:
      product.url,
      thumbnail:
      product.url,
    },
  ];
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, reiciendis doloribus! Neque aut molestias dolorum nisi! Corrupti aperiam obcaecati recusandae consequatur sequi! Debitis fugit porro ad blanditiis eligendi, odit nisi!" +
    "Ullam placeat laudantium eum veritatis nemo deleniti mollitia qui numquam perspiciatis. Id ipsa impedit sequi beatae? Temporibus quas enim possimus nam? Aliquam magnam sapiente reiciendis libero perspiciatis inventore doloremque blanditiis!";
  let { id } = useParams();
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };
  
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCard(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };

  useEffect(() => {
    let productService = new ProductService();

    productService
      .getProductById(id)
      .then((result) => setProduct(result.data.data))
      .catch();
      
  }, [id]);

  return (
    <div>
      <Item.Group divided>
        <Header>Ürün Detay Sayfası</Header>

        <Item>
          <ImageGallery items={images}/>
          <Item.Content  style={{marginLeft:"1em"}}>
            <Item.Header>{product.productName}</Item.Header>
            <Item.Meta>
              <span className="cinema">
                Kategori:{" "}
                {product.category === undefined
                  ? "-"
                  : product.category.categoryName}
              </span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button
                onClick={() => handleAddToCart(product)}
                primary
                floated="left"
                icon="add"
              ></Button>
            
              <Label>Fiyat: {financial(product.unitPrice)} TL</Label>
              <Label color={product.unitsInStock === 0 ? "red" : "violet"}>
                Stok:{product.unitsInStock}{" "}
              </Label>
              <Button
                floated="right"
                positive
                animated
                as={NavLink}
                to={"/cart "}
              >
                <Button.Content hidden>Sepet</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <hr />
    </div>
  );
}

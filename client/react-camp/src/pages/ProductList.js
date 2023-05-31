import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Dimmer,
  Grid,

  GridColumn,

  Icon,
  Image,

  Label,
  Loader,
  Menu,
 
  Segment,
 
} from "semantic-ui-react";
import ProductService from "../services/productService";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/action/cartActions";
import { toast } from "react-toastify";
import Categories from "../layout/Categories";

export default function ProductList() {
  const [count, setCount] = useState(1);
    const [category , setCategory] =useState( []);
  const [products, setProducts] = useState([]);
const [isLoading , setLoading] = useState(false)

  const increase = () => {
    products.length===12&&setCount(count+1)
  };
  const descrease = () => {
   count > 0 && setCount(count - 1);
  };
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2); 
  };
 

    const dispatch = useDispatch();

  useEffect(() => {
    
    let productService = new ProductService();
    count > 0 &&
      productService
        .getAllByPage(count, 12)
        .then((result) => setProducts(result.data.data))
        .catch(e=>toast.error(e));
       
        setCategory(products)
        setLoading(false)
        console.log(products);
  }, [count]);

   
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCard(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };

  return (
    <Grid stackable>
      <Grid.Row>
      <GridColumn width={3}>
            <Categories />
          </GridColumn>
          <GridColumn width={13}>
    <div style={{marginRight:"2em"}}>
      {isLoading&&  <Segment>
          <Dimmer active>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
    
          <Image src='/images/wireframe/short-paragraph.png' />
          <Image src='/images/wireframe/short-paragraph.png' />
          <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>}
      <Grid  stackable columns={4}>
        {products.map((product) => (
          <Grid.Column>
            <Card >
            
              <Image as={NavLink} to={`/product/${product.id}`} src={product.url} wrapped ui={false} />
              <Card.Content >
                <Card.Header>{product.productName}</Card.Header>
                <Card.Meta>
                  <span className="date">
                    {financial(product.unitPrice)} TL
                  </span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label color={product.unitsInStock === 0 &&"red"}>
                  Stok:{product.unitsInStock}
                </Label>
                <Label floating color="green" size="small" pointing="left">
                  { financial(product.unitPrice)} TL
                </Label>
                <Button
                size="mini"
                            primary
                            onClick={() =>
                              product.unitsInStock > 0
                                ? handleAddToCart(product)
                                : toast.error("Ürün Tükendi")
                            }
                            animated
                            floated="right"
                          >
                            <Button.Content visible>Sebete Ekle</Button.Content>
                            <Button.Content hidden>
                              <Icon name="shop" />
                            </Button.Content>
                          </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
        <Grid.Row >
   
          
      
        </Grid.Row>
        
      </Grid>
      <Container>
      <Label floated="left">{products.length} Ürün</Label>
                <Menu floated="right" pagination>
                  <Menu.Item
                    as="a"
                    icon
                    onClick={() => count > 1 && descrease()}
                  >
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item onClick={() => setCount(1)}>1</Menu.Item>
                  <Menu.Item onClick={() => setCount(2)}>2</Menu.Item>
                  <Menu.Item onClick={() => setCount(3)}>3</Menu.Item>
                  <Menu.Item onClick={() => setCount(4)}>4</Menu.Item>
                  <Menu.Item
                    icon
                    onClick={() => products.length > 0 && increase()}
                  >
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
                </Container>  
      </div>
      </GridColumn>
      </Grid.Row>
      </Grid>
  );
}




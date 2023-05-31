import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import ProductService from "../services/productService";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getCategory()
      .then((result) => setCategories(result.data.data))
      .catch((e) => console.log(e));
    console.log(categories);
  }, []);

  return (
    <Menu pointing vertical>
      <Menu.Item header name="Kategoriler" />
      {categories.map((category, index) => (
        <Menu.Item
          key={index}
          name={category.categoryName}
          as={NavLink}
          to={`/category/${category.categoryId}`}
        />
      ))}
    </Menu>
  );
}

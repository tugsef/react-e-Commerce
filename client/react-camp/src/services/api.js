import axios from "axios";

export const getProducts = async () => {
  const { data } =await axios.get("http://localhost:8080/api/products/getall");
  return data;
};

export const getProdutPage = async (pageNo , pageSize)=>{
    const {data} = await axios.get(`http://localhost:8080/api/products/getAllByPage?pageNo=${pageNo}&pageSize=${pageSize}`);
    return data;
}
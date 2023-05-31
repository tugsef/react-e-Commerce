import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get(`${process.env.REACT_APP_BASE_ENTPOINT}/getAll`)
    }

    getProductById(id){
        return axios.get(`${process.env.REACT_APP_BASE_ENTPOINT}/getByProduct/${id}`)
    }
    getCategory(){
        return axios.get("http://localhost:8080/api/category/getAll")
    }
    getAllByPage(pageNo,pageSize){
        return axios.get(`${process.env.REACT_APP_BASE_ENTPOINT}/getAllByPage?pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    setUser(input){
        return axios.post('http://localhost:8080/api/users/add',input)
    }

    loginUser(input){
        return axios.post('http://localhost:8080/api/users/login' , input)
    }

    getProductWithCategoryDetails(){
        return  axios.get('http://localhost:8080/api/products/getProductWithCategoryDetails')
    }
    findCategory(categoryId){
        return axios.get(`http://localhost:8080/api/products/findCategory/${categoryId}`)
    }
}
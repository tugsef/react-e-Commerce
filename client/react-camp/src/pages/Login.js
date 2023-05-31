import { Form, Formik } from "formik";
import React from "react";
import TugSefTextInput from "../utilities/custom/TugSefTextInput";
import * as Yup from "yup";
import ProductService from "../services/productService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/action/userActions";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .required("Boş Bırakılamaz")
      .email("Geçerli Email Giriniz..."),
    password: Yup.number()
      .required("Password")
      .label("Ürün Fiyatı boş bırakılamaz"),
  });

  const onSubmit = (values) => {
   
    
    try {
      const productService = new ProductService();
      productService.loginUser(values).then((data) => {
        data.data.success
          ? toast.success(data.data.message)
          : toast.error(data.data.message);
        dispatch(loginSuccess(data.data));
        data.data.success?navigate('/'):navigate("/login")
        
      });
      
      
    } catch (e) {}
    
    
  };

  return (
    <div className="parent">
      <div className="column">
        <h2 className="ui blue image header">
      
          <div className="content">Giriş Yap</div>
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form className="ui form">
            <div className="ui  ">
              <div className="field">
                <label style={{ textAlign: "left" }}>E-posta</label>
                <div className="ui left icon input">
                  <TugSefTextInput name="email" />
                </div>
              </div>
              <div className="field">
                <label style={{ textAlign: "left" }}>Şifre</label>
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <TugSefTextInput name="password" type="password"/>
                </div>
              </div>
              <button className="ui primary button" type="submit">
                Giriş Yap
              </button>
             
            </div>

            <div class="ui error message"></div>
          </Form>
        </Formik>
        <div class="ui message">
          Kayıtlı mısın? <NavLink to="/signup">Kayıt ol</NavLink>
        </div>
      </div>
    </div>
  );
}

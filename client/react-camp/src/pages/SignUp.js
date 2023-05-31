import * as Yup from "yup";
import React from "react";
import { Form, Formik } from "formik";
import TugSefTextInput from "../utilities/custom/TugSefTextInput";
import { Button,  Label} from "semantic-ui-react";
import ProductService from "../services/productService";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz..")
    .required("E-posta adresi zorunludur"),
  password: Yup.string()
    .required("Şifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır..."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur."),
});

const onSubmit = (values) => {
  let productService = new ProductService();

  try {
     productService
      .setUser(values)
      .then((data) =>
        {data.data.success
          ?toast.success(data.data.message)
          : toast.error(data.data.message)

        }
      )
  } catch (error) {
    alert(error);
  }
};

function SignUp() {
  return (
    <div className="parent">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <Label  basic><b>E-posta</b></Label>
          <TugSefTextInput name="email" placeholder="Email" style={{margin:"10px 0px"}} />
          <Label basic><b>Şifre</b></Label>
          <TugSefTextInput style={{margin:"10px 0px"}}
            name="password"
            placeholder="Şifre"
            type="password"
          />
          <Label basic><b>Şifre Tekrar</b></Label>
          <TugSefTextInput
            name="confirmPassword"
            placeholder="Şifre Tekrar"
            type="password"
            style={{marginTop:"10px"}}
          />
          <Button content="Login" primary floated="right" />
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;

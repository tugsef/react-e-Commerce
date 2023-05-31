import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormField } from "semantic-ui-react";
import TugSefTextInput from "../utilities/custom/TugSefTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı boş bırakılamaz"),
    unitPrice: Yup.number()
      .required("Number")
      .label("Ürün Fiyatı boş bırakılamaz"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
            {/*<Field name="productName" placeholder="Ürün Adı"/>
            <ErrorMessage name="productName" render={(error)=>
                <Label pointing color="red">Ürün İsmi Boş Bırakılamaz</Label>
            } />Costom olarak yazılıyor*/}
            <TugSefTextInput name="productName" placeholder="Ürün Adı" />
          </FormField>
          <FormField>
            {/* <Field name="unitPrice" placeholder="10"></Field>
            <ErrorMessage name="unitPrice" render={(error)=>
            <Label pointing color="red">Ürün Fiyatı</Label>} /> */}
            <TugSefTextInput name="unitPrice" placeholder="Fiyat" />
          </FormField>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
    //redux-thunk
  );
}

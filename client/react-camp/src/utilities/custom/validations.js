import * as yup from "yup";
    const validations = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli Bir Alan Giriniz...")
        .required("Zorunlu Alan"),
    password: yup
        .string()
        .min(5, "Parolanız 5 karakterden büyük olmalıdır")
        .required("Boş Bırakılamaz"),
        passwordConfirm: yup.string().oneOf(
        [yup.ref("password") , null],
        "Parolalar uyuşmuyor.."
    ).required(),
    });

export default validations
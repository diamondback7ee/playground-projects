import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/;
export const formSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password does not meet minimun requirements.",
    })
    .required("Password is required."),
});

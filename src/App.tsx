import { FormikHelpers, FormikValues, useFormik } from "formik";
import classes from "./App.module.css";
import { formSchema } from "./schemas/sign-up-schema.tsx";

//key names in initial values correspond to name attribute in <input>

interface Values {
  name: string;
  email: string;
  password: string;
}

const initialValues: Values = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = async (
  values: FormikValues,
  actions: FormikHelpers<Values>,
) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const App = () => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>Sign Up</h2>

        <div className={classes["form-group"]}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={
              errors.name && touched.name
                ? `${classes["form-group-input"]} ${classes["input-error"]}`
                : `${classes["form-group-input"]}`
            }
          />
          {errors.name && touched.name && (
            <p className={classes["error-message"]}>{errors.name}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={
              errors.email && touched.email
                ? `${classes["form-group-input"]} ${classes["input-error"]}`
                : `${classes["form-group-input"]}`
            }
          />
          {errors.email && touched.email && (
            <p className={classes["error-message"]}>{errors.email}</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={
              errors.password && touched.password
                ? `${classes["form-group-input"]} ${classes["input-error"]}`
                : `${classes["form-group-input"]}`
            }
          />
          {errors.password && touched.password && (
            <p className={classes["error-message"]}>{errors.password}</p>
          )}
        </div>

        <div className={classes["form-actions"]}>
          <button
            type="reset"
            className={`${classes.button} ${classes["button-flat"]}`}
          >
            Reset
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`${classes.button}`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default App;

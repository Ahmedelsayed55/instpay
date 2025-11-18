import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
const Login = () => {
    const navigate = useNavigate();
  const handleSubmit = (values) => {
    const dataVrified = true
    if (dataVrified) {
    toast.success("تم تسجيل الدخول بنجاح")
      navigate("/")
      localStorage.setItem("userToken", "loggedIn")
      localStorage.setItem("userName", values.username)
    }else{
      toast.error("فشل تسجيل الدخول")
    }
  };
  const validateSchema = Yup.object({
    email: Yup.string().required("يبني انت عبيط  فين البريد ").email("انت شكلك هتتعبني يابني دخل ايميل عدل  😡😡👊"),
    password: Yup.string()
      .required("يبني انت عبيط  فين الباسورد  😡👊")
      .min(4, "ياجدع معرفتكش انا كدا بقا طب ماتسيبو فاضي احسن 😡👊")
      .max(20, "ياخي اتقي الله يعني ياكدا ياكدا  😡👊"),
        username: Yup.string().required("يبني انت عبيط  فين الاسم  😡👊")
    
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{
            username: "",
          email: "",
          password: "",
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="flex flex-col gap-4 p-8 border rounded shadow w-full lg:w-1/3">
          <h1 className="text-2xl font-bold">Login</h1>
          <Field
            name="username"
            placeholder="User Name"
            className="p-2 border rounded w-full input input-info"
          />
            <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm"
          />
          <Field
            name="email"
            placeholder="Email"
            className="p-2 border rounded w-full input input-info"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm"
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded w-full input input-info"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiShowAlt } from "react-icons/bi";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    toast.success("تم التسجيل بنجاح");
    navigate("/login");
    localStorage.setItem("userName", values.username);
    const userData = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  const validateSchema = Yup.object({
    email: Yup.string()
      .required("يبني انت عبيط  فين البريد ")
      .email("انت شكلك هتتعبني يابني دخل ايميل عدل  😡😡👊"),
    password: Yup.string()
      .required("يبني انت عبيط  فين الباسورد  😡👊")
      .min(4, "ياجدع معرفتكش انا كدا بقا طب ماتسيبو فاضي احسن 😡👊")
      .max(20, "ياخي اتقي الله يعني ياكدا ياكدا  😡👊"),
    username: Yup.string().required("يبني انت عبيط  فين الاسم  😡👊"),
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
          <h1 className="text-2xl font-bold">Register</h1>
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
          <div className="flex items-center w-full relative">
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-2 border rounded w-full input input-info "
            />
            <button
              type="button"
              className=" absolute right-0 bg-transparent border-0 btn text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              <BiShowAlt />
            </button>
          </div>
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

export default Register;

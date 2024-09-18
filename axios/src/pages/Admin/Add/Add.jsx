import React from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Add = () => {
  const url = "https://northwind.vercel.app/api/products";
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Formik
              initialValues={{
                name: "",
                quantityPerUnit: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(3, "too short")
                  .max(15, "too long")
                  .required("name is rquired"),
                quantityPerUnit: Yup.number().required(
                  "quantityPerUnit is rquired"
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                axios.post(url, values).then((res) => {
                  console.log(res);
                });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name ? (
                    <p className="text-danger">{errors.name}</p>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    name="quantityPerUnit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantityPerUnit}
                  />
                  {errors.quantityPerUnit ? (
                    <p className="text-danger">{errors.quantityPerUnit}</p>
                  ) : (
                    ""
                  )}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;

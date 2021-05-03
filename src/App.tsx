import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { CardView } from "./components/CardView/component";
import { FormToFill } from "./components/FormToFill/component";
import { useFormik } from "formik";
import * as yup from "yup";

export const App: React.FC = () => {
  const SignupSchema = yup.object({
    cardNumber: yup
      .string()
      .matches(/^[456]/, "Number should start with 4, 5, or 6")
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Number isn't completed")
      .length(19, "Number must have 16 characters")
      .required("Number is required"),
    name: yup
      .string()
      .matches(/\D/, "Name shouldn't have numbers")
      .matches(/\D\s\D/, "Name should have indent")
      .required("Name is required"),
    date: yup
      .string()
      .matches(/\d{2}\/\d{2}/, "Date isn't completed")
      .required("Date is required"),
    cvv: yup
      .string()
      .length(3, "CVV must have 3 characters")
      .required("CVV is required"),
  });

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      name: "",
      date: "",
      cvv: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [fieldInFocus, setFieldInFocus] = useState("");
  const classes = useStyles();

  return (
    <CssBaseline>
      <Grid
        container
        className={classes.wrapper}
        justify="center"
        alignItems="center"
      >
        <Grid container md={4} justify="center" alignItems="center">
          <CardView formik={formik} fieldInFocus={fieldInFocus} />
          <FormToFill formik={formik} setFieldInFocus={setFieldInFocus} />
        </Grid>
      </Grid>
    </CssBaseline>
  );
};

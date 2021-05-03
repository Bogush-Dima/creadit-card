import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { CardView } from "./components/CardView/component";
import { FormToFill } from "./components/FormToFill/component";
import { useFormik } from "formik";
import * as yup from 'yup';

export const App: React.FC = () => {
  const SignupSchema = yup.object({
    cardNumber: yup
        .string()
        .matches(/^(4|5|6)/, "Name should start with 4, 5, or 6")
        .length(19, 'Card number must have 16 characters')
        .required('Card number is required'),
    name: yup
        .string()
        .matches(/\D/, "Name shouldn't have numbers")
        .required('Name is required'),
    date: yup
        .string()
        .matches(/\//, "Must have /")
        .length(5, 'Date must have 5 characters')
        .required('Date is required'),
    cvv: yup
        .string()
        .length(3, 'CVV must have 3 characters')
        .required('CVV is required'),
  });

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      name: '',
      date: '',
      cvv: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [fieldInFocus, setFieldInFocus] = useState('');
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

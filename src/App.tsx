import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { CardView } from "./components/CardView/component";
import { FormToFill } from "./components/FormToFill/component";
import { useFormik } from "formik";

export const App: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      name: '',
      date: '',
      cvv: '',
    },
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

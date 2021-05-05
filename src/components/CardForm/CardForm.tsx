import React, { ChangeEvent, FocusEvent } from "react";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { ComponentsProps } from "utils/types/ComponentsProps";
import Input from "./components/Input";
import InputWithMask from "./components/InputWithMask";

export const CardForm: React.FC<ComponentsProps> = ({
  formik,
  setFieldInFocus,
}: ComponentsProps) => {
  const classes = useStyles();
  const {
    handleChange,
    handleBlur,
    resetForm,
    errors,
    touched,
    dirty,
    isValid,
  } = formik;
  const { cardNumber, name, date, cvv } = formik.values;

  const formattingName = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.toUpperCase();
    handleChange(event);
  };

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFieldInFocus(event.target.name);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFieldInFocus("");
    handleBlur(event);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {InputWithMask({
        errors: errors,
        mask: "9999 9999 9999 9999",
        value: cardNumber,
        className: classes.longField,
        name: "cardNumber",
        label: "card number",
        maxLength: 20,
        onFocus: onFocus,
        onBlur: onBlur,
        handleChange: handleChange,
        touched: touched.cardNumber,
      })}

      {Input({
        errors: errors,
        value: name,
        className: classes.longField,
        name: "name",
        label: "name",
        onFocus: onFocus,
        onBlur: onBlur,
        handleChange: handleChange,
        formattingName: formattingName,
        touched: touched.name,
      })}

      <Grid container justify="space-between">
        {InputWithMask({
          errors: errors,
          mask: "99/99",
          value: date,
          className: classes.shortField,
          name: "date",
          label: "mm/yy",
          maxLength: 6,
          onFocus: onFocus,
          onBlur: onBlur,
          handleChange: handleChange,
          touched: touched.date,
        })}

        {Input({
          errors: errors,
          value: cvv,
          className: classes.shortField,
          name: "cvv",
          label: "cvv",
          maxLength: 3,
          onFocus: onFocus,
          onBlur: onBlur,
          handleChange: handleChange,
          touched: touched.cvv,
        })}
      </Grid>

      <Grid
        container
        className={classes.buttonWrapper}
        justify="center"
        alignItems="center"
      >
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid || !dirty}
        >
          Submit
        </Button>

        <Button
          className={classes.button}
          type="reset"
          variant="contained"
          onClick={resetForm}
        >
          Reset
        </Button>
      </Grid>
    </form>
  );
};

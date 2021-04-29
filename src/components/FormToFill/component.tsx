import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { Props } from "./types";

export const FormToFill: React.FC<Props> = ({
  formik,
  setFieldInFocus,
}: Props) => {
  const classes = useStyles();
  const { handleChange } = formik;
  const { cardNumber, name, date, cvv } = formik.values;

  const onFocus = (event: any) => {
    setFieldInFocus(event.target.name);
  };

  const onBlur = () => {
    setFieldInFocus("");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        className={classes.longField}
        type="number"
        name="cardNumber"
        label="Card Number"
        variant="outlined"
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={cardNumber}
      />
      <TextField
        className={classes.longField}
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={name}
      />
      <Grid container justify="space-between">
        <TextField
          className={classes.shortField}
          type="number"
          name="date"
          label="Date"
          variant="outlined"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={date}
        />
        <TextField
          className={classes.shortField}
          type="number"
          name="cvv"
          label="CVV"
          variant="outlined"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={cvv}
        />
      </Grid>
      <Grid
        container
        className={classes.buttonWrapper}
        justify="center"
        alignItems="center"
      >
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          type="reset"
          variant="contained"
          onClick={formik.resetForm}
        >
          Reset
        </Button>
      </Grid>
    </form>
  );
};

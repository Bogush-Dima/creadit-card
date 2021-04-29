import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { Props } from "./types";

export const FormToFill: React.FC<Props> = ({
  formik,
  setFieldInFocus,
}: Props) => {
  const classes = useStyles();
  const { handleChange, errors } = formik;
  const { cardNumber, name, date, cvv } = formik.values;

  const onFocus = (event: any) => {
    setFieldInFocus(event.target.name);
  };

  const onBlur = () => {
    setFieldInFocus("");
  };

  const fieldsLimiter = (event: any, num: number) => {
    event.target.value = Math.max(0, parseInt(event.target.value))
      .toString()
      .slice(0, num);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        className={classes.longField}
        type="number"
        name="cardNumber"
        label="Card Number"
        variant="outlined"
        size="small"
        onInput={(event: any) => fieldsLimiter(event, 16)}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={Boolean(errors.cardNumber)}
        helperText={errors.cardNumber}
        value={cardNumber}
      />
      <TextField
        className={classes.longField}
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        size="small"
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={Boolean(errors.name)}
        helperText={errors.name}
        value={name}
      />
      <Grid container justify="space-between">
        <TextField
          className={classes.shortField}
          type="number"
          name="date"
          label="Date"
          variant="outlined"
          size="small"
          onInput={(event: any) => fieldsLimiter(event, 5)}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          error={Boolean(errors.date)}
          helperText={errors.date}
          value={date}
        />
        <TextField
          className={classes.shortField}
          type="number"
          name="cvv"
          label="CVV"
          variant="outlined"
          size="small"
          onInput={(event: any) => fieldsLimiter(event, 3)}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          error={Boolean(errors.cvv)}
          helperText={errors.cvv}
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

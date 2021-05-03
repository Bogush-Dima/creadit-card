import React, {ChangeEvent, FocusEvent} from "react";
import InputMask from "react-input-mask";
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

  const formattingName = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.toUpperCase()
      handleChange(event)
  }

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFieldInFocus(event.target.name);
  };

  const onBlur = () => {
    setFieldInFocus("");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputMask
        mask="9999 9999 9999 9999"
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={cardNumber}
      >
        {() => (
          <TextField
            className={classes.longField}
            type="text"
            name="cardNumber"
            label="card number"
            variant="outlined"
            size="small"
            inputProps={{ maxLength: 20 }}
            error={Boolean(errors.cardNumber)}
            helperText={errors.cardNumber}
          />
        )}
      </InputMask>
      <TextField
        className={classes.longField}
        type="text"
        name="name"
        label="name"
        variant="outlined"
        size="small"
        onChange={formattingName}
        onFocus={onFocus}
        onBlur={onBlur}
        error={Boolean(errors.name)}
        helperText={errors.name}
        value={name}
      />
      <Grid container justify="space-between">
        <InputMask
          mask="99/99"
          maskPlaceholder="mm/yy"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={date}
        >
          {() => (
            <TextField
              className={classes.shortField}
              type="text"
              name="date"
              label="mm/yy"
              variant="outlined"
              size="small"
              inputProps={{ maxLength: 6 }}
              error={Boolean(errors.date)}
              helperText={errors.date}
            />
          )}
        </InputMask>
        <TextField
          className={classes.shortField}
          type="text"
          name="cvv"
          label="cvv"
          variant="outlined"
          size="small"
          inputProps={{ maxLength: 3 }}
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

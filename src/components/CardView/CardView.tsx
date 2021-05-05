import React from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { ComponentsProps } from "utils/types/ComponentsProps";

export const CardView: React.FC<ComponentsProps> = ({ formik, fieldInFocus }: ComponentsProps) => {
  const classes = useStyles();
  const { cardNumber, name, date, cvv } = formik.values;

  const authCardSystem = () => {
    switch (cardNumber[0]) {
      case "4":
        return "Visa";
      case "5":
        return "MasterCard";
      case "6":
        return "Белкарт";
      default:
        return "";
    }
  };

  return (
    <Grid container className={classes.card}>
      <Grid
        container
        md={12}
        className={classes.logo}
        alignItems="center"
        justify="flex-end"
      >
        <p className={classes.cardSystem}>{authCardSystem()}</p>
      </Grid>

      <Grid container direction="column" alignItems="center" justify="center">
        <p
          className={clsx(classes.cardNumber, {
            [classes.onFocus]: fieldInFocus === "cardNumber",
          })}
        >
          {cardNumber ? cardNumber : "Card Number"}
        </p>

        <Grid container justify="space-between" alignItems="baseline">
          <p
            className={clsx(classes.userName, {
              [classes.onFocus]: fieldInFocus === "name",
            })}
          >
            {name ? name : "Name"}
          </p>
          <p
            className={clsx(classes.viewDate, {
              [classes.onFocus]: fieldInFocus === "date",
            })}
          >
            {date ? date : "Date"}
          </p>
        </Grid>

        <Grid
          container
          className={clsx(classes.backSide, {
            [classes.onFocusBackSide]: fieldInFocus === "cvv",
          })}
          justify="flex-end"
          alignItems="flex-end"
        >
          <p
            className={clsx(classes.viewDate, {
              [classes.onFocus]: fieldInFocus === "cvv",
            })}
          >
            {cvv ? cvv : "CVV"}
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

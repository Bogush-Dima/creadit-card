import React, { useMemo } from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'
import { FormikValuesKeys } from 'components/CreditCard/constants/FormikValuesKeys'
import { InputLabels } from 'components/CreditCard/constants/InputLabels'
import { Visa, MasterCard, Belcard } from 'components/CreditCard/constants/CardSystems'
import { Props } from 'components/CreditCard/View/types'

export const View: React.FC<Props> = ({ formik, fieldInFocus }: Props) => {
  const classes = useStyles()
  const { cardNumber, name, date, cvv } = formik.values

  const checkNameLength = (value: string): string => {
    if (value.length > 10) {
      return value.slice(0, 10) + '...'
    }
    return value
  }

  const authCardSystem = useMemo(() => {
    switch (cardNumber[0]) {
      case Visa.Code:
        return Visa.Name
      case MasterCard.Code:
        return MasterCard.Name
      case Belcard.Code:
        return Belcard.Name
      default:
        return ''
    }
  }, [cardNumber[0]])

  return (
    <Grid container className={classes.card}>
      <Grid container md={12} className={classes.logo} alignItems="center" justify="flex-end">
        <p className={classes.cardSystem}>{authCardSystem}</p>
      </Grid>

      <Grid container direction="column" alignItems="center" justify="center">
        <p
          className={clsx(classes.cardNumber, {
            [classes.onFocus]: fieldInFocus === FormikValuesKeys.CardNumber,
          })}
        >
          {cardNumber || InputLabels.CardNumber}
        </p>

        <Grid container justify="space-between" alignItems="baseline">
          <p
            className={clsx(classes.userName, {
              [classes.onFocus]: fieldInFocus === FormikValuesKeys.Name,
            })}
          >
            {checkNameLength(name) || InputLabels.Name}
          </p>
          <p
            className={clsx(classes.viewDate, {
              [classes.onFocus]: fieldInFocus === FormikValuesKeys.Date,
            })}
          >
            {date}
          </p>
        </Grid>

        <Grid
          container
          className={clsx(classes.backSide, {
            [classes.onFocusBackSide]: fieldInFocus === FormikValuesKeys.Cvv,
          })}
          justify="flex-end"
          alignItems="flex-end"
        >
          <p
            className={clsx(classes.viewDate, {
              [classes.onFocus]: fieldInFocus === FormikValuesKeys.Cvv,
            })}
          >
            {cvv || InputLabels.Cvv}
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

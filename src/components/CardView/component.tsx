import React from 'react'
import clsx from 'clsx'
import {Grid} from "@material-ui/core";
import {useStyles} from "./styles";
import {Props} from "./type";

export const CardView: React.FC<Props> = ({formikValues, blurValues}: Props) => {
    const classes = useStyles()
    const {cardNumber, name, cvv, date} = formikValues

    const authCardSystem = () => {
        const cardNumberStr = String(cardNumber)
        switch (cardNumberStr[0]) {
            case '4':
                return 'Visa'
            case '5':
                return 'MasterCard'
            case '6':
                return 'Белкарт'
            default:
                return ''
        }
    }

    return (
        <Grid container className={classes.card}>
            <Grid container md={12} className={classes.logo} alignItems='center' justify='flex-end'>
                {authCardSystem()}
            </Grid>

            <Grid container className={classes.content} direction='column' alignItems="center" justify='center'>
                <p className={clsx(classes.cardNumber, {[classes.onFocus]: blurValues.cardNumber})}>{cardNumber ? cardNumber : 'Card Number'}</p>

                <Grid container justify='space-between'>
                    <p className={clsx(classes.userName, {[classes.onFocus]: blurValues.name})}>{name ? name : 'Name'}</p>
                    <p className={clsx(classes.viewDate, {[classes.onFocus]: blurValues.date})}>{date ? date : 'Date'}</p>
                </Grid>

                <Grid container className={clsx(classes.backSide, {[classes.onFocusBackSide]: blurValues.cvv})} justify='flex-end' alignItems='flex-end'>
                    <p className={clsx(classes.viewDate, {[classes.onFocus]: blurValues.cvv})}>{cvv ? cvv : 'CVV'}</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
import React from 'react'
import {Grid} from "@material-ui/core";
import {useStyles} from "./styles";
import {Props} from "./type";

export const CardView: React.FC<Props> = ({formikValues}: Props) => {
    const classes = useStyles()
    const {cardNumber, name, cvv, date} = formikValues

    const authCardSystem = () => {
        const cardNumberStr = String(cardNumber)
        switch (cardNumberStr[0]) {
            case '4':
                return 'Visa'
            case '5':
                return 'MasterCard'
            default:
                return 'undefined'
        }
    }

    return (
        <Grid container className={classes.card}>
            <Grid container md={12} className={classes.logo} alignItems='center' justify='flex-end'>
                {authCardSystem()}
            </Grid>

            <Grid container className={classes.content} direction='column' alignItems="center" justify='center'>
                <p className={classes.cardNumber}>{cardNumber ? cardNumber : 'Card Number'}</p>

                <Grid container justify='space-between'>
                    <p className={classes.userName}>{name ? name : 'Name'}</p>
                    <p className={classes.viewData}>{date ? date : 'Date'}</p>
                </Grid>

                <Grid container className={classes.backSide} justify='flex-end' alignItems='flex-end'>
                    <p className={classes.viewData}>{cvv ? cvv : 'CVV'}</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
import React from 'react'
import {Grid} from "@material-ui/core";
import {useStyles} from "./styles";

export const CardView: React.FC = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.card}>
            <Grid container md={12} className={classes.logo} alignItems='center' justify='flex-end'>
                undefined
            </Grid>

            <Grid container className={classes.content} direction='column' alignItems="center" justify='center'>
                <p className={classes.cardNumber}>Card Number</p>

                <Grid container justify='space-between'>
                    <p className={classes.userName}>User Name</p>
                    <p className={classes.viewData}>Date</p>
                </Grid>

                <Grid container className={classes.backSide} justify='flex-end' alignItems='flex-end'>
                    <p className={classes.viewData}>Code</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
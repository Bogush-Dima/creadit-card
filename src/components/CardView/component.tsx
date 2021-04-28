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

            <Grid container className={classes.content} direction='column' alignItems="center" justify='center' >
                <Grid item>
                    <p>Card Number</p>
                </Grid>

                <Grid container justify='space-around'>
                        <p>User Name</p>
                        <p>Date</p>
                </Grid>

                <Grid container className={classes.backSide} justify='flex-end' alignItems='flex-end'>
                    <Grid item>
                        <p>Code</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
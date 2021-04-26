import React from 'react'
import {Grid} from "@material-ui/core";
import {useStyles} from "./styles";

export const CardView: React.FC = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.card}>
            <Grid container md={12} className={classes.logo} alignItems='center' justify='flex-end'>
                <img src='/' alt='logo'/>
            </Grid>

            <Grid container className={classes.content} direction='column' alignItems="center" justify='center' >
                <Grid item>
                    <input type='number' placeholder='NUMBER'/>
                </Grid>

                <Grid container justify='space-between'>
                    <Grid item md={6}>
                        <input type='text' placeholder='NAME' />
                    </Grid>
                    <Grid item md={6}>
                        <input type='number' placeholder='DATE' />
                    </Grid>
                </Grid>

                <Grid container className={classes.backSide} justify='flex-end' alignItems='flex-end'>
                    <Grid item>
                        <input className={classes.cardCode} type='number' placeholder='CODE' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
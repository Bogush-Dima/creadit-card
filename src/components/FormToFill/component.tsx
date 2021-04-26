import React from 'react'
import {Button, Grid, TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export const FormToFill: React.FC = () => {
    const classes = useStyles()

    return (
        <>
            <form className={classes.form}>
                <TextField label='Number'/>
                <TextField label='Name'/>
                <Grid container className='wrapper'>
                    <TextField label='Date'/>
                    <TextField label='Code'/>
                </Grid>
            </form>
            <Grid container justify='center' alignItems='center'>
                <Button variant="contained" color="primary">Submit</Button>
                <Button variant="contained">Reset</Button>
            </Grid>
        </>
    )
}
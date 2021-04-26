import React from 'react'
import {Grid, TextField} from "@material-ui/core";

export const FormToFill: React.FC = () => {
    return (
        <form>
            <TextField label='Number'/>
            <TextField label='Text'/>
            <Grid container className='wrapper'>
                <TextField label='Date'/>
                <TextField label='Code'/>
            </Grid>
        </form>
    )
}
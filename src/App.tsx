import React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import {useStyles} from "./styles";
import {CardView} from "./components/CardView/component";

export const App: React.FC = () => {
    const classes = useStyles()

    return (
        <CssBaseline>
            <Grid container className={classes.wrapper} justify="center" alignItems="center">
                <Grid container md={4} justify='center' alignItems='center'>
                    <CardView />
                </Grid>
            </Grid>
        </CssBaseline>
    )
}
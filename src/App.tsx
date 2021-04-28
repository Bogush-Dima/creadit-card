import React, {useState} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import {useStyles} from "./styles";
import {CardView} from "./components/CardView/component";
import {FormToFill} from "./components/FormToFill/component";
import {Values} from "./types";

export const App: React.FC = () => {
    const initialFormikValues: Values = {
        cardNumber: null,
        name: null,
        date: null,
        cvv: null,
    }

    const [formikValues, setFormikValues] = useState(initialFormikValues)
    const classes = useStyles()

    return (
        <CssBaseline>
            <Grid container className={classes.wrapper} justify="center" alignItems="center">
                <Grid container md={4} justify='center' alignItems='center'>
                    <CardView formikValues={formikValues} />
                    <FormToFill formikValues={formikValues} setFormikValues={setFormikValues} />
                </Grid>
            </Grid>
        </CssBaseline>
    )
}

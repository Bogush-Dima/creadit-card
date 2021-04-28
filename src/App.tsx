import React, {useState} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import {useStyles} from "./styles";
import {CardView} from "./components/CardView/component";
import {FormToFill} from "./components/FormToFill/component";
import {Values, BlurValues} from "./types";

export const App: React.FC = () => {
    const initialFormikValues: Values = {
        cardNumber: null,
        name: null,
        date: null,
        cvv: null,
    }

    const initialBlurValues: BlurValues = {
        cardNumber: false,
        name: false,
        date: false,
        cvv: false,
    }

    const [formikValues, setFormikValues] = useState(initialFormikValues)
    const [blurValues, setBlurValues] = useState(initialBlurValues)
    const classes = useStyles()

    return (
        <CssBaseline>
            <Grid container className={classes.wrapper} justify="center" alignItems="center">
                <Grid container md={4} justify='center' alignItems='center'>
                    <CardView formikValues={formikValues} blurValues={blurValues}/>
                    <FormToFill initialFormikValues={initialFormikValues} formikValues={formikValues} setFormikValues={setFormikValues} blurValues={blurValues}
                                setBlurValues={setBlurValues}/>
                </Grid>
            </Grid>
        </CssBaseline>
    )
}

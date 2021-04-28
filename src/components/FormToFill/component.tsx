import React from 'react'
import {Button, Grid} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {useStyles} from "./styles";
import {Values} from "./types";

export const FormToFill: React.FC = () => {
    const initialValues: Values = {
        cardNumber: null,
        name: null,
        date: null,
        cvv: null,
    }

    const classes = useStyles()

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
                <Form className={classes.form}>
                    <Field className={classes.longField} type="number" name="cardNumber" placeholder='Card Number'/>
                    <Field className={classes.longField} type="text" name="name" placeholder='Name'/>
                    <Grid container className={classes.fieldContainer} justify='space-between'>
                        <Field className={classes.shortField} type='number' name='date' placeholder='Date'/>
                        <Field className={classes.shortField} type='number' name='cvv' placeholder='CVV'/>
                    </Grid>
                    <Grid container justify='space-around' alignItems='center'>
                        <Button type='submit' variant="contained" color="primary">Submit</Button>
                        <Button variant="contained">Reset</Button>
                    </Grid>
                </Form>
            </Formik>
        </>
    )
}
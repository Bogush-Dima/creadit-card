import React from 'react'
import {Button, Grid} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {useStyles} from "./styles";
import {Props} from "./types";

export const FormToFill: React.FC<Props> = ({formikValues, setFormikValues}: Props) => {
    const classes = useStyles()

    return (
        <>
            <Formik initialValues={formikValues} onSubmit={(values) => console.log(values)}>
                {({handleChange, values}) => {
                    setFormikValues(values)

                    return (
                        <Form className={classes.form}>
                            <Field className={classes.longField} type="number" name="cardNumber" placeholder='Card Number' onChange={handleChange}/>
                            <Field className={classes.longField} type="text" name="name" placeholder='Name' onChange={handleChange}/>
                            <Grid container className={classes.fieldContainer} justify='space-between'>
                                <Field className={classes.shortField} type='number' name='date' placeholder='Date' onChange={handleChange}/>
                                <Field className={classes.shortField} type='number' name='cvv' placeholder='CVV' onChange={handleChange}/>
                            </Grid>
                            <Grid container justify='space-around' alignItems='center'>
                                <Button type='submit' variant="contained" color="primary">Submit</Button>
                                <Button variant="contained">Reset</Button>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}
import React from 'react'
import {Button, Grid} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {useStyles} from "./styles";
import {Props} from "./types";

export const FormToFill: React.FC<Props> = ({
                                                initialFormikValues,
                                                setFormikValues,
                                                setBlurValues
                                            }: Props) => {
    const classes = useStyles()

    return (
        <>
            <Formik initialValues={initialFormikValues} onSubmit={(values) => console.log(values)}>
                {({values, handleChange, handleReset}) => {
                    if (values.name) {
                        values.name = values.name.toUpperCase()
                    }

                    const clickInput = (event: any) => {
                        const inputName = event.target.name
                        setBlurValues((prevState: any) => ({...prevState, [inputName]: true}))
                    }

                    const blurInput = (event: any) => {
                        const inputName = event.target.name
                        setBlurValues((prevState: any) => ({...prevState, [inputName]: false}))
                    }

                    const reset = () => {
                        setFormikValues(initialFormikValues)
                        handleReset()
                    }

                    setFormikValues(values)

                    return (
                        <Form className={classes.form}>
                            <Field className={classes.longField} type="tel" maxLength='16' name="cardNumber"
                                   value={values.cardNumber}
                                   placeholder='Card Number' onChange={handleChange} onFocus={clickInput}
                                   onBlur={blurInput}/>
                            <Field className={classes.longField} type="text" value={values.name} name="name"
                                   placeholder='Name' onChange={handleChange} onFocus={clickInput} onBlur={blurInput}/>
                            <Grid container className={classes.fieldContainer} justify='space-between'>
                                <Field className={classes.shortField} type='number' name='date' placeholder='Date'
                                       onChange={handleChange} onFocus={clickInput} onBlur={blurInput}/>
                                <Field className={classes.shortField} type='tel' maxLength='3' name='cvv'
                                       placeholder='CVV' onChange={handleChange} onFocus={clickInput}
                                       onBlur={blurInput}/>
                            </Grid>
                            <Grid container justify='center' alignItems='center'>
                                <Button className={classes.button} type='submit' variant="contained"
                                        color="primary">Submit</Button>
                                <Button className={classes.button} onClick={reset} variant="contained">Reset</Button>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}
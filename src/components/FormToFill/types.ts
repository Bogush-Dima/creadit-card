export interface Props {
    initialFormikValues: any
    formikValues: any
    setFormikValues: any
    blurValues: any
    setBlurValues: any
}

export interface Values {
    cardNumber: number | null
    name: string | null
    date: number | null
    cvv: number | null
}
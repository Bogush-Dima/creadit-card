import { FormikValues } from 'formik'

export interface Props {
  className: string
  name: string
  label: string
  value: string
  formik: FormikValues
}

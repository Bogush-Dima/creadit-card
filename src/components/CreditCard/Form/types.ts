import { FormikValues } from 'formik'

export interface Props {
  formik: FormikValues
  setFieldInFocus: (fieldName: string) => void
}

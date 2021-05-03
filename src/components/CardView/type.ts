import { FormikProps } from "formik";
import { FormikValues } from "../../types";

export interface Props {
    formik: FormikProps<FormikValues>
    fieldInFocus: string
}
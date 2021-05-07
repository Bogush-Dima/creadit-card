import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  form: {
    marginBottom: '30px',
    width: '500px',
  },
  fieldContainer: {
    marginBottom: '30px',
  },
  longField: {
    width: '100%',
    marginBottom: '15px',
  },
  shortField: {
    width: '100%',
  },
  buttonWrapper: {
    marginTop: '25px',
  },
  button: {
    margin: '0 10px',
    borderRadius: '50px',
    background: 'transparent',
    width: '110px',
  },
  submit: {
    margin: '0 10px',
    borderRadius: '50px',
    background: '#3f51b5',
    width: '110px',
  },
  datePicker: {
    height: '40px',
    width: '195px',
    padding: '18.5px 14px',
    background: 'transparent',
    border: '1px solid #b4b4c4',
    borderRadius: '4px',
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'inline-flex',
    fontSize: '1rem',
    alignItems: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: '1.1876em',
    letterSpacing: '0.00938em',
  },
})

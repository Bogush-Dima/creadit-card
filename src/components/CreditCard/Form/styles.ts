import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  form: {
    marginBottom: "30px",
    width: "500px",
  },
  fieldContainer: {
    marginBottom: "30px",
  },
  longField: {
    width: '100%',
    marginBottom: '15px',
  },
  shortField: {
    width: '48%',
  },
  buttonWrapper: {
      marginTop: '25px',
  },
  button: {
    margin: "0 10px",
    borderRadius: '50px',
    background: 'transparent',
    width: '110px',
  },
  submit: {
    margin: "0 10px",
    borderRadius: '50px',
    background: '#3f51b5',
    width: '110px',
  }
});

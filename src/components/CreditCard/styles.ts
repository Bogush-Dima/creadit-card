import { makeStyles } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

export const useStyles = makeStyles({
  wrapper: {
    minHeight: '100vh',
  },
  background: {
    width: '700px',
    padding: '80px',
    border: '3px solid #0000002b',
    borderRadius: '30px',
    background: '#2519d21c',

    [theme.breakpoints.down('sm')]: {
      width: '95%',
      margin: '0 auto',
      padding: '20px 10px',
    },
  },
  container: {
    width: '400px',

    [theme.breakpoints.down('sm')]: {
      width: '320px',
      margin: '0 auto',
    },
  },
})

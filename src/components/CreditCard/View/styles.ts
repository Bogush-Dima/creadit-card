import { makeStyles } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

export const useStyles = makeStyles({
  card: {
    position: 'relative',
    backgroundImage:
      'url(https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=)',
    padding: '15px',
    borderRadius: '10px',
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    marginBottom: '30px',

    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  logo: {
    position: 'absolute',
    top: 0,
    right: '15px',
    fontSize: '20px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  cardSystem: {
    color: 'white',
  },
  dataWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  cardNumber: {
    fontSize: '20px',
    border: '2px solid #cecece',
    borderRadius: '5px',
    padding: '5px',
    width: '100%',
    textAlign: 'center',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  userName: {
    overflowX: 'auto',
    fontSize: '20px',
    border: '2px solid #cecece',
    borderRadius: '5px',
    padding: '5px 15px',
    width: '230px',
    textAlign: 'center',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
      width: '170px',
    },
  },
  viewDate: {
    border: '2px solid #cecece',
    fontSize: '20px',
    borderRadius: '5px',
    padding: '5px 15px',
    width: '120px',
    textAlign: 'center',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
      width: '70px',
    },
  },
  backSide: {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '15px',
    backgroundImage:
      'url(https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=)',
  },
  cardCode: {
    margin: '30px',
  },
  onFocus: {
    borderColor: '#fffe00',
  },
  onFocusBackSide: {
    display: 'flex',
  },
})

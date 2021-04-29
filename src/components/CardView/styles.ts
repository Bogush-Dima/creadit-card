import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        position: 'relative',
        backgroundImage: 'url(https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=)',
        padding: '15px',
        borderRadius: '10px',
        width: '340px',
        height: '210px',
        overflow: 'hidden',
        marginBottom: '30px',
    },
    logo: {
        height: 0,
        lineHeight: 0,
    },
    cardSystem: {
        color: 'white',
    },
    content: {
        height: '80%',
    },
    cardNumber: {
        fontSize: '20px',
        border: '2px solid #cecece',
        borderRadius: '5px',
        padding: '5px',
        width: '100%',
        textAlign: 'center',
        background: '#ffffffb5',
    },
    userName: {
        border: '2px solid #cecece',
        borderRadius: '5px',
        padding: '5px 15px',
        minWidth: '190px',
        textAlign: 'center',
        background: '#ffffffb5',
    },
    viewDate: {
        border: '2px solid #cecece',
        borderRadius: '5px',
        padding: '5px 15px',
        minWidth: '90px',
        textAlign: 'center',
        background: '#ffffffb5',
    },
    backSide: {
        display: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '15px',
        backgroundImage: 'url(https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=)',
    },
    cardCode: {
        margin: '30px',
    },
    onFocus: {
        borderColor: '#fffe00',
    },
    onFocusBackSide: {
        display: 'flex',
    }
})
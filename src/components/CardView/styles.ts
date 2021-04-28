import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        position: 'relative',
        background: 'gray',
        padding: '15px',
        borderRadius: '10px',
        width: '340px',
        height: '210px',
        overflow: 'hidden',
        marginBottom: '30px',
    },
    logo: {
        width: '90px',
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
    },
    userName: {
        border: '2px solid #cecece',
        borderRadius: '5px',
        padding: '5px 15px',
        minWidth: '190px',
        textAlign: 'center',
    },
    viewData: {
        border: '2px solid #cecece',
        borderRadius: '5px',
        padding: '5px 15px',
    },
    backSide: {
        display: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "#ffa50087",
    },
    cardCode: {
        margin: '30px',
    }
})
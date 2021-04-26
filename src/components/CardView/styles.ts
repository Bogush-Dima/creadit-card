import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        position: 'relative',
        background: 'gray',
        borderRadius: '10px',
        width: '340px',
        height: '210px',
        overflow: 'hidden'
    },
    logo: {
        height: '40px',
        width: '90px'
    },
    content: {
        height: '80%'
    },
    backSide: {
        display: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "#ffa50087"
    },
    cardCode: {
        margin: '30px'
    }
})
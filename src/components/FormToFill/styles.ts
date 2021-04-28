import {makeStyles} from "@material-ui/core";

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
        marginBottom: '10px',
        fontSize: '20px',
        padding: '5px',
        border: '2px solid #8e8e8e',
        borderRadius: '5px',
    },
    shortField: {
        width: '40%',
        fontSize: '20px',
        padding: '5px',
        border: '2px solid #8e8e8e',
        borderRadius: '5px',
    }
})
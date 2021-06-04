import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none'
    },
    toolbar: {
        backgroundColor: 'black'
    },
    img: {
        padding: '5px 0 5px 0',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    iconCart: {
        color: 'white',
        position: 'absolute',    
        borderRadius: theme.shape.borderRadius,
        right: '0',
        padding: '15px 25px',
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        }
    },
    iconMenu: {
        color: 'white',
        position: 'absolute',    
        borderRadius: theme.shape.borderRadius,
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        }
    }
}))
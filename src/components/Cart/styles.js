import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(4),
    marginTop: theme.spacing(10)
  },
  toolbar: theme.mixins.toolbar,
  loading: {
    textAlign: 'center',
    paddingTop: '50px'
  },
  list: {
    position: 'relative',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  info: {
    display: 'flex',
    flexGrow: 1,
    flexFlow: 'row wrap',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  },
  qty: {
    right: '0px'
  }
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  loading: {
    textAlign: 'center',
    paddingTop: '50px'
  },
  grid: {
    position: 'relative',
    padding: '30px',
  }
}));

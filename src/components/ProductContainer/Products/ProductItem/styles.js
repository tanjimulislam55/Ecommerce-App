import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    padding: 'inherit'
    // width: '385px',
  },
  media: {
    height: 0,
    paddingTop: '56%',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '60%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  actionButton: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1f1f1f'
    }
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

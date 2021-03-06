import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appbar: {
      margin: 0,
      overflow: 'hidden'
    },
    iconButton: {
      marginRight: theme.spacing(2),
      background: '#F24506',
      padding: 3
    },
    hide: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      borderRadius: '4px 4px 0 0',
      border: '1px solid ghostwhite',
      padding: '4px 4px',
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    getCoins: {
      display:'-ms-flexbox',
      display: 'flex',
      '-ms-flex-align': 'center',
      alignItems: 'center',
      padding: '7px 16px 7px 12px',
      borderRadius: '9999px',
      color: 'var(--newRedditTheme-bodyText)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      border: '1px solid #ddbd37',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      fontSize: '13px',
      width: 'max-content',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    coinIcon: {
        color: '#ddbd37',
        marginRight: 10,
    },
    getCoinsText: {
      [theme.breakpoints.down('md')]: {
        // display: 'none',
      },
    },
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    mdScreen: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
  },
    gridPost: {
      display: 'flex',
      alignItems: 'center',
    },
    gridItem: {
        margin: '0 10px',
    },
    mainContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'nowrap'
    },
    redditLogoWrapper: {
      margin: '0 10% 0 0',
      display: 'flex',
      alignItems: 'center'
    },
    redditLogo: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      },
    },
    createPost: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      },
    },
    userMenu : {
      width: 'max-content',
      borderRadius: '5px',
      height: '41px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 0,
      marginLeft: '-5px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        border: '1px solid gainsboro',
      },
    },
    tiny: {
      fontSize: '.75rem',
      fontWeight: 500,
      margin: 0,
     },
    tiny2: {
      color: '#a8aaab',
      fontSize: '.75rem',
      margin: 0,
    },
    tinyWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    karma: {
      width: 12,
      margin: 2,
      verticalAlign: 'bottom'
    },
    // search styles
    search: {
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#F6F7F8",
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
  }));
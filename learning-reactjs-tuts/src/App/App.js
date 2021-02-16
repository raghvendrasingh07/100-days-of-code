import "./App.css";
import SideMenu from "../Components/SideMenu";
import {
  Button,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../Components/Header";
import Employee from "../Pages/Employees/Employee";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071F2",
    },
    secondary: {
      main: "#fc4384",
    },
    background: {
      default: "f1f3f6",
    },
    shape: {
      borderRadius: "12px",
    },
  },
  // shape: {
  //   borderRadius: "12px",
  // },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },

    MuiButton: {
      text: {
        background: "#fff",
        borderRadius: "10px",
        border: 0,
        color: "#000",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 22px 40px rgba(255, 105, 135, .3)",
        textTransform: "capitalize",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
    paddingLeft: "320px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employee />
        <Button>Submit</Button>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

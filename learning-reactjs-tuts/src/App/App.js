import "./App.css";
import SideMenu from "../Components/SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";

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
        <PageHeader
          title="This is Page Header"
          subTitle="Page description"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
        Hello This is Poppins
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

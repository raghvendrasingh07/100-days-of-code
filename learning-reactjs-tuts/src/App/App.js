import "./App.css";
import SideMenu from "../Components/SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../Components/Header";

const useStyles = makeStyles({
  appMain: {
    width: "100%",
    paddingLeft: "320px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;

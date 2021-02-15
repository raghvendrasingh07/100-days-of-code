import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    transform: "translateZ(0)",
  },
  searchInput: {
    fontSize: "0.8rem",
    padding: "0px 8px",
    opacity: "0.6",
    "&:hover": {
      background: "#f1f3f6",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid>
              <InputBase
                placeholder="Enter topics"
                startAdornment={<SearchIcon fontSize="small" />}
                className={classes.searchInput}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNone fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutline fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNew fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

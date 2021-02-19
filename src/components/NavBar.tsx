import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {},
    toolbar: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      margin: "0 12px",
    },
    search: {
      transform: "rotate(90deg)",
      marginLeft: 10,
      fontSize: 30,
    },
  })
);

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logo}>
              Tableau
            </Typography>

            <Box display="flex" justifyContent="" alignItems="center">
              <Typography variant="subtitle1" className={classes.title}>
                Gallery
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                Authors
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                Blog
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                Resources
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                Activity
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                About
              </Typography>
              <Button color="secondary" variant="contained">
                Sign In
              </Button>
              <Button color="inherit">Sign Up</Button>
              <SearchIcon className={classes.search} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;

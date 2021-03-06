import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  cart: {
    color: theme.palette.success.main,
    marginLeft: theme.spacing(2),
  },
});

const StyledBadge1 = withStyles((theme) => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function AppAppBar(props) {
  const { classes, count } = props;

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <MuiLink
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
            component={Link}
          >
            {"Test Site"}
          </MuiLink>
          <div className={classes.right}>
            <MuiLink
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/sign-in"
              component={Link}
            >
              {"Sign In"}
            </MuiLink>
            <MuiLink
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/sign-up"
              component={Link}
            >
              {"Sign Up"}
            </MuiLink>

            <IconButton aria-label="cart" className={classes.cart}>
              <StyledBadge1 badgeContent={count} color="primary">
                <ShoppingCartIcon />
              </StyledBadge1>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.placeholder} /> */}
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);

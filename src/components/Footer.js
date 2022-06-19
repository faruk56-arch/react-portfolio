import React from "react";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation showlabel="true" className={classes.bottomNavContainer}>
      <Link target="_blank" href="https://github.com/faruk56-arch"> <BottomNavigationAction icon={<GitHub />} className={classes.root} /></Link>
      <Link target="_blank" href="#"> <BottomNavigationAction icon={<Facebook />} className={classes.root} /></Link>
      <Link target="_blank" href="https://www.linkedin.com/in/faruk-momin-576655a5/"> <BottomNavigationAction icon={<LinkedIn />} className={classes.root} /></Link>
    </BottomNavigation>
  );
};
export default Footer;

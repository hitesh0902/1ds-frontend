import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "15px 0",
    },
    buttons: {
      marginLeft: 15,
      paddingLeft: 12,
      paddingRight: 12,
    },
  })
);

interface SubHeaderProps {}

const SubHeader: React.FC<SubHeaderProps> = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <Box display="flex" alignItems="center">
        <ArrowBackIosIcon color="action" fontSize="small" />
        <Typography variant="body1">Manish Khatre - Profile</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Button
          color="inherit"
          startIcon={<StarBorderIcon />}
          className={classes.buttons}
        >
          Favourite
        </Button>
        <Button
          color="inherit"
          startIcon={<FileCopyOutlinedIcon />}
          className={classes.buttons}
        >
          Make a copy
        </Button>
        <Button
          color="inherit"
          startIcon={<SystemUpdateAltOutlinedIcon />}
          className={classes.buttons}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default SubHeader;

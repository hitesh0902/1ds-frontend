import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "15px 0",
    },
  })
);

interface DashboardDetailsProps {}

const DashboardDetails: React.FC<DashboardDetailsProps> = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <Typography variant="h4">Super Store Dashboard</Typography>
      <Typography variant="h6">Viz Author: Manish khatre</Typography>
      <Typography variant="body1">
        SuperStore Dashboard <span>#Superstore</span>
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">900 Views</Typography>
        <Box display="flex" alignItems="center">
          <StarBorderIcon />
          <Typography variant="body1">0</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardDetails;

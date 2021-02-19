import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "15px 0",
    },
    text: {
      marginBottom: 8,
    },
  })
);

interface MoreDetailsProps {}

const MoreDetails: React.FC<MoreDetailsProps> = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <Typography variant="h6">More Detail</Typography>
      <Container maxWidth="xs">
        <Box display="flex" justifyContent="flex-end">
          <div>
            <Typography variant="body1" className={classes.text}>
              Originally Published:
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Last Updated:
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Workbook Details:
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Metadata:
            </Typography>
          </div>
          <div>
            <Typography variant="body1" className={classes.text}>
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              9 sheets
            </Typography>
            <Typography variant="body1">Sales by</Typography>
            <Typography variant="body1">Sales by Region</Typography>
            <Typography variant="body1">Sales by Segment</Typography>
            <Typography variant="body1">Sales over Time</Typography>
            <Typography variant="body1">Sales by State</Typography>
            <Typography variant="body1">Sales by City</Typography>
            <Typography variant="body1">Sales and Profit Dashboard</Typography>
            <Typography variant="body1">Sales/Profit</Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default MoreDetails;

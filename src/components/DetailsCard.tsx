import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ByTypeChart from "./charts/ByTypeChart";
import ProfitOverTimeChart from "./charts/ProfitOverTimeChart";
import ByCityChart from "./charts/ByCityChart";
import ByStatsChart from "./charts/ByStatsChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    box: {
      marginRight: 40,
    },
    select: {
      marginLeft: 10,
      "& .MuiOutlinedInput-input": {
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    space: {
      padding: "25px 0",
    },
  })
);

interface DetailsCardProps {}

const DetailsCard: React.FC<DetailsCardProps> = () => {
  const classes = useStyles();

  const typeArray = ["sales", "profit"];

  const yearsArray = ["2014", "2015", "2016", "2017"];

  const [salesOrProfit, setSalesOrProfit] = useState<string>(typeArray[0]);
  const [year, setYear] = useState<string>(yearsArray[0]);
  const [infoType, setInfoType] = useState("segment");

  const handleSalesOrProfit = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSalesOrProfit(event.target.value as string);
  };

  const handleYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as string);
  };

  const handleInfoType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInfoType(event.target.value as string);
  };

  return (
    <Card elevation={2} className={classes.root}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" className={classes.box}>
            <Typography variant="body2">Sales | Profit</Typography>
            <Select
              variant="outlined"
              value={salesOrProfit}
              onChange={handleSalesOrProfit}
              className={classes.select}
            >
              {typeArray.map((value) => (
                <MenuItem value={value} key={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box display="flex" alignItems="center" className={classes.box}>
            <Typography variant="body2">Year</Typography>
            <Select
              variant="outlined"
              value={year}
              onChange={handleYear}
              className={classes.select}
            >
              {yearsArray.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>

        <Box className={classes.space}>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={6}>
              <ByTypeChart
                year={year}
                salesOrProfit={salesOrProfit}
                infoType={infoType}
                handleInfoType={handleInfoType}
              />
            </Grid>
            <Grid item xs={6}>
              <ProfitOverTimeChart year={year} salesOrProfit={salesOrProfit} />
            </Grid>
            <Grid item xs={6}>
              <ByStatsChart year={year} salesOrProfit={salesOrProfit} />
            </Grid>
            <Grid item xs={6}>
              <ByCityChart year={year} salesOrProfit={salesOrProfit} />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;

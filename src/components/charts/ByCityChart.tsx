import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Chart from "react-google-charts";
import { HorizontalBar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { selectByCity } from "../../redux/slices/ByCitySlice";
import { colorsArray } from "../../helper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: 80,
      margin: "0 30px",
      "& .MuiOutlinedInput-input": {
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    title: {
      fontWeight: 300,
      marginBottom: 4,
    },
  })
);

interface ByCityChartProps {
  year: string;
  salesOrProfit: string;
}

const ByCityChart: React.FC<ByCityChartProps> = ({ year, salesOrProfit }) => {
  const classes = useStyles();

  const [number, setNumber] = useState(10);

  const allData = useSelector(selectByCity);

  console.log(colorsArray);

  let data: any;
  if (allData[year]) {
    data = allData[year]
      .slice()
      .sort((a: any, b: any) => b[salesOrProfit] - a[salesOrProfit])
      .slice(0, number);
  }

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0) {
      setNumber(value);
    }
  };

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" align="left" className={classes.title}>
          {salesOrProfit} by city
        </Typography>
        <Box>
          <Typography variant="body2" align="center" className={classes.title}>
            Top N Cities
          </Typography>
          <TextField
            // label="Top N Cities"
            type="number"
            variant="outlined"
            className={classes.input}
            value={number}
            onChange={handleNumberChange}
          />
        </Box>
      </Box>
      {data && (
        <HorizontalBar
          data={{
            labels: data.map((type: any) => type["city"]),
            datasets: [
              {
                label: salesOrProfit,
                data: data.map((type: any) => type[salesOrProfit]),
                backgroundColor: colorsArray,

                fill: false,
              },
            ],
          }}
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                      return `${+value / 1000}k`;
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
};

export default ByCityChart;

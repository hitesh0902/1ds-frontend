import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectOverTime } from "../../redux/slices/OverTimeSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 300,
    },
  })
);

interface ProfitOverTimeChartProps {
  year: string;
  salesOrProfit: string;
}

const ProfitOverTimeChart: React.FC<ProfitOverTimeChartProps> = ({
  year,
  salesOrProfit,
}) => {
  const classes = useStyles();

  const data = useSelector(selectOverTime);

  return (
    <div>
      <Typography variant="h6" align="left" className={classes.title}>
        {salesOrProfit} over time
      </Typography>
      {data[year] ? (
        <Line
          data={{
            labels: data[year].map((type: any) => type["month"]),
            datasets: [
              {
                label: salesOrProfit,
                data: data[year].map((type: any) => type[salesOrProfit]),
                backgroundColor: [
                  "rgba(45, 75, 101, 1)",
                  "rgba(45, 75, 101, 0.77)",
                  "rgba(45, 75, 101, 0.44)",
                ],

                fill: false,
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
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
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ProfitOverTimeChart;

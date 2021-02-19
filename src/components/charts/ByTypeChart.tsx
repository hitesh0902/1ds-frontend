import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { HorizontalBar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectByType } from "../../redux/slices/ByTypeSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      margin: "0 15px",
      "& .MuiOutlinedInput-input": {
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    title: {
      fontWeight: 300,
    },
  })
);

interface ByTypeChartProps {
  year: string;
  salesOrProfit: string;
  infoType: string;
  handleInfoType: (event: React.ChangeEvent<{ value: unknown }>) => any;
}

const ByTypeChart: React.FC<ByTypeChartProps> = ({
  year,
  salesOrProfit,
  infoType,
  handleInfoType,
}) => {
  const classes = useStyles();

  const data = useSelector(selectByType);

  // Converting the object into array with keys as value only.
  const infoTypeArray = Object.keys(data);

  return (
    <div>
      {/* "!!" is equivalent to infoTypeArray.length > 0 */}
      {!!infoTypeArray.length && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="body2">Type</Typography>
          <Select
            variant="outlined"
            label="type"
            value={infoType}
            onChange={handleInfoType}
            className={classes.select}
          >
            {infoTypeArray.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
      <Typography variant="h6" align="left" className={classes.title}>
        {salesOrProfit} by
      </Typography>
      {data[infoType] && (
        <HorizontalBar
          data={{
            labels: data[infoType][year].map((type: any) => type[infoType]),
            datasets: [
              {
                label: salesOrProfit,
                data: data[infoType][year].map(
                  (type: any) => type[salesOrProfit]
                ),
                backgroundColor: [
                  "rgba(45, 75, 101, 1)",
                  "rgba(45, 75, 101, 0.77)",
                  "rgba(45, 75, 101, 0.44)",
                ],

                fill: true,
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

export default ByTypeChart;

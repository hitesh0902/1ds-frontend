import React from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { selectByState } from "../../redux/slices/ByStateSlice";

interface ByStatsChartProps {
  year: string;
  salesOrProfit: string;
}

const ByStatsChart: React.FC<ByStatsChartProps> = ({ year, salesOrProfit }) => {
  const values = useSelector(selectByState);

  let data;

  if (values[year]) {
    const newValues = values[year].map((v) => [v.state, v[salesOrProfit]]);
    data = [["States", salesOrProfit], ...newValues];
  }
  //   ["States", "Latitude"],
  //   ["Oklahoma", 36],
  //   ["Angola", -8],

  return (
    <div>
      {data && (
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="GeoChart"
          data={data}
          options={{
            region: "019", // America
            colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
            backgroundColor: "#81d4fa",
            datalessRegionColor: "#f8bbd0",
            defaultColor: "#f5f5f5",
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "4" }}
        />
      )}
    </div>
  );
};

export default ByStatsChart;

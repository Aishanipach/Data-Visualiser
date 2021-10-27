import   "./Chart.css";

import "./ChartBars.css";
import Chartbars from "./ChartBars";

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((dataPoints) => dataPoints.value);
  const totalMax = Math.max(...dataPointvalues); //to pull out each value

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <Chartbars
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;

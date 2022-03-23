import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // dataPointValues is array with only the values extracted by map function below
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // Map rtns array of numbers here
  const totalMaximum = Math.max(...dataPointValues); // max will get 12 arguments b/c of spread operator
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

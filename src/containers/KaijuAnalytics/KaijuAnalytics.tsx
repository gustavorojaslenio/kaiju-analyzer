import Chart from "react-apexcharts";
import { useKaijuAnalytics } from "../../hooks";

export const KaijuAnalytics = () => {
  const { chartData } = useKaijuAnalytics();
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="donut"
      width="100%"
    />
  );
};

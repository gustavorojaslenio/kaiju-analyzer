import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KaijuData } from "../Api/KaijuCRUDService";
import { ApplicationState } from "../redux";
import { getKaijus } from "../redux/kaijuDNA";

interface ChartData {
  options: ApexOptions;
  series: number[];
}

export const useKaijuAnalytics = () => {
  const { kaijus } = useSelector((state: ApplicationState) => state.kaijuDNA);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState<ChartData>({
    options: {},
    series: []
  });

  useEffect(() => {
    dispatch(getKaijus());
  }, [dispatch]);

  useEffect(() => {
    if (!kaijus.length) return;
    const labels: string[] = [],
      series: number[] = [];
    kaijus.forEach((kaijuData: KaijuData) => {
      labels.push(kaijuData.kaijuType);
      series.push(kaijuData.percentage);
    });
    setChartData({
      options: {
        labels
      },
      series
    });
  }, [kaijus]);

  return {
    chartData
  };
};

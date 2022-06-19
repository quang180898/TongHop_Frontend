import { CardNodata } from "components/common/Card";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const ChartPrice = () => {
    const [chartShow, setChartShow] = React.useState({
        series: [], //list series on chart,
        date: [],
    });

    const store = useSelector((state) => state.chartReducer);
    const { totalChart } = store;

    const options = {
        series: chartShow.series,
        options: {
            height: 400,
            type: "line",
            chart: {
                toolbar: {
                    tools: {
                        download: false,
                    },
                },
            },
            zoom: {
                enabled: false,
            },
            colors: ["#9a59dc", "#f06464", "#6bbcd7"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: [1, 1, 2],
                curve: "smooth",
            },
            fill: {
                opacity: [1, 1, 0.2],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.3,
                    opacityFrom: 0.2,
                    opacityTo: 0.24,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%",
                },
            },
            xaxis: {
                categories: chartShow.date,
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: "#9a59dc",
                    },
                    labels: {
                        style: {
                            colors: "#9a59dc",
                        },
                    },
                    title: {
                        text: "VNĐ",
                        style: {
                            color: "#9a59dc",
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            ],
            legend: {
                show: false,
                horizontalAlign: "left",
                offsetX: 40,
                position: "top",
            },
        },
    };

    useEffect(() => {
        if (totalChart) {
            let detail = totalChart.detail;
            if (totalChart.success) {
                let dataPrice = [{ name: "Doanh thu", data: Object.values(detail) }];
                let dataDate = Object.keys(detail);
                console.log(dataDate)
                setChartShow({
                    ...chartShow,
                    series: dataPrice,
                    date: dataDate,
                });
            }
        }
    }, [totalChart]);

    return (
        <Chart
            options={options.options}
            series={options.series}
            type="bar"
            height={430}
        />
    );
};
export default ChartPrice;

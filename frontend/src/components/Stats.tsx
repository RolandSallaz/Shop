import './Stats.scss';
import {Chart} from "react-google-charts";

type Props = {};
export const data = [
    ["Год", "Продажи", "Посетители"],
    ["2021", 1000, 400],
    ["2022", 1170, 460],
    ["2023", 660, 1120],
    ["2024", 1030, 540],
];

export const options = {
    title: "Статистика магазина",
    curveType: "function",
    legend: {position: "bottom"},
    colors: ["#6932a8", "#a8327f"],
    titleTextStyle: {
        color: "white",
        fontName: "Roboto",
        fontSize: 25,
        fontWeight: 600
    },
    backgroundColor: "black",
    hAxis: {
        textStyle: {
            color: "white",
            fontName: "Roboto",
            fontSize: 20,
            fontWeight: 600,
        }
    },
    vAxis: {
        textStyle: {
            fontName: "Roboto",
            fontWeight: 600,
            color: "white",
            fontSize: 20,
        }
    },
    legendTextStyle: {
        color: "white"
    }
};

export function Stats(props: Props) {

    return (
        <main>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </main>
    );
};
import React from "react";
import Chart from "react-apexcharts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart
          type="bar"
          width={600}
          height={600}
          series={[
            {
              name: "company1",
              data: [100, 250, 300, 450, 500],
              color: "#ff0000",
            },
            {
              name: "company2",
              data: [150, 280, 350, 440, 550],
              color: "#dd0",
            },
            {
              name: "company3",
              data: [280, 210, 370, 500, 170],
              color: "#ff00a0",
            },
            {
              name: "company4",
              data: [370, 260, 390, 600, 280],
              color: "#0d25d6",
            },
          ]}
          options={{
            chart: { stacked: true, background: "#00f8" },
            plotOptions: {
              bar: {
                borderRadius: 14,
                columnWidth: 60,
                dataLabels: {
                  orientation: "horizontal",
                },
              },
            },
            noData: {
              text: "empty chart!!",
              style: {
                fontSize: 30,
                color: "#0f00",
              },
            },
            theme: { mode: "dark" },
            tooltip: { followCursor: true },
            dataLabels: {
              formatter: (val) => {
                return `$${val}`;
              },
              style: {
                colors: ["#f00", "#fff"],
                fontSize: 16,
              },
            },
            xaxis: {
              tickPlacement: "on",
              categories: ["Jan", "Feb", "March", "April", "May", "Jun"],
              title: {
                text: "Months",
                style: {
                  color: "#0f0",
                },
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `$${val}`;
                },

                style: {
                  colors: ["#ff0"],
                },
              },
              title: {
                text: "Amount",
                style: {
                  color: "#0f0",
                },
              },
            },
            legend: {
              show: true,
              position: "bottom",
            },
            title: {
              text: "Bar chat",
              style: {
                fontSize: 30,
              },
            },
            subtitle: {
              text: "this chat shows revenue data of months",
              style: { color: "#f0f", fontSize: 18 },
            },
            grid: {
              borderColor: "#0f0",
            },
            // colors: ["#ff0000"],
          }}
        ></Chart>

        <Chart
          type="pie"
          width={600}
          height={600}
          series={[370, 260, 390, 600, 280]}
          options={{
            labels: ["jan", "feb", "march", "april", "may"],
            tooltip: {
              y: {
                formatter: (val) => {
                  return `$${val}`;
                },
              },
            },
            title: {
              text: "Pie chart",
              style: {
                fontSize: 25,
                color: "#0f0",
              },
            },
            colors: ["#ff0", "#f00", "#f0d", "#0f0", "#0ad"],
          }}
        ></Chart>
      </header>
    </div>
  );
}

export default App;

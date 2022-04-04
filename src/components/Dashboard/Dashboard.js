import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  const [pieChart, setPieChart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setPieChart(data));
  }, []);

  return (
    <section>
      <div className="container mt-5">
        <LineChart width={750} height={450} data={chart} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <Line dataKey={"investment"}></Line>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
      </div>
      <div className="container mt-5">
        <AreaChart
          width={750}
          height={450}
          data={pieChart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#006266"
            fill="#A3CB38"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#833470"
            fill="#6F1E51"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stackId="1"
            stroke="#1289A7"
            fill="#A3CB38"
          />
          <Area
            type="monotone"
            dataKey="month"
            stackId="1"
            stroke="#006266"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
    </section>
  );
};

export default Dashboard;

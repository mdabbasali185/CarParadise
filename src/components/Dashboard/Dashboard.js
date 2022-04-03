import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return (
    <div className="container mt-5">
      <LineChart width={750} height={450} data={chart}>
        <Line dataKey={"investment"}></Line>
        <Line dataKey={"revenue"}></Line>
        <Line dataKey={"sell"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;

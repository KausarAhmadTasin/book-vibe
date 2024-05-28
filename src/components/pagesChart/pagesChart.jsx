import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomBar = (props) => {
  const { fill, x, y, width, height, value } = props;
  const path = `M${x},${y + height} L${x + width / 2},${y} L${x + width},${
    y + height
  } Z`;
  return (
    <g>
      <path d={path} fill={fill} />
      <text
        x={x + width / 2}
        y={y - 10}
        textAnchor="middle"
        fill={fill}
        fontSize={16}
      >
        {value}
      </text>
    </g>
  );
};

const CustomShapeBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../../public/books.json")
      .then((res) => res.json())
      .then((books) => {
        // Transform the data to fit the chart's requirements
        const transformedData = books.map((book) => ({
          name: book.book_name,
          value: book.value, // Assuming you have a 'value' property in your JSON data
          fill: book.fill || "#0088FE", // Default color if fill is not provided
        }));
        setData(transformedData);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          shape={<CustomBar />}
          label={{ position: "top" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomShapeBarChart;

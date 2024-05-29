import { useState, useEffect } from "react";
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
      <text x={x + width / 2} textAnchor="middle" fill={fill} fontSize={16}>
        {value}
      </text>
    </g>
  );
};

const CustomShapeBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((books) => {
        const transformedData = books.map((book) => ({
          name: book.book_name,
          value: book.total_pages,
          fill: book.fill || "#0088FE",
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <ResponsiveContainer
      className="mt-14 work-sans-font"
      width="100%"
      height={400}
    >
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

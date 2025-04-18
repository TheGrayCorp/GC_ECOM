import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const BuyerProfileChart = () => {
  const data = [
    {
      name: "Male",
      value: 540,
    },
    {
      name: "Female",
      value: 620,
    },
    {
      name: "Other",
      value: 210,
    },
  ];
  const RADIAN = Math.PI / 180;
  const COLORS = ["#00CED1", "#FFBB28", "#F0E68C"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-[400px] h-[400px] bg-primaryLight rounded-sm flex flex-col p-5">
      <strong className="text-xl text-darkText font-popins">
        Buyer Profile
      </strong>
      <div className="w-full mt-3 text-sm flex-1 font-popins">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfileChart;

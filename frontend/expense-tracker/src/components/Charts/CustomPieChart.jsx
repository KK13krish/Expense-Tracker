import React from "react";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor,
}) => {

    console.log("showTextAnchor:", showTextAnchor);
    console.log("label:", label);
    console.log("totalAmount:", totalAmount);
    console.log("data:", data);

    return (
    <ResponsiveContainer width="100%" height={380}>
        <PieChart>
            <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                innerRadius={90}
                labelLine={false}
                minAngle={5}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />

            {showTextAnchor && (
                <>
                    <text
                        x="50%"
                        y="50%"
                        dy={-10}
                        textAnchor="middle"
                        fill="#666"
                        fontSize="14px"
                    >
                        {label}
                    </text>
                    <text
                        x="50%"
                        y="50%"
                        dy={20}
                        textAnchor="middle"
                        fill="#333"
                        fontSize="24px"
                        fontWeight="bold"
                    >
                        {totalAmount}
                    </text>
                </>
            )}
        </PieChart>
    </ResponsiveContainer>
    );
};

export default CustomPieChart;
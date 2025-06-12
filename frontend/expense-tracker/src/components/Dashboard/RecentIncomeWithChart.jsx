import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
import { useState } from "react";
import { useEffect } from "react";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6", "#10B981", "#F59E0B", "#EC4899", "#6366F1", "#06B6D4", "#84CC16", "#F97316", "#8B5CF6", "#EF4444" ];

const RecentIncomeWithChart = ({ data, totalIncome }) => {

    console.log("🔍 COMPONENT RECEIVED:");
    console.log("Data items:", data?.length);
    console.log("Data content:", data?.map(item => `${item.source}: $${item.amount}`));
    console.log("Total income:", totalIncome);

    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount,
        }));

        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return () => {};
    }, [data]);

    return (
        <div className="card">
            <div className="flex items-center justify-between ">
                <h5 className="text-lg">Last 60 Days Income</h5>
                <p className="text-lg font-semibold">Total Income: ${totalIncome}</p>
            </div>

            <CustomPieChart
                data={chartData}
                label="Total Income"
                totalAmount={`$${totalIncome}`}
                showTextAnchor
                colors={COLORS}
            />
        </div>
    )
}

export default RecentIncomeWithChart
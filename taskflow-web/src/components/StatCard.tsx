import React from "react";
import { Card } from "antd";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  extra?: React.ReactNode;
}

const StatCard = ({ title, value, description, icon }: StatCardProps) => {
  return (
    <Card className="bg-gray-950! border-gray-950! rounded-xl overflow-hidden [&_.ant-card-body]:rounded-xl [&_.ant-card-body]:bg-gray-900! [&_.ant-card-body]:p-6">
      <div className="flex flex-col space-y-4 h-full">
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-sm text-gray-400">{title}</h3>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-teal-400">{icon}</div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;

import React from "react";

interface PricingGoalCardProps {
  title: string;
  description: string;
}

const PricingGoalCard = ({ title, description }: PricingGoalCardProps) => {
  return (
    <div className="w-full p-6 rounded-2xl border bg-card flex flex-col justify-between text-card-foreground shadow-md transition hover:shadow-lg text-center">
      <h3 className="text-[3rem] tracking-[-0.08em] leading-none font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PricingGoalCard;

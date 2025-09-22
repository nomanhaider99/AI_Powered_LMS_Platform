import React from "react";

interface AgentCardProps {
  name: string;
  image: React.ReactElement;
  description: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-400 via-orange-300 to-amber-300/80 dark:from-rose-600 dark:via-orange-500 dark:to-amber-500 shadow-inner">
            {image}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {name}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;

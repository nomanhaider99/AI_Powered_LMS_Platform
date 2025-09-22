"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const navigationItems = [
  {
    name: "Features",
    href: "/features",
    description: "[0]",
  },
  {
    name: "AI Agents",
    href: "/ai-agents",
    description: "[1]",
  },
  {
    name: "Pricing",
    href: "/pricing",
    description: "[2]",
  },
  {
    name: "Contact",
    href: "/reach-us",
    description: "[3]",
  },
];

export const Skiper58 = () => {
  return (
    <ul className="bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm">
      {navigationItems.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={index}
        >
          <div className="relative flex items-start">
            <Link href={item.href}>
              <TextRoll
                center
                className="md:text-[3rem] text-[2.3rem] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-[3.8rem]"
              >
                {item.name}
              </TextRoll>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export { TextRoll };

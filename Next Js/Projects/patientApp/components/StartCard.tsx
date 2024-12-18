import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { number } from "zod";

interface StartCardProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}
const StartCard = ({ count = 0, label, icon, type }: StartCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          height={32}
          width={32}
          alt={label}
          className="size-8 w-fit"
        />
        <h2 className="text-white text-32-bold">{count}</h2>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StartCard;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
interface ProjectLayoutProps {
  name: string;
  description: string;
  date: string | Date;
  demoLink: string;
}
const NavLink = motion.create(Link);

const ProjectLayout:React.FC<ProjectLayoutProps> = ({ name, description, date, demoLink }) => {
  const truncateText = (text:string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-xs xs:text-sm md:text-base flex items-center justify-center w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block ">
          {" "}
          {truncateText(description, 80)}
        </p>
      </div>
      <div className="flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted self-end"></div>
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};

export default ProjectLayout;

"use client";

import { useState } from "react";
import useRoutes from "@/hooks/useRoutes";
import DesktopItem from "./DesktopItem";

export default function DesktopSidebar() {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="justify-between hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r lg:pb-4 lg:flex lg:flex-col">
      <nav className="flex flex-col justify-between mt-4">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

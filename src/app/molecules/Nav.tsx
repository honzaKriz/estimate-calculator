"use client";

import React from "react";
import { useTheme } from "next-themes";

import { cn } from "@/app/utils/lib/utils";

const Nav = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  let theme = "light";
  if (isDark) {
    theme = "dark";
  } else {
    theme = "light";
  }

  function changeTheme() {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <header className={cn("grid place-items-center")}>
      <nav className={cn("place-self-end space-x-2")}>
        <div className={cn("rounded-full bg-slate-600 absolute top-4 right-4")}>
          <p className={cn("p-2 text-lime-500")}>1/3</p>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

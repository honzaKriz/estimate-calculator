"use client";

import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

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
        <Switch id="dark-mode" checked={isDark} onCheckedChange={changeTheme} />
        <Label style={{ verticalAlign: "text-top" }} htmlFor="dark-mode">
          Dark mode
        </Label>
      </nav>
    </header>
  );
};

export default Nav;

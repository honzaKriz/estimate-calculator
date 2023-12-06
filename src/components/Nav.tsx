"use client";

import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";

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
    <header>
      <nav>
        <Switch id="dark-mode" checked={isDark} onCheckedChange={changeTheme} />
        <Label htmlFor="dark-mode">Dark mode</Label>
      </nav>
    </header>
  );
};

export default Nav;

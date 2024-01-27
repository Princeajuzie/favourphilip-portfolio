"use client";

import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children} <Analytics /></ThemeProvider>;
}

export default Layout;

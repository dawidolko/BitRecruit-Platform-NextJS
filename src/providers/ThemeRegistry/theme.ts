"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";
import { inter } from "@/app/fonts";

const myColor: MantineColorsTuple = [
  "#fff7ed",
  "#ffedd5",
  "#fed7aa",
  "#fdba74",
  "#fb923c",
  "#f97316",
  "#ea580c",
  "#c2410c",
  "#9a3412",
  "#7c2d12",
];

const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  primaryColor: "main",
  colors: {
    main: myColor,
  },
});

export default theme;

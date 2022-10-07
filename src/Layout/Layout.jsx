import React from "react";
import FooterTheme from "./FooterTheme/FooterTheme";
import HeaderTheme from "./HeaderTheme/HeaderTheme";

export default function Layout({ Component }) {
  return (
    <div className="h-screen">
      <HeaderTheme />
      <div>{<Component />}</div>
      <FooterTheme />
    </div>
  );
}

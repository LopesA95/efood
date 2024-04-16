// Tag/index.tsx
import React from "react";
import { TagContainer } from "./styles";

export interface TagProps {
  children: string;
  style?: React.CSSProperties;
  size?: "small" | "medium";
  colortext: "primary" | "secondary";
}

export const Tag: React.FC<TagProps> = ({
  children,
  style = {},
  size = "medium",
  colortext,
}) => (
  <TagContainer colortext={colortext} size={size} style={style}>
    {children}
  </TagContainer>
);

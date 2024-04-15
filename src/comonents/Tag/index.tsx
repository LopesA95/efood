import { TagContainer } from "./styles";

export type Props = {
  children: string;
  style?: React.CSSProperties;
  size?: "small" | "medium";
  colorText: "primary" | "secondary";
};

export const Tag = ({ children, style, size, colorText }: Props) => (
  <div>
    <TagContainer colorText={colorText} size={size} style={style}>
      {children}
    </TagContainer>
  </div>
);

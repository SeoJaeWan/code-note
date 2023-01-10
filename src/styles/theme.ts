export const color = {
  origin: {
    primary: "#2C3E50",
    secondary: "#40407A",
    error: "#FF5252",
    success: "32FF7E",
    background: "#FFFFFF",
    offsetBackground: "#F8F8F8",
    line: "#D7D7D7",
    placeholder: "#BBBBBB",
    black: "#222222",
    gray1: "#F1F2F6",
    gray2: "#DFE4EA",
    gray3: "#CED6E0",
  },
  dark: {
    primary: "#FFFFFF",
  },
};

export const font = {
  family: '"Noto Sans KR", sans-serif !important',
  size: {
    lg: "24px",
    md: "18px",
    sm: "16px",
    xs: "12px",
  },
  weight: {
    bolder: "900",
    bold: "700",
    medium: "500",
    normal: "400",
    light: "300",
  },
};

export const device = {
  mobileLength: "575.98px", // 스마트폰 세로
  mobileWidth: "767.98px", // 스마트폰 가로
  tablet: "991.98px", // 타블렛
};

export const media = {
  mobileLength: `@media screen and (max-width: ${device.mobileLength})`,
  mobileWidth: `@media screen and (max-width: ${device.mobileWidth})`,
  tablet: `@media screen and (max-width: ${device.tablet})`,
};

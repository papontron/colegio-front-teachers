type HSLA = `hsl(${number},${number}%,${number}%,${number})`;
type HSVA = `hsv(${number},${number}%,${number}%,${number})`;
type RGBA = `rgba(${number},${number},${number},${number})`;
type HEX = `#${number}`;
export type CssColor = HSLA | HSVA | RGBA | HEX;

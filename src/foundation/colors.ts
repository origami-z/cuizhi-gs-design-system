export const addAlpha = (baseColor: string, alpha: number): string => {
  if (baseColor.startsWith("#")) {
    const rgb = hexToRgb(baseColor);
    if (rgb) {
      return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha.toFixed(2)})`;
    } else {
      return "#FF1493"; // deeppink
    }
  } else {
    const rgb = baseColor.match(/\d+/g);
    if (rgb?.length === 3) {
      return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha.toFixed(2)})`;
    } else {
      return "#FF1493"; // deeppink
    }
  }
};

function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export const paletteColors = {
  whiteColor: "#ffffff",
  blackColor: "#000000",
  transparentColor: "transparent",
  
  gray010Color: "#F2F5F7",
  gray020Color: "#DCE3E8",
  gray030Color: "#C1CCD6",
  gray040Color: "#9FB1BD",
  gray050Color: "#7A909E",
  gray060Color: "#5B7282",
  gray070Color: "#3E5463",
  gray080Color: "#2A3F4D",
  gray090Color: "#1C2B36",
  gray100Color: "#0E171F",
  
  red010Color: "#FCF3F2",
  red020Color: "#FADCD9",
  red030Color: "#FABBB4",
  red040Color: "#FC9086",
  red050Color: "#FA5343",
  red060Color: "#D91F11",
  red070Color: "#A1160A",
  red080Color: "#75160C",
  red090Color: "#4F150F",
  red100Color: "#24120C",
  
  orange010Color: "#FCF2EB",
  orange020Color: "#FCDDC7",
  orange030Color: "#FCBC97",
  orange040Color: "#FC9162",
  orange050Color: "#E86427",
  orange060Color: "#BF4815",
  orange070Color: "#8F3415",
  orange080Color: "#632B17",
  orange090Color: "#402117",
  orange100Color: "#1F1410",
  
  yellow010Color: "#FAF6CF",
  yellow020Color: "#F7E379",
  yellow030Color: "#F5C518",
  yellow040Color: "#D9A514",
  yellow050Color: "#B3870E",
  yellow060Color: "#946613",
  yellow070Color: "#70491C",
  yellow080Color: "#54341F",
  yellow090Color: "#38251B",
  yellow100Color: "#1C1613",
  
  lime010Color: "#EBF7DA",
  lime020Color: "#D5F0B1",
  lime030Color: "#AAD971",
  lime040Color: "#78BF39",
  lime050Color: "#52A31D",
  lime060Color: "#3C7D0E",
  lime070Color: "#2E5C0E",
  lime080Color: "#254211",
  lime090Color: "#1C2E10",
  lime100Color: "#121A0D",
  
  green010Color: "#EBF7ED",
  green020Color: "#C7EBD1",
  green030Color: "#88DBA8",
  green040Color: "#43C478",
  green050Color: "#16A163",
  green060Color: "#077D55",
  green070Color: "#075E45",
  green080Color: "#094536",
  green090Color: "#092E25",
  green100Color: "#081A15",
  
  teal010Color: "#EBF5F4",
  teal020Color: "#BEEBE7",
  teal030Color: "#86D9D4",
  teal040Color: "#4EBFB9",
  teal050Color: "#279C9C",
  teal060Color: "#167B7D",
  teal070Color: "#155C5E",
  teal080Color: "#124241",
  teal090Color: "#102E2D",
  teal100Color: "#0C1A19",
  
  turquoise010Color: "#EBF5F4",
  turquoise020Color: "#C7E8ED",
  turquoise030Color: "#81D8E6",
  turquoise040Color: "#45BCD1",
  turquoise050Color: "#159AB3",
  turquoise060Color: "#067A91",
  turquoise070Color: "#09596B",
  turquoise080Color: "#0C424D",
  turquoise090Color: "#102D33",
  turquoise100Color: "#0F181A",
  
  aqua010Color: "#EBF3F7",
  aqua020Color: "#C9E7F5",
  aqua030Color: "#8BD3F7",
  aqua040Color: "#48B8F0",
  aqua050Color: "#1195D6",
  aqua060Color: "#0073BA",
  aqua070Color: "#08548A",
  aqua080Color: "#0E3D66",
  aqua090Color: "#0C2B45",
  aqua100Color: "#0B1724",
  
  blue010Color: "#F0F4FA",
  blue020Color: "#D4E4FA",
  blue030Color: "#ADCCF7",
  blue040Color: "#75B1FF",
  blue050Color: "#3D8DF5",
  blue060Color: "#186ADE",
  blue070Color: "#0D4EA6",
  blue080Color: "#103A75",
  blue090Color: "#11294D",
  blue100Color: "#0D1826",
  
  ultramarine010Color: "#F2F3FA",
  ultramarine020Color: "#DEE0FA",
  ultramarine030Color: "#C2C7FC",
  ultramarine040Color: "#A0A7FA",
  ultramarine050Color: "#7681FC",
  ultramarine060Color: "#545FE8",
  ultramarine070Color: "#3A45B0",
  ultramarine080Color: "#2F337D",
  ultramarine090Color: "#23254D",
  ultramarine100Color: "#141429",
  
  purple010Color: "#F7F2FC",
  purple020Color: "#EADCFC",
  purple030Color: "#DABEFA",
  purple040Color: "#C89AFC",
  purple050Color: "#AC71F0",
  purple060Color: "#8F49DE",
  purple070Color: "#6B30AB",
  purple080Color: "#4C277D",
  purple090Color: "#331F4D",
  purple100Color: "#1C1229",
  
  pink010Color: "#FCF0F8",
  pink020Color: "#F7DAED",
  pink030Color: "#F7B7E2",
  pink040Color: "#FA87D4",
  pink050Color: "#ED4CB7",
  pink060Color: "#CC1D92",
  pink070Color: "#961574",
  pink080Color: "#6B155A",
  pink090Color: "#47153F",
  pink100Color: "#241020",
  
  amber010Color: "#faf6cf",
  amber020Color: "#f7e379",
  amber030Color: "#f5c518",
  amber040Color: "#d9a514",
  amber050Color: "#b3870e",
  amber060Color: "#946613",
  amber070Color: "#70491c",
  amber080Color: "#54341f",
  amber090Color: "#38251b",
  amber100Color: "#1c1613",
  slate010Color: "#f2f4f7",
  slate020Color: "#dfe2eb",
  slate030Color: "#c5cad9",
  slate040Color: "#a7adc2",
  slate050Color: "#838ca6",
  slate060Color: "#656e8a",
  slate070Color: "#47516e",
  slate080Color: "#313b57",
  slate090Color: "#202842",
  slate100Color: "#101529",
};

export const brandTokens = {
  gsBrand: "#7399C6",
  globalHeader: paletteColors.blue090Color,
};

export const surfaceTokens = {
  surfacePrimary: paletteColors.whiteColor,
  surfaceSecondary: paletteColors.gray010Color,
  surfaceTertiary: paletteColors.gray020Color,
  surfaceModerate: paletteColors.gray030Color,
  surfaceBold: paletteColors.gray040Color,
  surfaceStrong: paletteColors.gray060Color,
  surfaceContrast: paletteColors.gray090Color,
  surfaceOverlay: addAlpha(paletteColors.gray090Color, 0.8),
};

export const borderTokens = {
  borderMinimal: paletteColors.gray020Color,
  borderSubtle: paletteColors.gray030Color,
  borderModerate: paletteColors.gray040Color,
  borderBold: paletteColors.gray060Color,
  borderContrast: paletteColors.gray090Color,
};

export const buttonTokens = {
  buttonPrimary: paletteColors.blue060Color,
  buttonSecondary: paletteColors.gray020Color,
  buttonTertiary: paletteColors.transparentColor,
  buttonDestructive: paletteColors.red060Color,
  buttonPrimaryMinimal: paletteColors.transparentColor,
  buttonSecondaryMinimal: paletteColors.transparentColor,
  buttonDestructiveMinimal: paletteColors.transparentColor,
  buttonTextPrimary: paletteColors.whiteColor,
  buttonTextSecondary: paletteColors.gray090Color,
  buttonTextTertiary: paletteColors.gray070Color,
  buttonTextDestructive: paletteColors.whiteColor,
  buttonTextPrimaryMinimal: paletteColors.blue060Color,
  buttonTextSecondaryMinimal: paletteColors.gray090Color,
  buttonTextDestructiveMinimal: paletteColors.red060Color,
};

export const textTokens = {
  textPrimary: paletteColors.gray090Color,
  textSecondary: paletteColors.gray070Color,
  textTertiary: paletteColors.gray040Color,
  textLink: paletteColors.blue060Color,
  textDestructive: paletteColors.red060Color,
  textReversed: paletteColors.whiteColor,
};

export const iconTokens = {
  iconAction: paletteColors.blue060Color,
  iconPrimary: paletteColors.gray070Color,
  iconSecondary: paletteColors.gray040Color,
  iconReversed: paletteColors.whiteColor,
  iconContrast: paletteColors.blackColor,
};

export const formTokens = {
  formInputBorder: paletteColors.gray040Color,
  formInputBackground: paletteColors.whiteColor,
};

export const statusTokens = {
  statusErrorNone: paletteColors.gray060Color,
  statusErrorBold: paletteColors.red060Color,
  statusSuccessBold: paletteColors.green060Color,
  statusWarningBold: paletteColors.yellow030Color,
  statusInformationBold: paletteColors.blue060Color,
  statusWarningIcon: paletteColors.orange050Color,
  statusNoneSubtle: paletteColors.gray020Color,
  statusErrorSubtle: paletteColors.red020Color,
  statusSuccessSubtle: paletteColors.green020Color,
  statusWarningSubtle: paletteColors.yellow010Color,
  statusInformationSubtle: paletteColors.blue020Color,
};

export const tagTokens = {
  tagMinimal: paletteColors.transparentColor,
  tagSubtle: paletteColors.blue020Color,
  tagBold: paletteColors.blue060Color,
  tagTextMinimal: paletteColors.gray070Color,
  tagTextSubtle: paletteColors.blue070Color,
  tagTextBold: paletteColors.whiteColor,
};

export const gridTokens = {
  gridColumnHeaderDefault: paletteColors.gray010Color,
  gridRowDefault: paletteColors.whiteColor,
  gridRowAlternative: paletteColors.gray010Color,
  gridRowSectionMinimal: paletteColors.gray020Color,
  gridRowSectionBold: paletteColors.gray060Color,
  gridRowSectionContrast: paletteColors.gray080Color,
  gridBidDefault: paletteColors.blue030Color,
  gridBidDepth1: paletteColors.blue020Color,
  gridBidDepth2: paletteColors.blue010Color,
  gridBidRowHover: addAlpha(paletteColors.blue060Color, 0.2),
  gridBidCellHover: paletteColors.blue060Color,
  gridAskDefault: paletteColors.red030Color,
  gridAskDepth1: paletteColors.red020Color,
  gridAskDepth2: paletteColors.red010Color,
  gridAskRowHover: addAlpha(paletteColors.red060Color, 0.2),
  gridAskCellHover: paletteColors.red060Color,
  gridCellWarningDefault: paletteColors.yellow010Color,
  gridCellWarningDepth1: paletteColors.yellow020Color,
  gridCellErrorDefault: paletteColors.red020Color,
  gridCellErrorDepth1: paletteColors.red030Color,
  gridCellSuccessDefault: paletteColors.green010Color,
  gridCellSuccessDepth1: paletteColors.green020Color,
};

export const hoverTokens = {
  buttonPrimaryHover: "#1762CB", // Blue 60 and Gray 100 @10%
  buttonSecondaryHover: "#C7CFD4", // Gray 20 and Gray 100 @10%
  buttonTertiaryHover: addAlpha(paletteColors.gray040Color, 0.1),
  buttonDestructiveHover: "#C51E12", // Red 60 and Gray 100 @10%
  buttonMinimalPrimaryHover: addAlpha(paletteColors.blue060Color, 0.1),
  buttonMinimalSecondaryHover: addAlpha(paletteColors.gray060Color, 0.2),
  buttonMinimalDestructiveHover: addAlpha(paletteColors.red060Color, 0.1),
  textLinkHover: paletteColors.blue070Color,
  surfaceMinimalHover: addAlpha(paletteColors.gray040Color, 0.1),
  surfaceSubtleHover: addAlpha(paletteColors.gray040Color, 0.2),
  surfaceModerateHover: addAlpha(paletteColors.gray040Color, 0.4),
  surfaceBoldHover: addAlpha(paletteColors.gray040Color, 0.6),
  surfaceContrastHover: paletteColors.gray080Color,
  borderMinimalHover: paletteColors.gray030Color,
  borderSubtleHover: paletteColors.gray040Color,
  borderModerateHover: paletteColors.gray050Color,
  borderBoldHover: paletteColors.gray070Color,
  borderContrastHover: paletteColors.gray100Color,
};

export const selectedTokens = {
  backgroundSubtleSelected: addAlpha(paletteColors.blue060Color, 0.2),
  backgroundContrastSelected: paletteColors.blue060Color,
  buttonPrimarySelected: "#1659B8", // Blue 60 and Gray 100 @20%
  buttonSecondarySelected: "#B3BAC0", // Gray 20 and Gray 100 @20%
  buttonTertiarySelected: addAlpha(paletteColors.gray040Color, 0.2),
  buttonDestructiveSelected: "#B01D14", // Red 60 and Gray 100 @20%
  buttonMinimalPrimarySelected: addAlpha(paletteColors.blue060Color, 0.2),
  buttonMinimalSecondarySelected: addAlpha(paletteColors.gray060Color, 0.2),
  buttonMinimalDestructiveSelected: addAlpha(paletteColors.red060Color, 0.2),
  textSubtleSelected: paletteColors.blue070Color,
  textContrastSelected: paletteColors.whiteColor,
};

export const disabledTokens = {
  backgroundDisabled: addAlpha(paletteColors.gray060Color, 0.1),
  foregroundDisabled: paletteColors.gray030Color,
  reversedDisabled: addAlpha(paletteColors.whiteColor, 0.6), //FDFDFD / 253, 253, 253 / White @60%
  textDisabled: addAlpha(paletteColors.gray060Color, 0.4),
};

export const focusTokens = {
  borderFocus: paletteColors.blue060Color,
  backgroundFocus: addAlpha(paletteColors.gray040Color, 0.2),
};

export const colorRampsBoldTokens = {
  grayRampBoldBackground: paletteColors.gray060Color,
  redRampBoldBackground: paletteColors.red060Color,
  orangeRampBoldBackground: paletteColors.orange050Color,
  yellowRampBoldBackground: paletteColors.yellow030Color,
  limeRampBoldBackground: paletteColors.lime060Color,
  greenRampBoldBackground: paletteColors.green060Color,
  tealRampBoldBackground: paletteColors.teal060Color,
  turquoiseRampBoldBackground: paletteColors.turquoise060Color,
  aquaRampBoldBackground: paletteColors.aqua070Color,
  blueRampBoldBackground: paletteColors.blue060Color,
  ultramarineRampBoldBackground: paletteColors.ultramarine060Color,
  purpleRampBoldBackground: paletteColors.purple060Color,
  pinkRampBoldBackground: paletteColors.pink060Color,
};

export const colorRampsSubtleTokens = {
  grayRampSubtleBackground: addAlpha(paletteColors.gray040Color, 0.3),
  redRampSubtleBackground: addAlpha(paletteColors.red040Color, 0.3),
  orangeRampSubtleBackground: addAlpha(paletteColors.orange040Color, 0.3),
  yellowRampSubtleBackground: addAlpha(paletteColors.yellow020Color, 0.3),
  limeRampSubtleBackground: addAlpha(paletteColors.lime040Color, 0.3),
  greenRampSubtleBackground: addAlpha(paletteColors.green040Color, 0.3),
  tealRampSubtleBackground: addAlpha(paletteColors.teal040Color, 0.3),
  turquoiseRampSubtleBackground: addAlpha(paletteColors.turquoise040Color, 0.3),
  aquaRampSubtleBackground: addAlpha(paletteColors.aqua040Color, 0.3),
  blueRampSubtleBackground: addAlpha(paletteColors.blue040Color, 0.3),
  ultramarineRampSubtleBackground: addAlpha(
    paletteColors.ultramarine040Color,
    0.3
  ),
  purpleRampSubtleBackground: addAlpha(paletteColors.purple040Color, 0.3),
  pinkRampSubtleBackground: addAlpha(paletteColors.pink040Color, 0.3),
};

export const colorRampsTextBoldTokens = {
  grayRampBoldText: paletteColors.whiteColor,
  redRampBoldText: paletteColors.whiteColor,
  orangeRampBoldText: paletteColors.whiteColor,
  yellowRampBoldText: paletteColors.gray090Color,
  limeRampBoldText: paletteColors.whiteColor,
  greenRampBoldText: paletteColors.whiteColor,
  tealRampBoldText: paletteColors.whiteColor,
  turquoiseRampBoldText: paletteColors.whiteColor,
  aquaRampBoldText: paletteColors.whiteColor,
  blueRampBoldText: paletteColors.whiteColor,
  ultramarineRampBoldText: paletteColors.whiteColor,
  purpleRampBoldText: paletteColors.whiteColor,
  pinkRampBoldText: paletteColors.whiteColor,
};

export const colorRampsTextSubtleTokens = {
  grayRampSubtleText: paletteColors.gray080Color,
  redRampSubtleText: paletteColors.red060Color,
  orangeRampSubtleText: paletteColors.orange060Color,
  yellowRampSubtleText: paletteColors.gray090Color,
  limeRampSubtleText: paletteColors.lime070Color,
  greenRampSubtleText: paletteColors.green070Color,
  tealRampSubtleText: paletteColors.teal070Color,
  turquoiseRampSubtleText: paletteColors.turquoise070Color,
  aquaRampSubtleText: paletteColors.aqua070Color,
  blueRampSubtleText: paletteColors.blue070Color,
  ultramarineRampSubtleText: paletteColors.ultramarine070Color,
  purpleRampSubtleText: paletteColors.purple070Color,
  pinkRampSubtleText: paletteColors.pink070Color,
};

export const colorMapping = {
  ...paletteColors,
  ...brandTokens,
  ...surfaceTokens,
  ...borderTokens,
  ...textTokens,
  ...iconTokens,
  ...formTokens,
  ...statusTokens,
  ...tagTokens,
  ...gridTokens,
  ...hoverTokens,
  ...selectedTokens,
  ...disabledTokens,
  ...focusTokens,
  ...colorRampsBoldTokens,
  ...colorRampsSubtleTokens,
  ...colorRampsTextBoldTokens,
  ...colorRampsTextSubtleTokens,
};

// export const baseMappings = {
//     grayColor: "rgba(224, 224, 224, 1)",
//     grayLightColor: "rgba(245, 245, 246, 1)",
//     grayLighterColor: "rgba(249, 250, 253, 1)",
//     grayDarkColor: "rgba(164, 164, 164, 1)",
//     grayBlueColor: "#E7EAEE",
//     grayBlueLighterColor: "#F9FAFD",
//     textPrimaryColor: "rgba(0, 0, 0, 0.87)",
//     textSecondaryColor: "rgba(0, 0, 0, 0.54)",
//     textDisabledColor: "rgba(28, 43, 54, 0.2)",
//     textPrimaryDarkColor: "rgba(255, 255, 255, 1)",
//     textSecondaryDarkColor: "rgba(255, 255, 255, 0.70)",
//     textDisabledDarkColor: "rgba(255, 255, 255, 0.40)",
//     blackTxt087Color: "rgba(0, 0, 0, 0.87)",
//     blackTxt054Color: "rgba(0, 0, 0, 0.54)",
//     blackTxt026Color: "rgba(0, 0, 0, 0.26)",
//     whiteTxt087Color: "rgba(255, 255, 255, 0.87)",
//     whiteTxt054Color: "rgba(255, 255, 255, 0.54)",
//     whiteTxt026Color: "rgba(255, 255, 255, 0.26)",
//     chartColorCoral: "rgba(241, 96, 75, 1)",
//     chartColorPink: "rgba(211, 45, 71, 1)",
//     chartColorPeach: "rgba(246, 156, 131, 1)",
//     chartColorOrange: "#FF6F00",
//     chartColorGreen: "#009959",
//     chartColorTeal: "#26A69A",
//     chartColorBlue: "#0067BD",
//     chartColorSky: "#0F6DEE",
//     chartColorViolet: "#263E94",
//     chartColorPurple: "#9C27B0",
//     chartColorRed: "#EB423C",
//     chartColorGold: "#FFC219",
//     chartColorYellow: "#FEEB3B",
// }

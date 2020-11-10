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
  gray010Color: "#f2f5f7",
  gray020Color: "#dce3e8",
  gray030Color: "#c1ccd6",
  gray040Color: "#9fb1bd",
  gray050Color: "#7a909e",
  gray060Color: "#5b7282",
  gray070Color: "#3e5463",
  gray080Color: "#2a3f4d",
  gray090Color: "#1c2b36",
  gray100Color: "#0e171f",
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
  aqua010Color: "#ebf3f7",
  aqua020Color: "#c9e7f5",
  aqua030Color: "#8bd3f7",
  aqua040Color: "#48b8f0",
  aqua050Color: "#1195d6",
  aqua060Color: "#0073ba",
  aqua070Color: "#08548a",
  aqua080Color: "#0e3d66",
  aqua090Color: "#0c2b45",
  aqua100Color: "#0b1724",
  blue010Color: "#f0f4fa",
  blue020Color: "#d4e4fa",
  blue030Color: "#adccf7",
  blue040Color: "#75b1ff",
  blue050Color: "#3d8df5",
  blue060Color: "#186ade",
  blue070Color: "#0d4ea6",
  blue080Color: "#103a75",
  blue090Color: "#11294d",
  blue100Color: "#0d1826",
  green010Color: "#ebf7ed",
  green020Color: "#c7ebd1",
  green030Color: "#88dba8",
  green040Color: "#43c478",
  green050Color: "#16a163",
  green060Color: "#077d55",
  green070Color: "#075e45",
  green080Color: "#094536",
  green090Color: "#092e25",
  green100Color: "#081a15",
  lime010Color: "#ebf7da",
  lime020Color: "#d5f0b1",
  lime030Color: "#aad971",
  lime040Color: "#78bf39",
  lime050Color: "#52a31d",
  lime060Color: "#3c7d0e",
  lime070Color: "#2e5c0e",
  lime080Color: "#254211",
  lime090Color: "#1c2e10",
  lime100Color: "#121a0d",
  orange010Color: "#fcf2eb",
  orange020Color: "#fcddc7",
  orange030Color: "#fcbc97",
  orange040Color: "#fc9162",
  orange050Color: "#e86427",
  orange060Color: "#bf4815",
  orange070Color: "#8f3415",
  orange080Color: "#632b17",
  orange090Color: "#402117",
  orange100Color: "#1f1410",
  pink010Color: "#fcf0f8",
  pink020Color: "#f7daed",
  pink030Color: "#f7b7e2",
  pink040Color: "#fa87d4",
  pink050Color: "#ed4cb7",
  pink060Color: "#cc1d92",
  pink070Color: "#961574",
  pink080Color: "#6b155a",
  pink090Color: "#47153f",
  pink100Color: "#241020",
  purple010Color: "#f7f2fc",
  purple020Color: "#eadcfc",
  purple030Color: "#dabefa",
  purple040Color: "#c89afc",
  purple050Color: "#ac71f0",
  purple060Color: "#8f49de",
  purple070Color: "#6b30ab",
  purple080Color: "#4c277d",
  purple090Color: "#331f4d",
  purple100Color: "#1c1229",
  red010Color: "#fcf0f0",
  red020Color: "#fadcd9",
  red030Color: "#fabbb4",
  red040Color: "#fc9086",
  red050Color: "#fa5343",
  red060Color: "#d91f11",
  red070Color: "#a1160a",
  red080Color: "#75160c",
  red090Color: "#4f150f",
  red100Color: "#24120c",
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
  teal010Color: "#ebf5f4",
  teal020Color: "#beebe7",
  teal030Color: "#86d9d4",
  teal040Color: "#4ebfb9",
  teal050Color: "#279c9c",
  teal060Color: "#167b7d",
  teal070Color: "#155c5e",
  teal080Color: "#124241",
  teal090Color: "#102e2d",
  teal100Color: "#0c1a19",
  turquoise010Color: "#ebf5f4",
  turquoise020Color: "#c7e8ed",
  turquoise030Color: "#81d8e6",
  turquoise040Color: "#45bcd1",
  turquoise050Color: "#159ab3",
  turquoise060Color: "#067a91",
  turquoise070Color: "#09596b",
  turquoise080Color: "#0c424d",
  turquoise090Color: "#102d33",
  turquoise100Color: "#0f181a",
  ultramarine010Color: "#f2f3fa",
  ultramarine020Color: "#dee0fa",
  ultramarine030Color: "#c2c7fc",
  ultramarine040Color: "#a0a7fa",
  ultramarine050Color: "#7681fc",
  ultramarine060Color: "#545fe8",
  ultramarine070Color: "#3a45b0",
  ultramarine080Color: "#2f337d",
  ultramarine090Color: "#23254d",
  ultramarine100Color: "#141429",
  yellow010Color: "#faf6cf",
  yellow020Color: "#f7e379",
  yellow030Color: "#f5c518",
  yellow040Color: "#d9a514",
  yellow050Color: "#b3870e",
  yellow060Color: "#946613",
  yellow070Color: "#70491c",
  yellow080Color: "#54341f",
  yellow090Color: "#38251b",
  yellow100Color: "#1c1613",
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

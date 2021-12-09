export const addAlpha = (baseColor: string, alpha: number): string => {
    if (baseColor.startsWith('#')) {
        const rgb = hexToRgb(baseColor);
        if (rgb) {
            return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha.toFixed(2)})`
        } else {
            return '#FF1493'; // deeppink
        }
    } else {
        const rgb = baseColor.match(/\d+/g);
        if (rgb?.length === 3) {
            return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha.toFixed(2)})`
        } else {
            return '#FF1493'; // deeppink
        }
    }
}

function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// export const textTokens = {

// }

// export const iconTokens = {
//     iconAction: paletteColors.blue060Color,
//     iconPrimary: paletteColors.gray070Color,
//     iconSecondary: paletteColors.gray040Color,
//     iconReversed: paletteColors.whiteColor,
//     iconContrast: paletteColors.blackColor
// }

// export const formTokens = {
//     formInputBorder: paletteColors.gray040Color,
//     formInputBackground: paletteColors.whiteColor
// }

// export const statusTokens = {
//     statusErrorNone: paletteColors.gray060Color,
//     statusErrorBold: paletteColors.red060Color,
//     statusSuccessBold: paletteColors.green060Color,
//     statusWarningBold: paletteColors.yellow030Color,
//     statusInformationBold: paletteColors.blue060Color,
//     statusWarningIcon: paletteColors.orange050Color,
//     statusNoneSubtle: paletteColors.gray020Color,
//     statusErrorSubtle: paletteColors.red020Color,
//     statusSuccessSubtle: paletteColors.green020Color,
//     statusWarningSubtle: paletteColors.yellow010Color,
//     statusInformationSubtle: paletteColors.blue020Color
// }

// export const tagTokens = {
//     tagMinimal: paletteColors.transparentColor,
//     tagSubtle: paletteColors.blue020Color,
//     tagBold: paletteColors.blue060Color,
//     tagTextMinimal: paletteColors.gray070Color,
//     tagTextSubtle: paletteColors.blue070Color,
//     tagTextBold: paletteColors.whiteColor
// }

// export const gridTokens = {
//     gridColumnHeaderDefault: paletteColors.gray010Color,
//     gridRowDefault: paletteColors.whiteColor,
//     gridRowAlternative: paletteColors.gray010Color,
//     gridRowSectionMinimal: paletteColors.gray020Color,
//     gridRowSectionBold: paletteColors.gray060Color,
//     gridRowSectionContrast: paletteColors.gray080Color,
//     gridBidDefault: paletteColors.blue030Color,
//     gridBidDepth1: paletteColors.blue020Color,
//     gridBidDepth2: paletteColors.blue010Color,
//     gridBidRowHover: addAlpha(paletteColors.blue060Color, 0.2),
//     gridBidCellHover: paletteColors.blue060Color,
//     gridAskDefault: paletteColors.red030Color,
//     gridAskDepth1: paletteColors.red020Color,
//     gridAskDepth2: paletteColors.red010Color,
//     gridAskRowHover: addAlpha(paletteColors.red060Color, 0.2),
//     gridAskCellHover: paletteColors.red060Color,
//     gridCellWarningDefault: paletteColors.yellow010Color,
//     gridCellWarningDepth1: paletteColors.yellow020Color,
//     gridCellErrorDefault: paletteColors.red020Color,
//     gridCellErrorDepth1: paletteColors.red030Color,
//     gridCellSuccessDefault: paletteColors.green010Color,
//     gridCellSuccessDepth1: paletteColors.green020Color
// }

// export const hoverTokens = {
//     buttonPrimaryHover: "#1762CB", // Blue 60 and Gray 100 @10%
//     buttonSecondaryHover: "#C7CFD4", // Gray 20 and Gray 100 @10%
//     buttonTertiaryHover: addAlpha(paletteColors.gray040Color, 0.1),
//     buttonDestructiveHover: "#C51E12", // Red 60 and Gray 100 @10%
//     buttonMinimalPrimaryHover: addAlpha(paletteColors.blue060Color, 0.1),
//     buttonMinimalSecondaryHover: addAlpha(paletteColors.gray060Color, 0.2),
//     buttonMinimalDestructiveHover: addAlpha(paletteColors.red060Color, 0.1),
//     textLinkHover: paletteColors.blue070Color,
//     surfaceMinimalHover: addAlpha(paletteColors.gray040Color, 0.1),
//     surfaceSubtleHover: addAlpha(paletteColors.gray040Color, 0.2),
//     surfaceModerateHover: addAlpha(paletteColors.gray040Color, 0.4),
//     surfaceBoldHover: addAlpha(paletteColors.gray040Color, 0.6),
//     surfaceContrastHover: paletteColors.gray080Color,
//     borderMinimalHover: paletteColors.gray030Color,
//     borderSubtleHover: paletteColors.gray040Color,
//     borderModerateHover: paletteColors.gray050Color,
//     borderBoldHover: paletteColors.gray070Color,
//     borderContrastHover: paletteColors.gray100Color
// }

// export const selectedTokens = {
//     backgroundSubtleSelected: addAlpha(paletteColors.blue060Color, 0.2),
//     backgroundContrastSelected: paletteColors.blue060Color,
//     buttonPrimarySelected: "#1659B8", // Blue 60 and Gray 100 @20%
//     buttonSecondarySelected: "#B3BAC0", // Gray 20 and Gray 100 @20%
//     buttonTertiarySelected: addAlpha(paletteColors.gray040Color, 0.2),
//     buttonDestructiveSelected: "#B01D14", // Red 60 and Gray 100 @20%
//     buttonMinimalPrimarySelected: addAlpha(paletteColors.blue060Color, 0.2),
//     buttonMinimalSecondarySelected: addAlpha(paletteColors.gray060Color, 0.2),
//     buttonMinimalDestructiveSelected: addAlpha(paletteColors.red060Color, 0.2),
//     textSubtleSelected: paletteColors.blue070Color,
//     textContrastSelected: paletteColors.whiteColor
// }

// export const disabledTokens = {
//     backgroundDisabled: addAlpha(paletteColors.gray060Color, 0.1),
//     foregroundDisabled: paletteColors.gray030Color,
//     reversedDisabled: addAlpha(paletteColors.whiteColor, 0.6), //FDFDFD / 253, 253, 253 / White @60%
//     textDisabled: addAlpha(paletteColors.gray060Color, 0.4)
// }

// export const focusTokens = {
//     borderFocus: paletteColors.blue060Color,
//     backgroundFocus: addAlpha(paletteColors.gray040Color, 0.2)
// }

// export const colorRampsBoldTokens = {
//     grayRampBoldBackground: paletteColors.gray060Color,
//     redRampBoldBackground: paletteColors.red060Color,
//     orangeRampBoldBackground: paletteColors.orange050Color,
//     yellowRampBoldBackground: paletteColors.yellow030Color,
//     limeRampBoldBackground: paletteColors.lime060Color,
//     greenRampBoldBackground: paletteColors.green060Color,
//     tealRampBoldBackground: paletteColors.teal060Color,
//     turquoiseRampBoldBackground: paletteColors.turquoise060Color,
//     aquaRampBoldBackground: paletteColors.aqua070Color,
//     blueRampBoldBackground: paletteColors.blue060Color,
//     ultramarineRampBoldBackground: paletteColors.ultramarine060Color,
//     purpleRampBoldBackground: paletteColors.purple060Color,
//     pinkRampBoldBackground: paletteColors.pink060Color
// }

// export const colorRampsSubtleTokens = {
//     grayRampSubtleBackground: addAlpha(paletteColors.gray040Color, 0.3),
//     redRampSubtleBackground: addAlpha(paletteColors.red040Color, 0.3),
//     orangeRampSubtleBackground: addAlpha(paletteColors.orange040Color, 0.3),
//     yellowRampSubtleBackground: addAlpha(paletteColors.yellow020Color, 0.3),
//     limeRampSubtleBackground: addAlpha(paletteColors.lime040Color, 0.3),
//     greenRampSubtleBackground: addAlpha(paletteColors.green040Color, 0.3),
//     tealRampSubtleBackground: addAlpha(paletteColors.teal040Color, 0.3),
//     turquoiseRampSubtleBackground: addAlpha(paletteColors.turquoise040Color, 0.3),
//     aquaRampSubtleBackground: addAlpha(paletteColors.aqua040Color, 0.3),
//     blueRampSubtleBackground: addAlpha(paletteColors.blue040Color, 0.3),
//     ultramarineRampSubtleBackground: addAlpha(paletteColors.ultramarine040Color, 0.3),
//     purpleRampSubtleBackground: addAlpha(paletteColors.purple040Color, 0.3),
//     pinkRampSubtleBackground: addAlpha(paletteColors.pink040Color, 0.3)
// }

// export const colorRampsTextBoldTokens = {
//     grayRampBoldText: paletteColors.whiteColor,

//     redRampBoldText: paletteColors.whiteColor,

//     orangeRampBoldText: paletteColors.whiteColor,

//     yellowRampBoldText: paletteColors.gray090Color,

//     limeRampBoldText: paletteColors.whiteColor,

//     greenRampBoldText: paletteColors.whiteColor,

//     tealRampBoldText: paletteColors.whiteColor,

//     turquoiseRampBoldText: paletteColors.whiteColor,

//     aquaRampBoldText: paletteColors.whiteColor,

//     blueRampBoldText: paletteColors.whiteColor,

//     ultramarineRampBoldText: paletteColors.whiteColor,

//     purpleRampBoldText: paletteColors.whiteColor,

//     pinkRampBoldText: paletteColors.whiteColor,
// }

// export const colorRampsTextSubtle = {
//     grayRampSubtleText: paletteColors.gray080Color,
//     redRampSubtleText: paletteColors.red060Color,
//     orangeRampSubtleText: paletteColors.orange060Color,
//     yellowRampSubtleText: paletteColors.gray090Color,
//     limeRampSubtleText: paletteColors.lime070Color,
//     greenRampSubtleText: paletteColors.green070Color,
//     tealRampSubtleText: paletteColors.teal070Color,
//     turquoiseRampSubtleText: paletteColors.turquoise070Color,
//     aquaRampSubtleText: paletteColors.aqua070Color,
//     blueRampSubtleText: paletteColors.blue070Color,
//     ultramarineRampSubtleText: paletteColors.ultramarine070Color,
//     purpleRampSubtleText: paletteColors.purple070Color,
//     pinkRampSubtleText: paletteColors.pink070Color
// }


// export const colorMapping = {
//     ...paletteColors,
//     ...brandTokens,
//     ...surfaceTokens,
//     ...borderTokens,
//     ...textTokens,
//     ...iconTokens,
//     ...formTokens,
//     ...statusTokens,
//     ...tagTokens,
//     ...gridTokens,
//     ...hoverTokens,
//     ...selectedTokens,
//     ...disabledTokens,
//     ...focusTokens,
//     ...colorRampsBoldTokens,
//     ...colorRampsSubtleTokens,
//     ...colorRampsTextBoldTokens,
//     ...colorRampsTextSubtle
// }
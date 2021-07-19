import { Color } from "../../../picasso-dsl/src";

const DECIMAL = new Map([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "4"],
    [5, "5"],
    [6, "6"],
    [7, "7"],
    [8, "8"],
    [9, "9"],
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"],
]);

const ALPHA = new Map([
    [0, "00"],
    [0.1, "1A"],
    [0.2, "33"],
    [0.3, "4D"],
    [0.4, "66"],
    [0.5, "80"],
    [0.6, "99"],
    [0.7, "B3"],
    [0.8, "CC"],
    [0.9, "E6"],
    [1, "FF"],
]);

//默认颜色，白色
const DEFAULT_COLOR = "0xFFFFFFFF";

/**
 * 解析颜色json，返回十六进制的颜色值
 * @param data 颜色json
 */
export const parseColorAttributes = (color : Color) => {
    return _transformColor(color.alpha, color.red, color.green, color.blue);
}

/**
 * 颜色转换-十进制转十六进制
 * @param alpha 透明高度
 * @param red 红
 * @param green 绿
 * @param blue 蓝
 */
function _transformColor(alpha : number, red : number, green : number, blue : number) : string {
    return "0x" + ALPHA.get(alpha) + _transformSingleColor(red) + _transformSingleColor(green) + _transformSingleColor(blue);
} 

/**
 * 返回单个颜色对应的十六进制值(只针对于红绿蓝三原色)
 * @param singleColor 单个颜色的十进制值
 * @returns 单个颜色对应的十六进制值
 */
function _transformSingleColor(singleColor : number) : string {
    let tens = Math.floor(singleColor / 16);
    let digits = singleColor % 16;
    return DECIMAL.get(tens) + DECIMAL.get(digits);
}

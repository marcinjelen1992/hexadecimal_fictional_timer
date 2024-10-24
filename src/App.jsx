import { useState } from "react";
import "./App.css";

function App() {
  const [secondsForAltValue, setSecondsForAltValue] = useState("");

  function GetSecondsForAlternatives(event) {
    setSecondsForAltValue(event.target.value);
  }

  function octalNumber(input) {
    const toNumberTypeConversion = input * 1;
    const secondsInOctal = toNumberTypeConversion.toString(8);
    if (toNumberTypeConversion !== +toNumberTypeConversion) {
      return "One of characters is not a number";
    } else return secondsInOctal;
  }

  const isNotLimitedToOctalCharacters = false;
  const isLimitedToOctalCharacters = true;

  function hexadecimalNumber(input, boolean) {
    const toNumberTypeConversion = input * 1;
    const secondsInHexadecimal = toNumberTypeConversion.toString(16);
    const temp8 = secondsInHexadecimal.replaceAll("8", "s");
    const replaceA = temp8.replaceAll("a", "m");
    const finalA = replaceA.replaceAll("9", "t");
    const temp9 = finalA.replaceAll("b", "n");
    const replaceB = temp9.replaceAll("s", "k");
    const finalB = replaceB.replaceAll("t", "l");
    const tempA = finalB.replaceAll("a", "u");
    const replaceC = tempA.replaceAll("b", "v");
    const finalC = replaceC.replaceAll("k", "a");
    const tempB = finalC.replaceAll("l", "b");
    //
    const replaceD = tempB.replaceAll("c", "o");
    const finalD = replaceD.replaceAll("d", "p");
    const tempC = finalD.replaceAll("m", "c");
    const replaceE = tempC.replaceAll("n", "d");
    const finalE = replaceE.replaceAll("e", "y");
    const tempD = finalE.replaceAll("f", "z");
    const replaceF = tempD.replaceAll("o", "e");
    const finalF = replaceF.replaceAll("p", "f");
    const finalG = finalF.replaceAll("y", "g");
    const finalH = finalG.replaceAll("z", "h");
    if (toNumberTypeConversion !== +toNumberTypeConversion) {
      return "One of characters is not a number";
    }
    if (boolean === true) {
      return finalH;
    } else return secondsInHexadecimal;
  }

  function minutesOutputAltCode(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input.includes("-") ? input * -1 : input;
    const numberAfterDivision = input.includes("-")
      ? (input / 60) * -1
      : input / 60;
    let switchableMinusSignString = "";
    if (input.includes("-")) {
      switchableMinusSignString = "-";
    }
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 60) {
      return (
        switchableMinusSignString + numberAtCeiling + twoDotAndTwoZeroString
      );
    }
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return (
        switchableMinusSignString +
        numberAtCeilingMinusOne +
        twoDotAndZeroString +
        partAfterTwoDots
      );
    } else
      return (
        switchableMinusSignString +
        numberAtCeilingMinusOne +
        twoDotString +
        partAfterTwoDots
      );
  }

  function minInDecSecInHex(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input.includes("-") ? input * -1 : input;
    const numberAfterDivision = input.includes("-")
      ? (input / 64) * -1
      : input / 64;
    let switchableMinusSignString = "";
    if (input.includes("-")) {
      switchableMinusSignString = "-";
    }
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 64) {
      return (
        switchableMinusSignString + numberAtCeiling + twoDotAndTwoZeroString
      );
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        switchableMinusSignString +
        numberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        switchableMinusSignString +
        numberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  function minInHexSecInHex(input) {
    // input 16384 gives result 100:00
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input.includes("-") ? input * -1 : input;
    const numberAfterDivision = input.includes("-")
      ? (input / 64) * -1
      : input / 64;
    let switchableMinusSignString = "";
    if (input.includes("-")) {
      switchableMinusSignString = "-";
    }
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    //
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (partAfterTwoDots === 64) {
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeiling +
        twoDotAndTwoZeroString
      );
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  function hoursInDecRestInHex(input) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    const internalSeconds = input.includes("-") ? input * -1 : input;
    const internalMinutes = input.includes("-")
      ? (input / 64) * -1
      : input / 64;
    let switchableMinusSignString = "";
    if (input.includes("-")) {
      switchableMinusSignString = "-";
    }
    const numberAtCeiling = Math.ceil(internalMinutes);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    //
    const numberAtFloor = Math.floor(internalMinutes);
    const internalHours = numberAtFloor / 64;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 64 * hoursAtFloor;
    const hexadecimalCorrectedMinutes = correctedMinutes.toString(16);
    if (partAfterTwoDots !== +partAfterTwoDots) {
      return "One of characters is not a number";
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 64
    ) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotAndTwoZeroString +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      partAfterTwoDots < 16 &&
      partAfterTwoDots > 0
    ) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots < 64 &&
      partAfterTwoDots >= 16
    ) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots === 64
    ) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      correctedMinutes <= 63 &&
      partAfterTwoDots === 64
    ) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        switchableMinusSignString +
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (partAfterTwoDots === 64) {
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeiling +
        twoDotAndTwoZeroString
      );
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        switchableMinusSignString +
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  const [minutesForAltValue, setMinutesForAltValue] = useState("");

  function GetMinutesForAlternatives(event) {
    setMinutesForAltValue(event.target.value.toUpperCase());
  }

  function minutesOutput(input1) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (partAfterTwoDots === 64) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    // if (partAfterTwoDots <= 9 && partAfterTwoDots >= 1) does not encompass values above 9 and below 1
    // will not show properly at input 0.16 and 0.01
    // better use if (partAfterTwoDots < 10 && partAfterTwoDots > 0)
    if (partAfterTwoDots < 10 && partAfterTwoDots > 0) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  function secondsFromHexInput(input1, boolean1, boolean2) {
    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    //
    const secondsInOctal = internalSeconds.toString(8);
    const secondsInHex = internalSeconds.toString(16);
    const temp8 = secondsInHex.replaceAll("8", "s");
    const replaceA = temp8.replaceAll("a", "m");
    const finalA = replaceA.replaceAll("9", "t");
    const temp9 = finalA.replaceAll("b", "n");
    const replaceB = temp9.replaceAll("s", "k");
    const finalB = replaceB.replaceAll("t", "l");
    const tempA = finalB.replaceAll("a", "u");
    const replaceC = tempA.replaceAll("b", "v");
    const finalC = replaceC.replaceAll("k", "a");
    const tempB = finalC.replaceAll("l", "b");
    //
    const replaceD = tempB.replaceAll("c", "o");
    const finalD = replaceD.replaceAll("d", "p");
    const tempC = finalD.replaceAll("m", "c");
    const replaceE = tempC.replaceAll("n", "d");
    const finalE = replaceE.replaceAll("e", "y");
    const tempD = finalE.replaceAll("f", "z");
    const replaceF = tempD.replaceAll("o", "e");
    const finalF = replaceF.replaceAll("p", "f");
    const finalG = finalF.replaceAll("y", "g");
    const finalH = finalG.replaceAll("z", "h");
    if (isNaN(internalSeconds) || !isFinite(internalSeconds)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (boolean1 === false && boolean2 === false) {
      return internalSeconds;
    }
    if (boolean1 === false && boolean2 === true) {
      return secondsInOctal;
    }
    if (boolean1 === true && boolean2 === true) {
      return secondsInHex;
    }
    if (boolean1 === true && boolean2 === false) {
      return finalH;
    } else return internalSeconds;
  }
  //
  // Tu jest eksperymentalny kod od ChatGPT
  //
  function minInHexSecInHexFromMinInput(input1) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";

    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (partAfterTwoDots === 64) {
      return hexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }
  // kit for improvement of timer functions
  // after two dot string copy let and the character mapping part
  // add mods below
  // const input2DecimalResult = input2Analyser.join("");
  // const input2HexResult = input2DecimalResult * 1;
  // const internalSeconds = (input1HexResult + input2HexResult) * 64;
  // const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
  // possibly other const at floor may need (input1HexResult + input2HexResult) combo
  // under const hexadecimalNumberAtCeilingMinusOne add this
  // if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
  //  return "Out of bounds or input is not a valid number";
  // }
  // optional NaN detector
  // const hexStringInputSum = input1.toString(16).toUpperCase();
  // if (hexStringInputSum.includes("G") || hexStringInputSum.includes("H")) {
  //  return "Input includes not a number character (G-Z)";
  // }
  // rest of ifology as previously

  const stringTransformer = (input) => {
    const temp8 = input.replaceAll("8", "s");
    const replaceA = temp8.replaceAll("a", "m");
    const finalA = replaceA.replaceAll("9", "t");
    const temp9 = finalA.replaceAll("b", "n");
    const replaceB = temp9.replaceAll("s", "k");
    const finalB = replaceB.replaceAll("t", "l");
    const tempA = finalB.replaceAll("a", "u");
    const replaceC = tempA.replaceAll("b", "v");
    const finalC = replaceC.replaceAll("k", "a");
    const tempB = finalC.replaceAll("l", "b");
    const replaceD = tempB.replaceAll("c", "o");
    const finalD = replaceD.replaceAll("d", "p");
    const tempC = finalD.replaceAll("m", "c");
    const replaceE = tempC.replaceAll("n", "d");
    const finalE = replaceE.replaceAll("e", "y");
    const tempD = finalE.replaceAll("f", "z");
    const replaceF = tempD.replaceAll("o", "e");
    const finalF = replaceF.replaceAll("p", "f");
    const finalG = finalF.replaceAll("y", "g");
    return finalG.replaceAll("z", "h");
  };

  function minInAlienHexSecInAlienHexFromMinInput(input1) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    //    const numberAfterDivision = input;
    const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    //

    //
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const alienHexadecimalPartAfterTwoDots = stringTransformer(
      hexadecimalPartAfterTwoDots
    );
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const alienHexadecimalNumberAtCeiling = stringTransformer(
      hexadecimalNumberAtCeiling
    );
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    const alienHexadecimalNumberAtCeilingMinusOne = stringTransformer(
      hexadecimalNumberAtCeilingMinusOne
    );
    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (partAfterTwoDots === 64) {
      return alienHexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        alienHexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        alienHexadecimalPartAfterTwoDots
      );
    } else
      return (
        alienHexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        alienHexadecimalPartAfterTwoDots
      );
  }

  function hoursInDecRestInHexFromHexInput(input1) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    //    const numberAfterDivision = input;
    const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    //

    const numberAtFloor = Math.floor(input1HexResult + input2HexResult);
    const internalHours = numberAtFloor / 64;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 64 * hoursAtFloor;
    const hexadecimalCorrectedMinutes = correctedMinutes.toString(16);
    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 64
    ) {
      return hoursAtFloor + twoDotAndTwoZeroString + twoDotAndTwoZeroString;
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      partAfterTwoDots < 16 &&
      partAfterTwoDots > 0
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots < 64 &&
      partAfterTwoDots >= 16
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloor +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      correctedMinutes <= 63 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        hoursAtFloor +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (partAfterTwoDots === 64) {
      return hexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }

  function hexOutputFromHexInput(input1) {
    const twoDotString = ":";
    let input1First = input1;
    let input1Second = null;

    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalCounter = input1.includes("-")
      ? (input1HexResult + input2HexResult) * 64 * -1
      : (input1HexResult + input2HexResult) * 64;

    const numberAtCeiling = input1.includes("-")
      ? Math.floor((input1HexResult + input2HexResult) * -1)
      : Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = input1.includes("-")
      ? (internalCounter - (multiplyOfSixtyFour + 64)) * -1
      : internalCounter - (multiplyOfSixtyFour - 64);

    let switchableMinusSignString = "";
    if (input1.includes("-")) {
      switchableMinusSignString = "-";
    }

    let correctedFirstOrder = partAfterTwoDots;
    if (partAfterTwoDots === 64) {
      correctedFirstOrder = 0;
    }

    let firstOrderTwoCharacterCheck = correctedFirstOrder.toString(16);
    if (correctedFirstOrder >= 0 && correctedFirstOrder < 16) {
      firstOrderTwoCharacterCheck = "0" + correctedFirstOrder.toString(16);
    }

    const numberAtFloor = Math.floor(input1HexResult + input2HexResult);
    const internalThirdOrder = numberAtFloor / 64;
    const thirdOrderAtFloor = Math.floor(internalThirdOrder);

    let correctedSecondOrder = numberAtFloor;
    if (internalThirdOrder >= 1) {
      correctedSecondOrder = numberAtFloor - 64 * thirdOrderAtFloor;
    }

    let secondOrderTwoCharacterCheck = correctedSecondOrder.toString(16);
    if (correctedSecondOrder >= 0 && correctedSecondOrder < 16) {
      secondOrderTwoCharacterCheck = "0" + correctedSecondOrder.toString(16);
    }

    const thirdOrderDisplay = thirdOrderAtFloor.toString(16);

    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (internalThirdOrder >= 1) {
      return (
        switchableMinusSignString +
        thirdOrderDisplay +
        twoDotString +
        secondOrderTwoCharacterCheck +
        twoDotString +
        firstOrderTwoCharacterCheck
      );
    } else
      return (
        switchableMinusSignString +
        secondOrderTwoCharacterCheck +
        twoDotString +
        firstOrderTwoCharacterCheck
      );
  }

  function hoursInSeptRestInHexFromHexInput(input1, boolean1) {
    const twoDotString = ":";
    const twoDotAndZeroString = ":0";
    const twoDotAndTwoZeroString = ":00";
    let input1First = input1;
    let input1Second = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [input1First, input1Second] = input1.split(".");
    }

    const hexIntA = input1First;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputOneInt) => {
      if (inputOneInt === "") {
        return 0;
      } else {
        return parseInt(inputOneInt, 16);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const input1HexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = input1Second;
    let inputTwo = [];
    if (hexIntB) {
      inputTwo = hexIntB.split(/[ \-_]/);
    }

    const input2Analyser = inputTwo.map((inputB) => {
      if (inputB === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (inputB.length === 1 && singleCharMapping.hasOwnProperty(inputB)) {
        return singleCharMapping[inputB];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputB.length === 2) {
        let firstChar = inputB[0];
        let secondChar = inputB[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const input2DecimalResult = input2Analyser.join("");
    const input2HexResult = input2DecimalResult * 1;
    const internalSeconds = (input1HexResult + input2HexResult) * 64;
    //    const numberAfterDivision = input;
    const numberAtCeiling = Math.ceil(input1HexResult + input2HexResult);
    const multiplyOfSixtyFour = 64 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixtyFour - 64);
    const hexadecimalPartAfterTwoDots = partAfterTwoDots.toString(16);
    const numberAtCeilingMinusOne = numberAtCeiling - 1;
    const hexadecimalNumberAtCeiling = numberAtCeiling.toString(16);
    const hexadecimalNumberAtCeilingMinusOne =
      numberAtCeilingMinusOne.toString(16);
    //

    const numberAtFloor = Math.floor(input1HexResult + input2HexResult);
    const internalHours = numberAtFloor / 64;
    const hoursAtFloor = Math.floor(internalHours);
    const correctedMinutes = numberAtFloor - 64 * hoursAtFloor;
    const hexadecimalCorrectedMinutes = correctedMinutes.toString(16);
    const hoursAtFloorInSept = hoursAtFloor.toString(7);
    const hoursRounding = Math.round((internalSeconds / 86016) * 10000000);
    const hoursValue = hoursRounding / 10000000;
    if (isNaN(partAfterTwoDots) || !isFinite(partAfterTwoDots)) {
      return "Out of bounds or input is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = input1.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "Input includes not a number character (G-Z)";
    }
    if (hexStringInputSum.includes("-")) {
      return "Don't input negative values";
    }
    if (boolean1 === true) {
      return hoursValue;
    }
    if (
      internalHours >= 1 &&
      correctedMinutes === 0 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloorInSept + twoDotAndTwoZeroString + twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      partAfterTwoDots < 16 &&
      partAfterTwoDots > 0
    ) {
      return (
        hoursAtFloorInSept +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (internalHours >= 1 && partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hoursAtFloorInSept +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots < 64 &&
      partAfterTwoDots >= 16
    ) {
      return (
        hoursAtFloorInSept +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 0 &&
      correctedMinutes < 16 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloorInSept +
        twoDotAndZeroString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (
      internalHours >= 1 &&
      correctedMinutes >= 16 &&
      correctedMinutes <= 63 &&
      partAfterTwoDots === 64
    ) {
      return (
        hoursAtFloorInSept +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotAndTwoZeroString
      );
    }
    if (internalHours >= 1) {
      return (
        hoursAtFloorInSept +
        twoDotString +
        hexadecimalCorrectedMinutes +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
    }
    if (partAfterTwoDots === 64) {
      return hexadecimalNumberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots < 16 && partAfterTwoDots > 0) {
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotAndZeroString +
        hexadecimalPartAfterTwoDots
      );
    } else
      return (
        hexadecimalNumberAtCeilingMinusOne +
        twoDotString +
        hexadecimalPartAfterTwoDots
      );
  }
  const [hexInput5, setHexInput5] = useState("");

  function GetHexInput5(event) {
    setHexInput5(event.target.value.toUpperCase());
  }

  const [hexInput6, setHexInput6] = useState("");

  function GetHexInput6(event) {
    setHexInput6(event.target.value.toUpperCase());
  }

  function hexMultiplicationTurbo(input1, input2, boolean1) {
    let inputA = input1;
    let inputB = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [inputA, inputB] = input1.split(".");
    }

    const hexIntA = inputA;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputFirst) => {
      if (inputFirst === "") {
        return 0;
      } else {
        return parseInt(inputFirst, 16); // Use inputFirst instead of input1
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const inputOneIntegerHexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = inputB;
    let inputOneFraction = [];
    if (hexIntB) {
      inputOneFraction = hexIntB.split(/[ \-_]/);
    }

    const inputOneFractionAnalyser = inputOneFraction.map((inputFirstFrac) => {
      if (inputFirstFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (
        inputFirstFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputFirstFrac)
      ) {
        return singleCharMapping[inputFirstFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputFirstFrac.length === 2) {
        let firstChar = inputFirstFrac[0];
        let secondChar = inputFirstFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const inputOneFractionDecimalResult = inputOneFractionAnalyser.join("");
    const inputOneFractionHexResult = inputOneFractionDecimalResult * 1;
    const inputOneFullResult = input1.includes(".")
      ? inputOneIntegerHexResult + inputOneFractionHexResult
      : inputOneIntegerHexResult;

    const inputOneFullCheckMinus = input1.includes("-")
      ? inputOneFullResult * -1
      : inputOneFullResult;

    let inputC = input2;
    let inputD = null;

    // Check if input2 contains a '.'
    if (input2.includes(".")) {
      [inputC, inputD] = input2.split(".");
    }

    const hexIntC = inputC;
    const inputTwoInteger = hexIntC.split(/[ \-_]/);

    const inputTwoIntegerAnalyser = inputTwoInteger.map((inputSecond) => {
      if (inputSecond === "") {
        return 0;
      } else {
        return parseInt(inputSecond, 16); // Use inputSecond instead of input2
      }
    });
    const inputTwoIntegerDecimalResult = inputTwoIntegerAnalyser.join("");
    const inputTwoIntegerHexResult = inputTwoIntegerDecimalResult * 1;
    const hexIntD = inputD;
    let inputTwoFraction = [];
    if (hexIntD) {
      inputTwoFraction = hexIntD.split(/[ \-_]/);
    }

    const inputTwoFractionAnalyser = inputTwoFraction.map((inputSecondFrac) => {
      if (inputSecondFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (
        inputSecondFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputSecondFrac)
      ) {
        return singleCharMapping[inputSecondFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputSecondFrac.length === 2) {
        let firstChar = inputSecondFrac[0];
        let secondChar = inputSecondFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const inputTwoFractionDecimalResult = inputTwoFractionAnalyser.join("");
    const inputTwoFractionHexResult = inputTwoFractionDecimalResult * 1;
    const inputTwoFullResult = input2.includes(".")
      ? inputTwoIntegerHexResult + inputTwoFractionHexResult
      : inputTwoIntegerHexResult;

    const inputTwoFullCheckMinus = input2.includes("-")
      ? inputTwoFullResult * -1
      : inputTwoFullResult;

    const multiplicationOfResults =
      inputOneFullCheckMinus * inputTwoFullCheckMinus;

    // Check if multiplicationOfResults is NaN or Infinity
    if (isNaN(multiplicationOfResults) || !isFinite(multiplicationOfResults)) {
      return "Out of bounds or one of the inputs is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = (input1 + input2).toString(16).toUpperCase();
    const hexStringResult = multiplicationOfResults.toString(16).toUpperCase();
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "One of the inputs includes not a number character (G-Z)";
    }
    if (boolean1 === false) {
      return `${multiplicationOfResults}`;
    } else {
      return `${hexStringResult}`;
    }
  }

  function hexMultiplicationTurboFractionalDisplay(input1, input2) {
    let inputA = input1;
    let inputB = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [inputA, inputB] = input1.split(".");
    }

    const hexIntA = inputA;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputFirst) => {
      if (inputFirst === "") {
        return 0;
      } else {
        return parseInt(inputFirst, 16); // Use inputFirst instead of input1
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const inputOneIntegerHexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = inputB;
    let inputOneFraction = [];
    if (hexIntB) {
      inputOneFraction = hexIntB.split(/[ \-_]/);
    }

    const inputOneFractionAnalyser = inputOneFraction.map((inputFirstFrac) => {
      if (inputFirstFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (
        inputFirstFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputFirstFrac)
      ) {
        return singleCharMapping[inputFirstFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputFirstFrac.length === 2) {
        let firstChar = inputFirstFrac[0];
        let secondChar = inputFirstFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const inputOneFractionDecimalResult = inputOneFractionAnalyser.join("");
    const inputOneFractionHexResult = inputOneFractionDecimalResult * 1;
    const inputOneFullResult = input1.includes(".")
      ? inputOneIntegerHexResult + inputOneFractionHexResult
      : inputOneIntegerHexResult;

    const inputOneFullCheckMinus = input1.includes("-")
      ? inputOneFullResult * -1
      : inputOneFullResult;

    let inputC = input2;
    let inputD = null;

    // Check if input2 contains a '.'
    if (input2.includes(".")) {
      [inputC, inputD] = input2.split(".");
    }

    const hexIntC = inputC;
    const inputTwoInteger = hexIntC.split(/[ \-_]/);

    const inputTwoIntegerAnalyser = inputTwoInteger.map((inputSecond) => {
      if (inputSecond === "") {
        return 0;
      } else {
        return parseInt(inputSecond, 16); // Use inputSecond instead of input2
      }
    });
    const inputTwoIntegerDecimalResult = inputTwoIntegerAnalyser.join("");
    const inputTwoIntegerHexResult = inputTwoIntegerDecimalResult * 1;
    const hexIntD = inputD;
    let inputTwoFraction = [];
    if (hexIntD) {
      inputTwoFraction = hexIntD.split(/[ \-_]/);
    }

    const inputTwoFractionAnalyser = inputTwoFraction.map((inputSecondFrac) => {
      if (inputSecondFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.0625,
        2: 0.125,
        3: 0.1875,
        4: 0.25,
        5: 0.3125,
        6: 0.375,
        7: 0.4375,
        8: 0.5,
        9: 0.5625,
        A: 0.625,
        B: 0.6875,
        C: 0.75,
        D: 0.8125,
        E: 0.875,
        F: 0.9375,
      };

      // Handle single-character strings
      if (
        inputSecondFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputSecondFrac)
      ) {
        return singleCharMapping[inputSecondFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputSecondFrac.length === 2) {
        let firstChar = inputSecondFrac[0];
        let secondChar = inputSecondFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/256 for "0X" range
          return singleCharMapping[secondChar] / 16;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.0625 (value of "1")
          return 0.0625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.1875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.3125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.4375 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "8" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "9" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "A" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "B" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.6875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "C" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "D" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.8125 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "E" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 16;
        }
        if (firstChar === "F" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.9375 + singleCharMapping[secondChar] / 16;
        }
      }

      return "NotANumber";
    });
    const inputTwoFractionDecimalResult = inputTwoFractionAnalyser.join("");
    const inputTwoFractionHexResult = inputTwoFractionDecimalResult * 1;
    const inputTwoFullResult = input2.includes(".")
      ? inputTwoIntegerHexResult + inputTwoFractionHexResult
      : inputTwoIntegerHexResult;

    const inputTwoFullCheckMinus = input2.includes("-")
      ? inputTwoFullResult * -1
      : inputTwoFullResult;

    const multiplicationOfResults =
      inputOneFullCheckMinus * inputTwoFullCheckMinus;

    // Check if multiplicationOfResults is NaN or Infinity
    if (isNaN(multiplicationOfResults) || !isFinite(multiplicationOfResults)) {
      return "Out of bounds or one of the inputs is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = (input1 + input2).toString(16).toUpperCase();
    const hexStringResult = multiplicationOfResults.toString(16).toUpperCase();
    const resultCheckMinus = hexStringResult.includes("-")
      ? Math.ceil(multiplicationOfResults)
      : Math.floor(multiplicationOfResults);
    const resultFloat = hexStringResult.includes("-")
      ? (multiplicationOfResults - resultCheckMinus) * -1
      : multiplicationOfResults - resultCheckMinus;
    const resultFloatBySixteen = resultFloat * 16;
    const resultFloatByTwoHundredFiftySix = resultFloat * 256;
    const resultFloatByTwoHundredFiftySixNotExact =
      resultFloatByTwoHundredFiftySix -
      Math.floor(resultFloatByTwoHundredFiftySix);
    const resultFloatByOneThousandTwentyFour = resultFloat * 1024;
    let checkIfDivisibleBySixteen = false;
    if (
      resultFloat === 0.0625 ||
      resultFloat === 0.125 ||
      resultFloat === 0.1875 ||
      resultFloat === 0.25 ||
      resultFloat === 0.3125 ||
      resultFloat === 0.375 ||
      resultFloat === 0.4375 ||
      resultFloat === 0.5 ||
      resultFloat === 0.5625 ||
      resultFloat === 0.625 ||
      resultFloat === 0.6875 ||
      resultFloat === 0.75 ||
      resultFloat === 0.8125 ||
      resultFloat === 0.875 ||
      resultFloat === 0.9375
    ) {
      checkIfDivisibleBySixteen = true;
    }
    if (
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "One of the inputs includes not a number character (G-Z)";
    }
    if (resultFloat === 0) {
      return `${resultCheckMinus}`;
    }
    if (
      resultFloat === 0.0625 ||
      resultFloat === 0.125 ||
      resultFloat === 0.1875 ||
      resultFloat === 0.25 ||
      resultFloat === 0.3125 ||
      resultFloat === 0.375 ||
      resultFloat === 0.4375 ||
      resultFloat === 0.5 ||
      resultFloat === 0.5625 ||
      resultFloat === 0.625 ||
      resultFloat === 0.6875 ||
      resultFloat === 0.75 ||
      resultFloat === 0.8125 ||
      resultFloat === 0.875 ||
      resultFloat === 0.9375
    ) {
      return (
        <>
          {resultCheckMinus} <sup>{resultFloatBySixteen}</sup>/<sub>16</sub>
        </>
      );
    }
    if (
      resultFloatByTwoHundredFiftySixNotExact !== 0 &&
      checkIfDivisibleBySixteen === false
    ) {
      return (
        <>
          {resultCheckMinus} <sup>{resultFloatByOneThousandTwentyFour}</sup>/
          <sub>1024</sub>
        </>
      );
    } else {
      return (
        <>
          {resultCheckMinus} <sup>{resultFloatByTwoHundredFiftySix}</sup>/
          <sub>256</sub>
        </>
      );
    }
  }
  const [hexInput7, setHexInput7] = useState("");

  function GetHexInput7(event) {
    setHexInput7(event.target.value.toUpperCase());
  }

  const [hexInput8, setHexInput8] = useState("");

  function GetHexInput8(event) {
    setHexInput8(event.target.value.toUpperCase());
  }

  // oct nie ma detekcji minusa i detekcji 8, 9, A, B itd...
  function octMultiplicationTurbo(input1, input2, boolean1) {
    let inputA = input1;
    let inputB = null;

    // Check if input1 contains a '.'
    if (input1.includes(".")) {
      [inputA, inputB] = input1.split(".");
    }

    const hexIntA = inputA;
    const inputOneInteger = hexIntA.split(/[ \-_]/);

    const inputOneIntegerAnalyser = inputOneInteger.map((inputFirst) => {
      if (inputFirst === "") {
        return 0;
      } else {
        return parseInt(inputFirst, 8);
      }
    });
    const inputOneIntegerDecimalResult = inputOneIntegerAnalyser.join("");
    const inputOneIntegerHexResult = inputOneIntegerDecimalResult * 1;
    const hexIntB = inputB;
    let inputOneFraction = [];
    if (hexIntB) {
      inputOneFraction = hexIntB.split(/[ \-_]/);
    }

    const inputOneFractionAnalyser = inputOneFraction.map((inputFirstFrac) => {
      if (inputFirstFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.125,
        2: 0.25,
        3: 0.375,
        4: 0.5,
        5: 0.625,
        6: 0.75,
        7: 0.875,
      };

      // Handle single-character strings
      if (
        inputFirstFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputFirstFrac)
      ) {
        return singleCharMapping[inputFirstFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "07", "11", ..., "17")
      if (inputFirstFrac.length === 2) {
        let firstChar = inputFirstFrac[0];
        let secondChar = inputFirstFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/64 for "0X" range
          return singleCharMapping[secondChar] / 8;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.125 (value of "1")
          return 0.125 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 8;
        }
      }

      return "NotANumber";
    });
    const inputOneFractionDecimalResult = inputOneFractionAnalyser.join("");
    const inputOneFractionHexResult = inputOneFractionDecimalResult * 1;
    const inputOneFullResult = input1.includes(".")
      ? inputOneIntegerHexResult + inputOneFractionHexResult
      : inputOneIntegerHexResult;

    const inputOneFullCheckMinus = input1.includes("-")
      ? inputOneFullResult * -1
      : inputOneFullResult;

    let inputC = input2;
    let inputD = null;

    // Check if input2 contains a '.'
    if (input2.includes(".")) {
      [inputC, inputD] = input2.split(".");
    }

    const hexIntC = inputC;
    const inputTwoInteger = hexIntC.split(/[ \-_]/);

    const inputTwoIntegerAnalyser = inputTwoInteger.map((inputSecond) => {
      if (inputSecond === "") {
        return 0;
      } else {
        return parseInt(inputSecond, 8); // Use inputSecond instead of input2
      }
    });
    const inputTwoIntegerDecimalResult = inputTwoIntegerAnalyser.join("");
    const inputTwoIntegerHexResult = inputTwoIntegerDecimalResult * 1;
    const hexIntD = inputD;
    let inputTwoFraction = [];
    if (hexIntD) {
      inputTwoFraction = hexIntD.split(/[ \-_]/);
    }

    const inputTwoFractionAnalyser = inputTwoFraction.map((inputSecondFrac) => {
      if (inputSecondFrac === "") {
        return 0;
      }

      // Single-character conversions
      const singleCharMapping = {
        0: 0,
        1: 0.125,
        2: 0.25,
        3: 0.375,
        4: 0.5,
        5: 0.625,
        6: 0.75,
        7: 0.875,
      };

      // Handle single-character strings
      if (
        inputSecondFrac.length === 1 &&
        singleCharMapping.hasOwnProperty(inputSecondFrac)
      ) {
        return singleCharMapping[inputSecondFrac];
      }

      // Handle two-character strings (e.g. "01", "02", ..., "0F", "11", ..., "1F")
      if (inputSecondFrac.length === 2) {
        let firstChar = inputSecondFrac[0];
        let secondChar = inputSecondFrac[1];

        if (firstChar === "0" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character as a fraction of 1/64 for "0X" range
          return singleCharMapping[secondChar] / 8;
        }

        if (firstChar === "1" && singleCharMapping.hasOwnProperty(secondChar)) {
          // Convert the second character for "1X" range by adding base 0.125 (value of "1")
          return 0.125 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "2" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.25 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "3" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.375 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "4" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.5 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "5" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.625 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "6" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.75 + singleCharMapping[secondChar] / 8;
        }
        if (firstChar === "7" && singleCharMapping.hasOwnProperty(secondChar)) {
          return 0.875 + singleCharMapping[secondChar] / 8;
        }
      }

      return "NotANumber";
    });
    const inputTwoFractionDecimalResult = inputTwoFractionAnalyser.join("");
    const inputTwoFractionHexResult = inputTwoFractionDecimalResult * 1;
    const inputTwoFullResult = input2.includes(".")
      ? inputTwoIntegerHexResult + inputTwoFractionHexResult
      : inputTwoIntegerHexResult;
    const inputTwoFullCheckMinus = input2.includes("-")
      ? inputTwoFullResult * -1
      : inputTwoFullResult;

    const multiplicationOfResults =
      inputOneFullCheckMinus * inputTwoFullCheckMinus;

    // Check if multiplicationOfResults is NaN or Infinity
    if (isNaN(multiplicationOfResults) || !isFinite(multiplicationOfResults)) {
      return "Out of bounds or one of the inputs is not a valid number";
    }

    // Convert result to string and check if it contains "G" or "H"
    const hexStringInputSum = (input1 + input2).toString(8).toUpperCase();
    const hexStringResult = multiplicationOfResults.toString(8).toUpperCase();
    if (
      hexStringInputSum.includes("8") ||
      hexStringInputSum.includes("9") ||
      hexStringInputSum.includes("A") ||
      hexStringInputSum.includes("B") ||
      hexStringInputSum.includes("C") ||
      hexStringInputSum.includes("D") ||
      hexStringInputSum.includes("E") ||
      hexStringInputSum.includes("F") ||
      hexStringInputSum.includes("G") ||
      hexStringInputSum.includes("H") ||
      hexStringInputSum.includes("I") ||
      hexStringInputSum.includes("J") ||
      hexStringInputSum.includes("K") ||
      hexStringInputSum.includes("L") ||
      hexStringInputSum.includes("M") ||
      hexStringInputSum.includes("N") ||
      hexStringInputSum.includes("O") ||
      hexStringInputSum.includes("P") ||
      hexStringInputSum.includes("Q") ||
      hexStringInputSum.includes("R") ||
      hexStringInputSum.includes("S") ||
      hexStringInputSum.includes("T") ||
      hexStringInputSum.includes("U") ||
      hexStringInputSum.includes("V") ||
      hexStringInputSum.includes("W") ||
      hexStringInputSum.includes("X") ||
      hexStringInputSum.includes("Y") ||
      hexStringInputSum.includes("Z")
    ) {
      return "One of the inputs includes not a number character (8-Z)";
    }
    if (boolean1 === false) {
      return `${multiplicationOfResults}`;
    } else {
      return `${hexStringResult}`;
    }
  }

  return (
    <>
      <div className="rit">
        <div className="secondDiv">
          <h1>Hexadecimal calculator and fictional timers</h1>
        </div>
        <div className="section_content">
          <h3>Hexadecimal multiplication (input only two digits after dot)</h3>
          <input type="text" value={hexInput5} onChange={GetHexInput5} />
          *
          <input type="text" value={hexInput6} onChange={GetHexInput6} />
        </div>
        <div className="results_content">
          <div>
            <p>Result in Hexadecimal: </p>
            <p>Decimal with float: </p>
            <p>Decimal with fraction: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{hexMultiplicationTurbo(hexInput5, hexInput6, true)}</p>
            <p>{hexMultiplicationTurbo(hexInput5, hexInput6, false)}</p>
            <p>
              {hexMultiplicationTurboFractionalDisplay(hexInput5, hexInput6)}
            </p>
          </div>
        </div>
        <div className="section_content">
          <h3>Octal multiplication (input only two digits after dot)</h3>
          <input type="text" value={hexInput7} onChange={GetHexInput7} />*
          <input type="text" value={hexInput8} onChange={GetHexInput8} />
        </div>
        <div className="results_content">
          <div>
            <p>Result in Octal: </p>
            <p>Decimal with float: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{octMultiplicationTurbo(hexInput7, hexInput8, true)}</p>
            <p>{octMultiplicationTurbo(hexInput7, hexInput8, false)}</p>
          </div>
        </div>
        <div className="section_content">
          <h3>Conversion of classical seconds to alternative timers</h3>
          <input
            type="text"
            value={secondsForAltValue}
            onChange={GetSecondsForAlternatives}
          />
        </div>
        <div className="results_content">
          <div>
            <p>Classical minutes: </p>
            <p>Octal: </p>
            <p>Hexadecimal: </p>
            <p>Hexadecimal with only Octal Characters: </p>
            <p>Decimal elongated (64s) minutes & Hex seconds: </p>
            <p>Hex elongated (64s) minutes & Hex seconds: </p>
            <p>Decimal elongated (64min) hours & rest in Hex: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{minutesOutputAltCode(secondsForAltValue)}</p>
            <p>{octalNumber(secondsForAltValue)}</p>
            <p>
              {hexadecimalNumber(
                secondsForAltValue,
                isNotLimitedToOctalCharacters
              )}
            </p>
            <p>
              {hexadecimalNumber(
                secondsForAltValue,
                isLimitedToOctalCharacters
              )}
            </p>
            <p>{minInDecSecInHex(secondsForAltValue)}</p>
            <p>{minInHexSecInHex(secondsForAltValue)}</p>
            <p>{hoursInDecRestInHex(secondsForAltValue)}</p>
          </div>
        </div>
        <div className="section_content">
          <h3>
            Conversion of hexadecimal elongated (64s) minutes to alternative
            timers
          </h3>
          <p>Hexadecimal input:</p>
          <input
            type="text"
            value={minutesForAltValue}
            onChange={GetMinutesForAlternatives}
          />
        </div>
        <div className="results_content">
          <div>
            <p>Decimal representation: </p>
            <p>Octal seconds: </p>
            <p>Decimal seconds: </p>
            <p>Hexadecimal seconds: </p>
            <p>Hexadecimal with only Octal Characters: </p>
            <p>Hex elongated (64s) minutes & Hex seconds (input mirror): </p>
            <p>
              Hex elongated (64s) minutes & Hex seconds with only Octal
              Characters:{" "}
            </p>
            <p>Decimal elongated (64min) hours & rest in Hex: </p>
            <p>Hexadecimal elongated (64min) hours & rest in Hex: </p>
            <p>Septimal elongated (64min) hours & rest in Hex: </p>
            <p>Number of days composed of 21 elongated hours: </p>
          </div>
          <div
            style={{
              padding: "0 0 0 8px",
            }}
          >
            <p>{minutesOutput(minutesForAltValue)}</p>
            <p>{secondsFromHexInput(minutesForAltValue, false, true)}</p>
            <p>{secondsFromHexInput(minutesForAltValue, false, false)}</p>
            <p>{secondsFromHexInput(minutesForAltValue, true, true)}</p>
            <p>{secondsFromHexInput(minutesForAltValue, true, false)}</p>
            <p>{minInHexSecInHexFromMinInput(minutesForAltValue)}</p>
            <p>{minInAlienHexSecInAlienHexFromMinInput(minutesForAltValue)}</p>
            <p>{hoursInDecRestInHexFromHexInput(minutesForAltValue)}</p>
            <p>{hexOutputFromHexInput(minutesForAltValue)}</p>
            <p>{hoursInSeptRestInHexFromHexInput(minutesForAltValue, false)}</p>
            <p>{hoursInSeptRestInHexFromHexInput(minutesForAltValue, true)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

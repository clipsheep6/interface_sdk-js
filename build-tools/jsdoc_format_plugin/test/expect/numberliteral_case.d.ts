declare namespace NumberLiteralCase {
  numberValue1: number = 0xABCDEF;
  numberValue2: number = 0xABCDEF;
  numberValue3: number = 0xA1B2C3;

  enum NumberLiteral {
    numberValue1 = 0xABCDEF,
    numberValue2 = 0xABCDEF,
    numberValue3 = 0xA1B2C3
  }

  class NumberLiteralInterface {
    numberValue1: number = 0xABCDEF;
    numberValue2: number = 0xABCDEF;
    numberValue3: number = 0xA1B2C3;
  }
}

const numberValue1: number = 0xABCDEF;
const numberValue2: number = 0xABCDEF;
const numberValue3: number = 0xA1B2C3;

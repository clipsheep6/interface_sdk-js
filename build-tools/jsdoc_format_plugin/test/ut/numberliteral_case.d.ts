declare namespace NumberLiteralCase {
  numberValue1: number = 0xabcdef;
  numberValue2: number = 0xABCDEF;
  numberValue3: number = 0xa1b2c3;

  enum NumberLiteral {
    numberValue1 = 0xabcdef,
    numberValue2 = 0xABCDEF,
    numberValue3 = 0xa1b2c3
  }

  class NumberLiteralInterface {
    numberValue1: number = 0xabcdef;
    numberValue2: number = 0xABCDEF;
    numberValue3: number = 0xa1b2c3;
  }
}

const numberValue1: number = 0xabcdef;
const numberValue2: number = 0xABCDEF;
const numberValue3: number = 0xa1b2c3;
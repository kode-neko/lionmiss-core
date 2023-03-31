import { enumStringToList, enumNumberToList } from "./enumToList";

describe("enumToList", function () {
  enum TestEnum01 {
    "PATATA" = "patata",
    "PIMIENTO" = "pimiento",
    "POMELO" = "pomelo",
  }

  enum TestEnum02 {
    "PATATA" = 3,
    "PIMIENTO" = 6,
    "POMELO" = 100,
  }

  it("make a list values from enum object string", function () {
    const expected = ["patata", "pimiento", "pomelo"];
    const list = enumStringToList(TestEnum01);
    expect(list).toEqual(expected);
  });

  it("not equal when skiping values", function () {
    const expected = ["patata", "pimiento"];
    const list = enumStringToList(TestEnum01);
    expect(list).not.toEqual(expected);
  });

  it("make a list values from enum object number", function () {
    const expected = [3, 6, 100];
    const list = enumNumberToList(TestEnum02);
    expect(list).toEqual(expected);
  });
});

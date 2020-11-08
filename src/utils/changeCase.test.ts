import { camelToSentenceCase } from "./changeCase";

describe("camelToSentenceCase", () => {
  test("transparentColor", () => {
    expect(camelToSentenceCase("transparentColor")).toEqual(
      "Transparent Color"
    );
  });

  test("ultramarine070Color", () => {
    expect(camelToSentenceCase("ultramarine070Color")).toEqual(
      "Ultramarine 070 Color"
    );
  });
});

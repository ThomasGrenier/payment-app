import { toDateString, toLongDateString } from "../../utils/dateFormat";

beforeEach(() => {
  Object.defineProperty(navigator, "languages", {
    value: ["fr-FR"],
    configurable: true,
  });
});

describe("toDateString", () => {
  it("should return a FR formated date", () => {
    const date = new Date("2024-05-01T10:15:30");

    const result = toDateString(date);

    expect(result).toBe("01/05/2024 10:15:30");
  });

  it("should return an empty string if the date is null", () => {
    expect(toDateString(null)).toBe("");
  });
});

describe("toLongDateString", () => {
  it("should return a FR formated date", () => {
    const date = new Date("2024-05-01T00:00:00");

    const result = toLongDateString(date);

    expect(result).toBe("1 mai 2024");
  });

  it("should return an empty string if the date is null", () => {
    expect(toLongDateString(null)).toBe("");
  });
});

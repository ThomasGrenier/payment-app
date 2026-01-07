import { getBrowserLocale } from "../../helpers/getBrowserLocale";

describe("getBrowserLocale", () => {
  it("returns fr when browser language is fr-FR", () => {
    Object.defineProperty(navigator, "languages", {
      value: ["fr-FR"],
      configurable: true,
    });

    expect(getBrowserLocale()).toBe("fr");
  });

  it("returns en when browser language is en-EN", () => {
    Object.defineProperty(navigator, "languages", {
      value: ["en-US"],
      configurable: true,
    });

    expect(getBrowserLocale()).toBe("en");
  });

  it("falls back to en when browser language is unsupported", () => {
    Object.defineProperty(navigator, "languages", {
      value: ["es-ES"],
      configurable: true,
    });

    expect(getBrowserLocale()).toBe("en");
  });
});

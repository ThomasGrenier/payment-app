import { I18nProvider } from "../../i18n/i18n.provider";
import { useTranslation } from "../../hooks/useTranslation";
import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";

describe("useTranslation", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "languages", {
      value: ["fr-FR"],
      configurable: true,
    });
  });

  it("should return translation", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), {
      wrapper,
    });

    expect(result.current.t("Payment.page.title")).toBe("Mes Paiements");
  });

  it("should interpolate variable into translation", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), {
      wrapper,
    });

    expect(
      result.current.t("Payment.page.totalAmountLeftToPay", { amount: 1500 }),
    ).toBe("Total à régler 1500 €");
  });
});

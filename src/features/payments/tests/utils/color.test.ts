import { getChipColor } from "../../utils/color";

describe("getChipColor", () => {
  it("returns 'warning' for in_progress", () => {
    expect(getChipColor("in_progress")).toBe("warning");
  });

  it("returns 'warning' for pending", () => {
    expect(getChipColor("pending")).toBe("warning");
  });

  it("returns 'error' for late", () => {
    expect(getChipColor("late")).toBe("error");
  });

  it("returns 'success' for completed", () => {
    expect(getChipColor("completed")).toBe("success");
  });

  it("returns 'success' for paid", () => {
    expect(getChipColor("paid")).toBe("success");
  });

  it("returns 'default' for unknown status", () => {
    expect(getChipColor("unknown")).toBe("default");
  });

  it("returns 'default' for empty string", () => {
    expect(getChipColor("")).toBe("default");
  });
});

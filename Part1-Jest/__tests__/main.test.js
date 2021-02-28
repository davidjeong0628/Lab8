const formatVolumeIconPath = require("../assets/scripts/main");

describe("test formatVolumeIconPath()", () => {
  test("if volume > 66", () => {
    expect(formatVolumeIconPath(67)).toContain("3");
  });

  test("if volume > 33", () => {
    expect(formatVolumeIconPath(34)).toContain("2");
  });

  test("if volume > 0", () => {
    expect(formatVolumeIconPath(1)).toContain("1");
  });

  test("else", () => {
    expect(formatVolumeIconPath(0)).toContain("0");
  });
});

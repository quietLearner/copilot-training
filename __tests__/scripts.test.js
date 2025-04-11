const { validateUsername } = require("../js/scripts"); // Adjust the path if needed

describe("validateUsername", () => {
  test("should return true for a valid username", () => {
    const username = "Valid123!";
    expect(validateUsername(username)).toBe(true);
  });

  test("should return false for a username that is too short", () => {
    const username = "Short1!";
    expect(validateUsername(username)).toBe(false);
  });

  test("should return false for a username that is too long", () => {
    const username = "A".repeat(101) + "1!";
    expect(validateUsername(username)).toBe(false);
  });

  test("should return false for a username without lowercase letters", () => {
    const username = "VALID123!";
    expect(validateUsername(username)).toBe(false);
  });

  test("should return false for a username without uppercase letters", () => {
    const username = "valid123!";
    expect(validateUsername(username)).toBe(false);
  });

  test("should return false for a username without numbers", () => {
    const username = "ValidOnly!";
    expect(validateUsername(username)).toBe(false);
  });

  test("should return false for a username without special characters", () => {
    const username = "Valid123";
    expect(validateUsername(username)).toBe(false);
  });
});

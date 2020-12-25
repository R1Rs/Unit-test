import health from "../js/functionHealth";

test("test function health", () => {
  const bobick = {
    name: "Bobick",
    health: 40,
  };
  const received = health(bobick);
  const expected = "wounded";
  expect(received).toBe(expected);

  const gogick = {
    name: "Gogick",
    health: 51,
  };
  const received2 = health(gogick);
  const expected2 = "healthy";
  expect(received2).toBe(expected2);

  const logick = {
    name: "Logick",
    health: 1,
  };
  const received3 = health(logick);
  const expected3 = "critical";
  expect(received3).toBe(expected3);
});

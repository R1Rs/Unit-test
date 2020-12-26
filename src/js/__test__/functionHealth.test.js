import health from "../functionHealth";

test("test functionHealth for health >= 15 and <=50 ", () => {
  const bobick = {
    name: "Bobick",
    health: 40,
  };
  const received = health(bobick);
  const expected = "wounded";
  expect(received).toBe(expected);
});

test("test functionHealth for health > 50", () => {
  const gogick = {
    name: "Gogick",
    health: 51,
  };
  const received = health(gogick);
  const expected = "healthy";
  expect(received).toBe(expected);
});

test("test functionHealth for health < 15", () => {
  const logick = {
    name: "Logick",
    health: 1,
  };
  const received = health(logick);
  const expected = "critical";
  expect(received).toBe(expected);
});

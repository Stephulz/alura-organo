import { isValidUrl } from "./utils";

test("ensure utils isValidUrl false result", () => {
  const falseUrl = isValidUrl("qwe");
  expect(falseUrl).toBeFalsy();
});

test("ensure utils isValidUrl true result", () => {
  const trueUrl = isValidUrl("https://google.com");
  expect(trueUrl).toBeTruthy();
});

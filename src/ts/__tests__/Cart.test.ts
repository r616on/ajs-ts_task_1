import Cart from "../service/Cart";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      123,
      "Мстители",
      2000,
      2010,
      "США",
      "Аверджес что тот там",
      "Fantastic",
      2.3,
      "imax",
      "www.kinopimagimage.jpg"
    )
  );
  expect(cart.items.length).toBe(1);
});

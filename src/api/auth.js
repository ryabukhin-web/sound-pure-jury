export async function fakeLogin({ login, password }) {
  await new Promise((r) => setTimeout(r, 500)); // имитация сети
  if (!login || !password) throw new Error("Заполните поля");
  if (login !== "123" || password !== "123") {
    throw new Error("Неверный логин или пароль");
  }
  return { token: "fake-token", user: { name: login } };
}

export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ name: "hwarari", email: "hwarari@gmail.com" }),
      2000
    );
  });
};

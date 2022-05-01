export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "zerobase" }), 2000);
  });
};

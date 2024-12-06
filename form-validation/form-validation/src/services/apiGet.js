export const apiGet = async () => {
  try {
    const res = await fetch("http://localhost:3000/userInfo");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

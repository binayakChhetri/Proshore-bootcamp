export const apiPost = async (values) => {
  console.log(values);
  try {
    const res = await fetch("http://localhost:3000/userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

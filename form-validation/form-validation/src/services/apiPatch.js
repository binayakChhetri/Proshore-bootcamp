export const apiPatch = async (description) => {
  if (!description) return;
  const userId = localStorage.getItem("userId");
  try {
    const res = await fetch(`http://localhost:3000/userInfo/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
      }),
    });
    return true;
  } catch (error) {
    return false;
  }
};

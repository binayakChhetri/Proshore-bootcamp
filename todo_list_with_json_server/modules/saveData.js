import { URL } from "../script.js";

// Save data in the local storage
const saveData = async (newTodo) => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("Failed to save");
    }

    const result = await res.json();
  } catch (error) {
    console.log("Failed to save");
  }
};

export default saveData;

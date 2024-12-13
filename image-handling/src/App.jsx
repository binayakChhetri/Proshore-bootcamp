import axios from "axios";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const uploadImage = () => {
    // When we want to work with forms or inputs, you have to create a an object called FormData
    // which will hold all the data from the form
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "zdc96ihl");

    axios
      .post("https://api.cloudinary.com/v1_1/ddo4fkmzb/image/upload", formData)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload image</button>
    </div>
  );
}

export default App;

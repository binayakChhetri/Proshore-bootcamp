import axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";

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

      <Image
        cloudName="ddo4fkmzb"
        publicId="https://res.cloudinary.com/ddo4fkmzb/image/upload/v1734108336/belu1bp4p8w6mjtjhtgg.jpg"
        style={{ width: 200 }}
      />
    </div>
  );
}

export default App;

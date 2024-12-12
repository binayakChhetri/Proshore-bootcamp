import axios from "axios";
import { useState } from "react";

function App() {
  const [image, setImage] = useState({
    preview: "",
    raw: "",
  });

  const handlePhotoChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const submit = async () => {
    const formData = new FormData();
    await formData.append("image", image.raw);
    await axios
      .post(`http://localhost:3000/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return res.data;
      });
  };
  return (
    <div className="bg-yellow-300 h-screen">
      <input
        className="hidden"
        type="file"
        name="image"
        id="upload-btn"
        onChange={handlePhotoChange}
      />
      <label htmlFor="upload-btn">
        {image.preview ? (
          <img
            src={image.preview}
            alt="sample"
            width="300"
            height="300"
            className="my-10 mx-5"
          />
        ) : (
          <>
            <p className="cursor-pointer bg-slate-100 text-slate-700 text-2xl w-fit p-4 text-left ">
              {" "}
              Upload your image{" "}
            </p>
            <div></div>
          </>
        )}
      </label>
      <button
        type="button"
        onClick={submit}
        className="text-white w0full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer "
      >
        Submit
      </button>
    </div>
  );
}

export default App;

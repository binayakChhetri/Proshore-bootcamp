import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "./Button";
import { apiPatch } from "../services/apiPatch";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setDescription } from "../features/UserSlice";
export const AboutMe = () => {
  const [descript, setDescript] = useState("Write about yourself");
  const dispatch = useDispatch();
  const removeHtmlTags = (input) => {
    return input.replace(/<[^>]*>/g, "");
  };
  // This will send the user's description data to the server
  const handleSubmit = async () => {
    // console.log(description);
    const result = await apiPatch(descript);
    if (result) {
      toast.success("Successfully submitted.");
      dispatch(setDescription(descript));
      console.log(descript);
      setDescript("");
    } else {
      toast.error("Failed to submit.");
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "16px",
          },
        }}
      />{" "}
      <CKEditor
        editor={ClassicEditor}
        data="Write about yourself"
        config={{
          licenseKey:
            "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzQ2NTI3OTksImp0aSI6ImViYzgyMjBkLTFmZDgtNGY0MC04ZDI3LTVkMGVlNzU2NTAyMCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImViYzM5ZDc2In0.8KI3XUfK-WdcGWCY7kHlt_KFS2ak6V2Xjo4uP997gdhy18Un1pz96pvwZbyne8Y0CB3m4V6kGLlSNuAhQS5GtQ",
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescript(removeHtmlTags(data));
        }}
      />
      <Button
        btnType="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </>
  );
};

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export const AboutMe = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="Please write something about yourself."
      config={{
        licenseKey:
          "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzQ2NTI3OTksImp0aSI6ImViYzgyMjBkLTFmZDgtNGY0MC04ZDI3LTVkMGVlNzU2NTAyMCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImViYzM5ZDc2In0.8KI3XUfK-WdcGWCY7kHlt_KFS2ak6V2Xjo4uP997gdhy18Un1pz96pvwZbyne8Y0CB3m4V6kGLlSNuAhQS5GtQ",
      }}
      onInit={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

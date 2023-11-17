import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CkEditor({ initialContent = "" }) {
  const editorConfiguration = {
    // CKEditor 5 configuration options go here
    // For example:
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "undo",
      "redo",
      "alignment:left",
      "alignment:center",
      "alignment:right",
      "alignment:justify",
      "fontSize",
      "fontColor",
      "fontFamily",
      "highlight",
      "code",
      "indent",
      "outdent",
      "subscript",
      "superscript",
      "underline",
      "strikethrough",
      "horizontalLine",
      "codeBlock",
      "insertTable",
      "mediaEmbed",
      "imageUpload",
      "videoUpload",
    ],
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={initialContent}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, data });
        }}
      />
    </>
  );
}

export default CkEditor;

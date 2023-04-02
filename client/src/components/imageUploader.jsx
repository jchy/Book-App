import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  textAlign: "center",

};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 328,
  height: 435,
  padding: 4,
  boxSizing: "border-box",
  borderRadius:"12px"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const Previews = (props) =>{
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  return (
    <section className="container">
     { thumbs.length ?<aside style={thumbsContainer}>{thumbs}</aside> : <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div style={{
        marginTop:"60%"
      }}>
      <div
              style={{
                textAlign: "center",
                color: "#27378C",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "1.3",
                
              }}
            >
              <text>+</text>
      </div>
      <div
              style={{
                textAlign: "center",
                color: "#27378C",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "1.3",
                textDecoration: "underline",
                // position: "relative",
                // left: "50%",
                // top: "50%",
                // transform: "translate(-50%, -50%)",
              }}
            >
              <text>Add a Book Cover</text>
      </div>
      </div>
      </div>
      }
    </section>
  );
}

export default Previews;

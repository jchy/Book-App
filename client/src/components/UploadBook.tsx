import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Previews from "./imageUploader";
import { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal";

const UploadBook = () => {
  const [formState, setFormState] = useState<any>({
    name: "",
    author: "",
    read_time: "",
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr_1M--pzyyxaCpVUa_v5gQ12ksdbGOFuruu4qevmuRd0ZeE6_Zo84-WxxQ4JKRsyANWDTXajp8&usqp=CAU&ec=48665701",
  });
  const [isBookCreated, setIsBookCreated] = useState<boolean>(false);

  const createBook = async (payload: any) => {
    const book = await axios
      .post("http://localhost:5001/book", payload)
      .then((res) => {
        setIsBookCreated(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    createBook(formState);
  };
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      { isBookCreated ? <SuccessModal isBookCreated={isBookCreated}  setIsBookCreated={setIsBookCreated}/> : <div style={{ margin: "70px" }}>
        <Link
          to="/"
          style={{
            border: "2px solid #27378C",
            color: "#27378C",
            textDecoration: "none",
            padding: "8px 16px",
            fontWeight: "500",
            lineHeight: "1.25",
            fontSize: "16px",
            borderRadius: "4px",
          }}
        >
          <span style={{ top: "2px", position: "relative" }}>
            <FiChevronLeft fontWeight={500} />
          </span>
          <text style={{}}>Back to Home</text>
        </Link>
        <div
          style={{
            margin: "auto",
            gap: "2rem",
            display: "flex",
            marginTop: "28px",
          }}
        >
          <div
            style={{
              width: "25%",
              height: "435px",
              border: "1px dashed #27378C",
              borderRadius: "8px",
            }}
          >
            <Previews />
          </div>
          <form style={{ width: "75%" }} onSubmit={handleFormSubmit}>
            <div>
              <label style={{ display: "block" }}>
                Name of the Book <span style={{ color: "red" }}>*</span>
              </label>
              <input
                value={formState.name}
                name="name"
                onChange={handleFormChange}
                type="text"
                required
                style={{
                  width: "100%",
                  fontSize: "16px",
                  padding: "12px",
                  borderRadius: "4px",
                  marginTop: "6px",
                  border: "1.5px solid #CCCCCC",
                }}
                id="bookname"
                placeholder="Enter the published name"
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "3rem",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "100%" }}>
                <label style={{ display: "block" }}>
                  Author of the Book <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="author"
                  value={formState.author}
                  type="text"
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    padding: "12px",
                    borderRadius: "4px",
                    marginTop: "6px",
                    border: "1.5px solid #CCCCCC",
                  }}
                  placeholder="Add all the authors comma seperated"
                />
              </div>
              <div style={{ width: "100%" }}>
                <label style={{ display: "block" }}>
                  Book read time <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  name="read_time"
                  value={formState.read_time}
                  onChange={handleFormChange}
                  type="number"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    padding: "12px",
                    borderRadius: "4px",
                    marginTop: "6px",
                    border: "1.5px solid #CCCCCC",
                  }}
                  placeholder="Add time in mins"
                />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>
                Book Details <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                required
                name="description"
                value={formState.description}
                onChange={handleFormChange}
                style={{
                  width: "100%",
                  //   height: "38px",
                  fontSize: "16px",
                  padding: "12px",
                  borderRadius: "4px",
                  marginTop: "6px",
                  border: "1.5px solid #CCCCCC",
                  height: "142px",
                }}
                placeholder="Should not be more than 300 words"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <input
                type="submit"
                style={{
                  textDecoration: "none",
                  background: "#27378C",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid #27378C",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                value="Add book"
              />
            </div>
          </form>
        </div>
      </div>}
    </>
  );
};
export default UploadBook;

import { useEffect, useState } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await axios
        .get("http://localhost:5001/book")
        .then((res) => res?.data)
        .catch((err) => {
          console.error(err);
        });
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          marginTop: "72px",
        }}
      >
        <div style={{ fontSize: "50px", color: "#27378C" }}>
          <BiBookBookmark />
        </div>
        <div>
          <text
            style={{
              fontSize: "40px",
              color: "#27378C",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            My Books
          </text>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "91%",
          margin: "auto",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "28px",
        }}
      >
        {books.map((book: any) => {
          return (
            <Link
              to={`/book/${book?.book_id}`}
              style={{
                borderRadius: "12px",
                width: "190px",
                marginTop: "34px",
                textDecoration: "none",
              }}
            >
              <div>
                <img
                  src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81wFMY9OAFL.jpg"
                  alt="card"
                  width="190px"
                  height="272px"
                  style={{
                    borderTopRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                  }}
                />
              </div>
              <div>
                <text
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.4",
                    fontWeight: "700",
                    paddingTop: "8px",
                    fontStyle: "italic",
                  }}
                >
                  {book?.name}
                </text>
              </div>
              <div>
                <text
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.3",
                    paddingTop: "8px",
                  }}
                >
                  {book?.author}
                </text>
              </div>
            </Link>
          );
        })}
        <div
          style={{
            borderRadius: "12px",
            width: "190px",
            marginTop: "34px",
            border: "1px dashed #27378C",
            height: "272px",
          }}
        >
          <Link
            to="/book/upload"
            style={{
              position: "relative",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textDecoration: "none",
            }}
          >
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
              }}
            >
              <text>Add a Book</text>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

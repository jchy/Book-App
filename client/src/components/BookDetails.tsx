import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
const BookDetail = () => {
  const [currentBook, setCurrentBook] = useState<any>([]);
  //   const [readTime, setReadTime] = useState<any>({ hours: 0, mins: 0 });
  const { id } = useParams();
  useEffect(() => {
    const getBooks = async () => {
      const data = await axios
        .get("http://localhost:5001/books")
        .then((res) => res?.data)
        .catch((err) => {
          console.error(err);
        });
      setCurrentBook(
        data?.filter((book: any) => Number(book?.book_id) === Number(id))[0]
      );
    };
    getBooks();
  }, []);
  console.log(currentBook);
  return (
    <>
      <div style={{ margin: "70px", fontFamily: "sans-serif" }}>
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
            width: "90%",
            margin: "auto",
            gap: "2rem",
            display: "flex",
            marginTop: "28px",
          }}
        >
          <div>
            <img
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81wFMY9OAFL.jpg"
              alt=""
              width="400px"
              height="580px"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div>
            <div>
              <text
                style={{
                  color: "#27378C",
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                }}
              >
                {currentBook?.name}
              </text>
            </div>
            <div style={{ padding: "8px 0px" }}>
              <text>{currentBook?.author}</text>
            </div>
            <div style={{ padding: "8px 0px" }}>
              <text>{`Book Read Time:  ${Math.floor(
                currentBook?.read_time / 60
              )}hours ${currentBook?.read_time % 60} Mins`}</text>
            </div>
            <div style={{ padding: "16px 0px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.25",
                  fontWeight: "500",
                }}
              >
                {currentBook?.description}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "48%", fontWeight: "300" }}>
                <div>
                  <text>Summary</text>
                </div>
                <div>
                  <Rating />
                </div>
              </div>
              <div style={{ width: "1px", background: "gray" }}></div>
              <div>
                <div>
                  <text style={{ fontWeight: "300", width: "75%" }}>
                    You have not rated this book yet. Click on the button to
                    start rating.
                  </text>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Link
                    to="/"
                    style={{
                      border: "2px solid #27378C",
                      borderRadius: "8px",
                      padding: "5px 10px",
                      color: "#27378C",
                      textDecoration: "none",
                    }}
                  >
                    <text>Rate this Book</text>
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link
                to="/book/read"
                style={{
                  textDecoration: "none",
                  background: "#27378C",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                <text>Read This Book</text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;

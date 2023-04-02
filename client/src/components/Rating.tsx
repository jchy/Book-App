const Rating = () => {
  const getRatingBar = (rating: number) => {
    switch (rating) {
      case 5:
        return (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ width: "10%", marginTop: "4px" }}>
                <text>5</text>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "8px",
                  background: "#FFB400",
                  width: "90%",
                  marginTop: "10px",
                }}
              ></div>
            </div>
          </>
        );
      case 4:
        return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "10%", marginTop: "4px" }}>
              <text>4</text>
            </div>

            <div
              style={{
                background: "#FFB400",
                width: "70%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
            <div
              style={{
                background: "#f5f5f5",
                width: "20%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
          </div>
        );
      case 3:
        return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "10%", marginTop: "4px" }}>
              <text>3</text>
            </div>

            <div
              style={{
                background: "#FFB400",
                width: "50%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
            <div
              style={{
                background: "#f5f5f5",
                width: "40%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
          </div>
        );
      case 2:
        return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "10%", marginTop: "4px" }}>
              <text>2</text>
            </div>

            <div
              style={{
                background: "#FFB400",
                width: "30%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
            <div
              style={{
                background: "#f5f5f5",
                width: "60%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
          </div>
        );
      case 1:
        return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "10%", marginTop: "4px" }}>
              <text>1</text>
            </div>

            <div
              style={{
                background: "#FFB400",
                width: "10%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
            <div
              style={{
                background: "#f5f5f5",
                width: "80%",
                marginTop: "10px",
                height: "8px",
              }}
            ></div>
          </div>
        );
    }
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{getRatingBar(5)}</div>
        <div>{getRatingBar(4)}</div>
        <div>{getRatingBar(3)}</div>
        <div>{getRatingBar(2)}</div>
        <div>{getRatingBar(1)}</div>
      </div>
    </>
  );
};

export default Rating;

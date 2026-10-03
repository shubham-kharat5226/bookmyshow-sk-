import React, { useState } from "react";
import "/src/styles/AddMove.css";
import { handelError, handelSuccess } from "../../util";
import { useNavigate } from "react-router-dom";

function AddMove() {
  const [userData, setUserData] = useState({
    imageurl: "",
    title: "",
    movetime: "",
    uploadinfo: "",
    movedate: "",
    cinemascreen: "",
    movemakingplace: "",
    aboutmove: "",
  });

  const navigate = useNavigate();

  const handelInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelDataSubmit = async (e) => {
    e.preventDefault();

    const {
      imageurl,
      title,
      movetime,
      uploadinfo,
      movedate,
      cinemascreen,
      movemakingplace,
      aboutmove,
    } = userData;

    if (
      !imageurl ||
      !title ||
      !movetime ||
      !uploadinfo ||
      !movedate ||
      !cinemascreen ||
      !movemakingplace ||
      !aboutmove
    ) {
      return handelError("Please provide all fields");
    }

    try {
      const url = "https://bookmyshow-sk.onrender.com/api/v1/user/addData";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      console.log("Server Response:", result);

      const { success, message } = result;

      if (response.ok && success !== false) {
        handelSuccess(message || "Data added successfully");

        setUserData({
          imageurl: "",
          title: "",
          movetime: "",
          uploadinfo: "",
          movedate: "",
          cinemascreen: "",
          movemakingplace: "",
          aboutmove: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handelError(message || "Data adding failed");
      }
    } catch (e) {
      console.error("Fetch Error:", e);
      handelError(e.message || "Something went wrong");
    }
  };

  return (
    <div className="container-main">
      <div className="container-inner">
        <h2>Add Movie</h2>

        <form onSubmit={handelDataSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Title</label>

            <input
              type="text"
              onChange={handelInputChange}
              value={userData.title}
              name="title"
              className="form-control form-1"
              placeholder="Enter Movie Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>

            <input
              type="text"
              onChange={handelInputChange}
              className="form-control form-1"
              value={userData.imageurl}
              name="imageurl"
              placeholder="Enter image URL"
            />
          </div>

          <div className="three-input">
            <div className="mb-3">
              <label className="form-label">Movie Time</label>

              <input
                type="text"
                onChange={handelInputChange}
                value={userData.movetime}
                name="movetime"
                className="form-control form-1"
                placeholder="Enter Movie Time"
              />
            </div>

            <div className="mb-3">
              <label className="form-label lable-2">Movie Action</label>

              <input
                type="text"
                onChange={handelInputChange}
                value={userData.uploadinfo}
                name="uploadinfo"
                className="form-control form-center"
                placeholder="Enter Action"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Movie Date</label>

              <input
                type="text"
                onChange={handelInputChange}
                value={userData.movedate}
                name="movedate"
                className="form-control form-1"
                placeholder="Enter Movie Date"
              />
            </div>
          </div>

          <div className="second-row2">
            <div className="mb-3">
              <label className="form-label">Screen Type</label>

              <input
                type="text"
                onChange={handelInputChange}
                value={userData.cinemascreen}
                name="cinemascreen"
                className="form-control form-1"
                placeholder="Screen Type"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Movie Making Place</label>

              <input
                type="text"
                onChange={handelInputChange}
                value={userData.movemakingplace}
                name="movemakingplace"
                className="form-control form-1"
                placeholder="Enter Movie Making Place"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">About Movie</label>

            <textarea
              className="form-control"
              onChange={handelInputChange}
              value={userData.aboutmove}
              name="aboutmove"
              placeholder="Enter about movie"
              rows="3"
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit">Add Move</button>
        </form>
      </div>
    </div>
  );
}

export default AddMove;

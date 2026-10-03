import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/HomePage.css";
import changeImg1 from "../assets/1785494130671_fnbwebbanner.avif";
import changeImg2 from "../assets/1786438505964_lennypearce1240x300mumbai.avif";
import changeImg3 from "../assets/1787723799778_webshowcasebanner1240x300.avif";
import { handelError } from "../util";

function HomePage() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUserDat();
    if (id) {
      fetchDetailData(id);
    }
  }, [id]);

  const fetchUserDat = async () => {
    try {
      const url = "https://bookmyshow-sk.onrender.com/api/v1/user/";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(Array.isArray(data) ? data : []);

        if (data.length === 0) {
          handelError("No data found");
        }
      } else {
        handelError("Failed to fetch data");
      }
    } catch (e) {
      handelError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetailData = async (itemId) => {
    try {
      const url = `https://bookmyshow-sk.onrender.com/api/v1/user/${itemId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDetailData(data);
      } else {
        handelError("Failed to fetch item details");
      }
    } catch (e) {
      handelError(e.message);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

 

  if (userData.length === 0) {
    return (

      <div className="no-data-container">
        <div>
          <img src="src/assets/No-data-available.png" alt="No data" className="no-data-image" />
          <p>No data available</p>
        </div>

        <div className="no-data-refresh">
          <button type="button" class="btn btn-outline-danger" onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
        
      </div>
    );
  }

  return (
    <div className="container1">
      <div className="HomePage-Body">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner main-img">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={changeImg1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={changeImg2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={changeImg3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="move-container">
        <h3>Recommended Movies</h3>
        <div className="move-box">
          {userData.map((item) => (
            <div
              className="move"
              key={item._id || item.title}
              onClick={() => navigate(`/${item._id}`)}
              style={{ cursor: "pointer" }}
            > 
              <img
                className="move-img-main"
                src={item.imageurl || ""}
                alt={item.title || "Movie poster"}
              />
              <h5>{item.title}</h5>
              <p>{item.uploadinfo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

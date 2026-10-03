import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handelError, handelSuccess } from "../../util";
import "../../styles/MoveDitalPage.css";
import { Link } from "react-router-dom";
import MoveNotFoound from "../../assets/moveNotFound.avif"

function MovieDitailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singelData();
  }, [id]);

  const singelData = async () => {
    try {
      const response = await fetch(`https://bookmyshow-sk.onrender.com/api/v1/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const userdata = data;

        setUser(userdata);
      } else {
        const errorData = await response.json();
        handelError(errorData.message || "User data not found");
      }
    } catch (error) {
      handelError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="moveNotFound">
        <div>
          <img src={MoveNotFoound} alt="img" />
          <div className="btn-home">
            <Link className="btn btn-outline-primary" to={"/"}>Back to Home</Link>
          </div>
        </div>
        
      </div>
    )
  }

  const handleDelete = async () => {
    try {
      const url = `https://bookmyshow-sk.onrender.com/api/v1/user/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        handelError(result.message || "Failed to delete the movie");
        return;
      }

      handelSuccess(result.message || "Movie deleted successfully");
      navigate("/");
    } catch (error) {
      handelError(error.message || "Something went wrong");
    }
  };

  return (
    <>

      <div className="container-Movie">
        <div className="col-3">
          <div className="move">
            <img src={user.imageurl} alt={user.title} className="img-fluid" />
            <p>in cinemas</p>
          </div>
        </div>
        <div className="col-4">
          <div className="second-ineer">
            <h2>{user.title}</h2>
            <div className="info-first-box">
              {user.movetime} / {user.uploadinfo} / {user.movedate}
            </div>
            <div className="info-second-box">
              <div>{user.cinemascreen}</div>
              <div>{user.movemakingplace}</div>
            </div>
            <Link className="btn btn-primary" to={`/book/${id}`}>
              Book Now
            </Link>
            <button type="button" className="btn btn-primary" onClick={handleDelete}>
              Delete Now
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="container-Movie-second-row">
        <div className="col-9">
          <h3>About the Movie</h3>
          <p className="bolt-line-second-row">
            <b>
              Accessibility: Closed Captions (CC) & Audio Description (AD)
              available. Download the 'XL Cinema' app to access these features.
            </b>
          </p>
          <p className="about-movie">{user.aboutmove}</p>
        </div>
        <div className="col-3"></div>
      </div>
      
    </>
  );
}

export default MovieDitailPage;

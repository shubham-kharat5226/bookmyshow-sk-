import "../../styles/MoveBookingPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handelError } from "../../util";
import ARD from "../../assets/ARD-Cinema-.jpg";

function MoveBookingPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://bookmyshow-sk.onrender.com/api/v1/user/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Movie data not found");
        }

        setMovie(data);
      } catch (error) {
        handelError(error.message || "Unable to load movie data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    } else {
      setLoading(false);
      handelError("Movie id is missing");
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <main className="container-Movie-booking">
      <div className="book-top-heading">
        <h2> {movie.title} </h2>
        <div className="move-info">
          <p className="first-col">movie run time: {movie.movetime} </p>
          <p className="first-col"> {movie.cinemascreen} </p>
          <p className="first-col">{movie.uploadinfo?.split(" ")[1]}</p>
          <p className="first-col">date: {movie.movedate} </p>
        </div>
      </div>
      <div className="booking-date">
        <div className="today">Book Your Tickets Today</div>
        <div class="btn-group Hindi" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hindi
          </button>
          <ul class="dropdown-menu dropdown-menu-box">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="today-Info">
        <div className="today-Info-box-1">
          <label htmlFor=""></label>
          <div>AVAILABLE</div>
        </div>

        <div className="today-Info-box-2">
          <label htmlFor=""></label>
          <div>FAST FILLING</div>
        </div>
      </div>
      <div className="movie-booking-time">
        <div className="book-time">
          <div className="top-row">
            <img src={ARD} alt="" />
            <div className="div">
              <div className="thetar-name">ARD Cinemall: Buldhana</div>
              <div className="cancellation">Cancellation available</div>
            </div>
          </div>
          <div className="eating-food">
            <i class="fa-solid fa-burger"></i>
            <i class="fa-solid fa-mug-saucer"></i>
            <i class="fa-solid fa-ticket-simple"></i>
          </div>

          <div className="date-list">
            <div className="date">12:15 PM</div>
            <div className="date">03:15 PM</div>
            <div className="date">06:15 PM</div>
            <div className="date">09:00 PM</div>
          </div>

          <div className="best-of-lust">
            <i class="fa-solid fa-hand"></i>
          </div>
        </div>
      </div>

      <div className="move-play-idea">
        <div>Home</div>
        <i class="fa-solid fa-arrow-right-long"></i>
        <div>movies in Buldhana</div>
        <i class="fa-solid fa-arrow-right-long"></i>
        <div>Hindi Movies</div>
        <i class="fa-solid fa-arrow-right-long"></i>
        {movie.title}
      </div>

    </main>
  );
}

export default MoveBookingPage;

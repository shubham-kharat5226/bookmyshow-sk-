import React from "react";
import "/src/styles/Footer.css";
import logo from "../assets/white-logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot-Heading">
          <div className="heading-1-row">
            <p className="one">
              <i class="fa-solid fa-people-roof"></i>
            </p>

            <p className="two">
              <b>List your show</b>
            </p>

            <p className="three">
              Got a show,event,activity or a great experience? Partner with us &
              get get listed on bookMyShow
            </p>
          </div>

          <div className="heading-2-row">
            <button type="button" class="btn btn-danger">
              Contact today!
            </button>
          </div>
        </div>

        <div className="second-row">
          <div className="customer-care">
            <i class="fa-solid fa-user-tag"></i>
            <p>24/7 CUSTOMER CARE</p>
          </div>

          <div className="ticket">
            <i class="fa-solid fa-ticket"></i>
            <p>RESEND BOOKING CONFIRMATION</p>
          </div>

          <div className="newsLater">
            <i class="fa-solid fa-message"></i>
            <p>SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>

        <div className="bottom-body">
          <div className="foot-info-line-1">
            <div className="info-heading">MOVES NOW SHOWING IN BULDHANA</div>
            <div className="info-link-tags">
              <p>Toxic: A Fairy Tail for Grown-ups</p>
            </div>
          </div>
          <div className="foot-info-line-2">
            <div className="info-heading">UPCOMING MOVIES PER WEEK</div>
            <div className="info-link-tags">
              <a href="#">Upcoming Moves Today</a> <p>|</p>
              <a href="#">Upcoming Moves Tomorrow</a> <p>|</p>
              <a href="#">Upcoming Moves This Weekend</a>
            </div>
          </div>

          <div className="bottom-area">
            <div className="bottom-logo">
              <p>-</p>
              <img src={logo} alt="Logo" />
              <p>-</p>
            </div>
            <div className="bottom-app">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-square-youtube"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className="bottom-last-info">
            <div>
              Copyright 2026 ©Bigtree Entertainment Pvt. Ltd.All Rights
              Reserved.
            </div>
            <div>
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
            </div>
            <div>Unauthorized use is prohibited and punishable by law.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

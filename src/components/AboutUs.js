import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <div className="about-us-paragraph">
      <h2>🚗 Welcome to our website!</h2>
      <p>
        At Fast-X-RentalsForSale, we are proud to offer you a unique opportunity to
        find quality used vehicles that are relatively newer and well-maintained.
        As a specialized platform, we bring you a selection of cars sourced directly
        from reputable car rental companies.
      </p>
      <p>
        Our mission is simple – to connect you with fantastic deals on used rental
        vehicles that are typically replaced every 1 to 3 years. This means you can
        enjoy the benefits of owning a car that still feels fresh and modern, without
        the hefty price tag of a brand-new vehicle. We believe in providing our customers
        with the best value for their money, and our diverse inventory of relatively newer
        cars exemplifies just that.
      </p>
      <p>
        With locations spanning from the east coast to the west coast, we strive to bring
        convenience and accessibility to your car buying experience. No matter where you
        are, you can count on us to offer competitive prices and a transparent process that
        ensures you find the perfect vehicle to fit your needs and budget.
      </p>
      <p>
        Our team is committed to making your car buying journey as smooth as possible. We
        provide detailed vehicle histories and information, empowering you to make informed
        decisions and have confidence in your purchase. Customer satisfaction is our priority,
        and we are here to assist you every step of the way.
      </p>
      <p>
        Discover the advantages of purchasing a relatively newer used car from Fast-X-RentalsForSale.
        Experience the joy of driving a quality vehicle without compromising on your budget.
        Browse our inventory today and find your perfect match!
      </p>
      <p>
        Thank you for choosing us to be a part of your car buying adventure. We look forward to
        serving you and helping you find the ideal used vehicle for your needs.
      </p>
      <p>Happy car shopping!</p>
      <p>The Fast-X-RentalsForSale Team</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

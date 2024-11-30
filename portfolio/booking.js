import React from "react";
import styles from "../Booking.module.css";

const Booking = () => {
  return (
    <div className={styles.bookingContainer}>
      {/* Header */}
      <header className={styles.bookingHeader}>
        <h1>Book a Session</h1>
        <p>Select a package, filter slots, and book your session conveniently.</p>
      </header>

      {/* Step 1: Package Selection */}
      <section className={styles.packageSelection}>
        <h2>Select Package</h2>
        <div className={styles.packages}>
          <div className={styles.package}>
            <h3>Basic Session</h3>
            <p>Duration: 30 mins</p>
            <p>Price: $50</p>
            <button>Select</button>
          </div>
          <div className={styles.package}>
            <h3>Extended Session</h3>
            <p>Duration: 60 mins</p>
            <p>Price: $90</p>
            <button>Select</button>
          </div>
        </div>
      </section>

      {/* Step 2: Slot Selection */}
      <section className={styles.slotSelection}>
        <h2>Choose a Slot</h2>
        <label htmlFor="mode">Therapy Mode:</label>
        <select id="mode">
          <option>In-person</option>
          <option>Video Call</option>
        </select>
        <h3>Available Slots</h3>
        <div className={styles.slots}>
          <button>10:00 AM - 10:30 AM</button>
          <button>11:00 AM - 11:30 AM</button>
          <button>3:00 PM - 3:30 PM</button>
        </div>
      </section>

      {/* Step 3: Personal Details */}
      <section className={styles.personalDetails}>
        <h2>Your Details</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="employer-code">Employer Code (if applicable):</label>
          <input type="text" id="employer-code" placeholder="Enter code" />

          <button type="submit">Confirm Booking</button>
        </form>
      </section>
    </div>
  );
};

export default Booking;
const textShort = document.getElementById("text-short");
    const textFull = document.getElementById("text-full");
    const dots = document.getElementById("dots");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", () => {
      if (textFull.style.display === "none") {
        textFull.style.display = "inline";
        dots.style.display = "none";
        toggleBtn.textContent = "Show less";
      } else {
        textFull.style.display = "none";
        dots.style.display = "inline";
        toggleBtn.textContent = "Read more";
      }
    });
import React from "react";

const ContactusEmail = () => {
  return (
    <div className="pc" style={{ marginTop: "80px", marginBottom: "50px" }}>
      <center>
        <form action="https://formspree.io/f/maykgeab" method="POST">
          <label>
            Your email: <br />
            <input type="email" style={{ width: "500px" }} name="email" />
          </label>
          <br />
          <label>
            Your message:
            <br />
            <textarea style={{ width: "500px" }} name="message"></textarea>
          </label>
          <br />
          <button
            style={{
              padding: "5px 30px",
              border: "none",
              background: "darkgray",
              borderRadius: "5px",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </center>
    </div>
  );
};

export default ContactusEmail;

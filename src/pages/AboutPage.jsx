import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div style={{ "margin-top": "100px", "margin-left": "10px" }}>
      <h1 style={{ "font-size": "50px" }}>Feedback App</h1>
      <p className="mb-4 text-2xl font-light " style={{ "font-size": "20px" }}>
        A react app to submit feedback with rating.
      </p>
      <p>
        By:
        <a
          href="https://github.com/khalidWid"
          style={{
            "font-size": "20px",
            color: "pink",
            "margin-left": "10px",
          }}
        >
          khalid id-ouarab
        </a>
      </p>
      <Link to="/">
        <button
          className="about"
          style={{
            "margin-top": "10px",
          }}
        >
          <strong>Go back to home page</strong>
        </button>
      </Link>
    </div>
  );
}

export default AboutPage;

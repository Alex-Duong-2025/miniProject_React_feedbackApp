import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is my first React miniproject</h1>
        <Link to="/">
          <p>Back to Home</p>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;

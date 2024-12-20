import React from "react";

const homediv = {
  margin: "5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

function Home() {
  return (
    <div style={homediv}>
      <h3>Here's how to play Secret Santa</h3>

      <p>Participants register their names, each participant draws a name.</p>

      <p>
        The person who draws a name is the Secret Santa of the person whose name
        is drawn.
      </p>
      <p>
        The Secret Santa gifts the person, after receiving their gifts, the
        giftee guesses who their Secret Santa is.
      </p>

      <img
        src="https://www.gwsmedia.com/sites/default/files/blog/images/Know%20the%20Law%20on%20Copyright.jpg"
        alt="Christmas background"
      ></img>
    </div>
  );
}

export default Home;

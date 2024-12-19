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

      <p>Participants register their names.</p>
      {/* <p>Names are mixed up.</p> */}
      <p>Each participant draws a name.</p>
      <p>
        The person who draws a name is the Secret Santa of the person whose name
        is drawn.
      </p>
      <p>The Secret Santa gifts the person.</p>
      <p>
        After opening their present, the giftee guesses who their Secret Santa
        is.
      </p>
    </div>
  );
}

export default Home;

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createFrame(details) {
  return (
    <Entry
      key={details.id}
      emoji={details.emoji}
      name={details.name}
      description={details.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createFrame)}</dl>
    </div>
  );
}

export default App;

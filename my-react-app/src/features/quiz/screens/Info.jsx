function Info({ state, dispatch }) {
  return (
    <div className="info-page">
      <h1>The Sims Quiz</h1>

      <div className="info-layout">
        <div className="info-column">
          <h2>What is the quiz?</h2>
          <p className="info-text">
            The Sims quiz is just a short, 10 question quiz containing a variety of
            questions about the Sims (mostly the Sims 4).
          </p>

          <h2>What will the quiz look like?</h2>
          <p className="info-text">
            The quiz will contain either true/false or multiple choice questions, so
            you can always guess if you don’t know!
          </p>
        </div>

        <div className="info-column">
          <h2>How do you get my results?</h2>
          <p className="info-text">
            Your results will be displayed as a percentage once you've completed the
            quiz!
          </p>

          <h2>How do I take the quiz?</h2>
          <p className="info-text">
            By clicking the "Take The Quiz!" button, you'll be taken to the quiz to
            begin!
          </p>
        </div>

        <button className="info-page-button" onClick={() => dispatch({ type: "GO_HOME" })}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Info;
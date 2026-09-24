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
           Your results will be displayed as a percentage once you've completed the quiz! As there are only 10 questions, it's a pretty easily calculation.
          </p>
          <p className="info-text">
           **For future release, I'd like to assign a grade to each percent group**
          </p>
          <p className="info-text">
           This will be a very early release of this quiz, so keep out for new features in the future!
          </p>

          <h2>How do I take the quiz?</h2>
            <p className="info-text">
              That's easy! All I ask is that you read through this section first, just so that you understand both how to take the quiz, and how your results are calculated.
            </p>
            <p className="info-text">
              By clicking the "Start Quiz" button, you'll be taken to the quiz to begin!
            </p>
            <p className = "info-text">
              **note: the feature to save your progress may not be available upon initial launch** 
              </p>
            <p className="info-text">
              Once you've answered all 10 questions, you'll be able to see your results!
            </p>
        </div>

        <div className = "info-page-actions">
        <button className="info-page-button" onClick={() => dispatch({ type: "GO_HOME" })}>
          Go Home
        </button>

        <button className="info-page-button"  onClick={() => dispatch({ type: "START_QUIZ" })}>
          Start Quiz
        </button>
        </div>

      </div>
    </div>
  );
}

export default Info;
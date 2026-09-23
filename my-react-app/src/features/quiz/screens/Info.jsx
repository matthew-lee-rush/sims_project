function Info({ state, dispatch }) {
  return (
    <div>
      <h1>The Sims Quiz</h1>

      <h2>What is the quiz?</h2>
      <p>The Sims quiz is just a short, 10 question quiz containing a variety of questions about the Sims (mostly the Sims 4)
            
            As part of my course with CodeAcademy, I'm learning to code/ the skill of web development, so making a small site like this is a perfect way to show off my skills! </p>

        <h2>How do you get my results?</h2>
        <p> Your results will be displayed as a percentage once you've completed the quiz! As there are only 10 questions, it's a pretty easily calculation.

            **For future release, I'd like to assign a grade to each percent group**
            
            This will be a very early release of this quiz, so keep out for new features in the future!</p>

        <h2>How do I take the quiz?</h2>
        <p>That's easy! All I ask is that you read through this section first, just so that you understand both how to take the quiz, and how your results are calculated.
        
        By clicking the "Take The Quiz!" button, you'll be taken to the quiz to begin!
        **note: the feature to save your progress may not be available upon initial launch**
        
        Once you've answered all 10 questions, you'll be able to see your results!</p>
        
        <h2>What will the quiz look like?</h2>
        <p>The quiz will contain either true/false or multiple choice questions, so you can always guess if you don’t know!</p>

        <button className = "button" onClick={() => dispatch({ type: "GO_HOME" })}>
                Go Home
        </button>

    </div>
  );
}

export default Info;
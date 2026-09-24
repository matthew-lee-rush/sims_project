function QuestionCard({ question }) { 
    return (
        <div className = "question-card">
            <h1 className="h1">The Sims Quiz</h1>

            <h2 className = "question-text">{question.question}</h2>

            {question.image && (
                <img
                className="question-image"
                src={question.image} 
                alt="image relating to the question"  
              />
            )}
        </div>
    );

}

export default QuestionCard;
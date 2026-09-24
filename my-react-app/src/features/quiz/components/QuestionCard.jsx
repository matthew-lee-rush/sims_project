function QuestionCard({ question }) { 
    return (
        <div className = "question-card">
            <h1 className="h1">The Sims Quiz</h1>
            <h2 className = "question-text">{question}</h2>
        </div>
    );

}

export default QuestionCard;
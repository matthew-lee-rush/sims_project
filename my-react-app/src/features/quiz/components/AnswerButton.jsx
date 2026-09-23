function AnswerButton({ answer, onClick, disabled }) {
  return <button className="button" onClick={onClick} disabled={disabled}>
    {answer}
  </button>;
}

export default AnswerButton;
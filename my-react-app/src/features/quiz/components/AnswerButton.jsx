function AnswerButton({ answer, onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled}>
    {answer}
  </button>;
}

export default AnswerButton;
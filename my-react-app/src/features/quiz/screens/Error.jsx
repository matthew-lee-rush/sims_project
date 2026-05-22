function Error({ dispatch }) {
  return (
    <div>
      <h1>Uh Oh!</h1>
      <p>Something went wrong on our end, we're working on it!</p>

       <button onClick={() => dispatch({ type: "GO_HOME" })}>
        Back Home
      </button>
    </div>
  );
}

export default Error;
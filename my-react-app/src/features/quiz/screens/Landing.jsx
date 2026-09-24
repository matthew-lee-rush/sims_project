import logoImage from "../../../assets/images/app-images/logo.png";

function Landing({ dispatch }) {
    return (
        <div className="landing-page">

            <h1>The Sims Quiz</h1>

            
            <img className="logo-image" src={logoImage} alt="Logo"/>

            <div className="landing-actions">
                <button className="button" onClick={() => dispatch({ type: "GO_INFO" })}>
                    Learn More
                </button>

                <button className="button"  onClick={() => dispatch({ type: "START_QUIZ" })}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
}

export default Landing;

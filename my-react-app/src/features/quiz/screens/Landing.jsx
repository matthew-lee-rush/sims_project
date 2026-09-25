import logoImage from "../../../assets/images/app-images/logo.png";
import starClusterImg from "../../../assets/images/app-images/star-graphic-cluster.png";
import starImg from "../../../assets/images/app-images/starGraphic.png";

function Landing({ dispatch }) {
    return (
        <div className="landing-page">

            <h1>The Sims Quiz</h1>

            
            <img className="logo-image" src={logoImage} alt="Logo"/>

            <img className="star-image-left" src={starImg} alt="Star graphic"/>
            <img className="star-cluster-image" src={starClusterImg} alt="Star Cluster"/>
            <img className="star-image" src={starImg} alt="Star graphic"/>
        

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

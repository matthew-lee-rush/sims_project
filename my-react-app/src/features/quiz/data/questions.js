import bellaGothImage from '../../../assets/images/question-images/bellaGothPFP.webp';
import getFamousImage from '../../../assets/images/question-images/getFamous.webp';
import johnnyZestImage from'../../../assets/images/question-images/johnnyZestPFP.webp';
import oasisSpringsParkImage from '../../../assets/images/question-images/Oasis_springs_map.webp';
import servoImage from'../../../assets/images/question-images/servo.webp';
import plumbobImage from'../../../assets/images/question-images/simsPlumbob.png';

const questions = [
    {
        id: 1,
        question: "A sim can die from becoming too playful.",
        answers: ["True", "False"],
        correct: "True",
    },

    {
        id: 2,
        question: "Alien abductions can result in pregnancy, even in male sims.",
        answers: ["True", "False"],
        correct: "True",
    },

    {
        id: 3,
        question: "Sims can trip on the stairs.",
        answers: ["True", "False"],
        correct: "False",
    },

    {
        id: 4,
        question: "You can WooHoo on the new Playground equipment from Adventure Awaits.",
        answers: ["True", "False"],
        correct: "False",
    },

    {
        id: 5,
        question: "What's the name of this sim?",
        image: bellaGothImage,
        answers: ["Bella Goth", "Nancy Langraab", "Dina Caliente", "Lara Landgraab"],
        correct: "Bella Goth",
    },

    {
        id: 6,
        question: "What is the object called that appears above a Sim's head?",
        image: plumbobImage,
        answers: ["Plumbob", "Simoleon", "Whisperer", "Moodlet"],
        correct: "Plumbob",
    },  
    
    {
        id: 7,
        question: "What is the name of the park in Oasis Springs?",
        image: oasisSpringsParkImage,
        answers: ["Sunset Park", "Oasis Springs Park", "Spring Park", "Desert Bloom Park"],
        correct: "Desert Bloom Park",
    },

    {
        id: 8,
        question: "Which family is Johnny Zest secretly a part of?",
        image: johnnyZestImage,
        answers: ["Landgraab", "Caliente", "Goth", "Pleasant"],
        correct: "Landgraab",
    },

    {
        id: 9,
        question: "Which real-life city is the world of Del Sol Valley inspired by?",
        image: getFamousImage,
        answers: ["Los Angeles", "Miami", "New York", "San Francisco"],
        correct: "Los Angeles",
    },

    {
        id: 10,
        question: " What are the robots called from Discover University? ",
        image: servoImage,
        answers: ["RoboSims", "SimBots", "Servos", "Plumbos"],
        correct: "Servos",
    }
];

export default questions;
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Encouraging sentences
const sentences = [
    "Done is better than perfect.",
    "Small progress is still progress.",
    "Action beats overthinking.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Perfection is just procrastination in disguise.",
    "A year from now, you'll wish you started today.",
    "Discipline will take you further than motivation.",
    "Stop waiting for the perfect time; it will never come.",
    "You control your habits. Make them work for you.",
    "Success comes from consistency, not occasional bursts.",
    "Fail fast, learn faster.",
    "Your future self is watching. Make them proud.",
    "Don’t let fear decide your future.",
    "You are stronger than your excuses.",
    "If you commit to nothing, you’ll be distracted by everything.",
    "Start before you feel ready.",
    "The secret of getting ahead is getting started.",
    "Growth comes from discomfort.",
    "Your potential is limitless. Don’t waste it on hesitation.",
    "You don’t need motivation. You need discipline.",
    "Every expert was once a beginner.",
    "Break big tasks into small steps and just do one.",
    "Make it easy to start, and momentum will carry you.",
    "You are one decision away from a completely different life.",
    "Your dreams don’t work unless you do.",
    "Make progress, not excuses.",
    "Think less, do more.",
    "Nobody’s judging you as hard as you think.",
    "The best way to predict the future is to create it.",
    "Stop planning. Start doing."
];

// API Routes
app.get("/random", (req, res) => {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    res.json({ message: randomSentence });
});

app.get("/all", (req, res) => {
    res.json({ messages: sentences });
});

app.listen(PORT, () => {
    console.log(`🔥 Encouragement API is running at http://localhost:${PORT}`);
});


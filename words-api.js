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
    "Stop planning. Start doing.",
    "Distraction is a trap—your goals deserve better.",
    "Your work won’t do itself. Get up and make it happen.",
    "Future you will thank you for the effort you put in today.",
    "Scrolling won’t get you closer to your dreams—action will.",
    "If it’s important to you, act like it.",
    "Discipline now means freedom later.",
    "Procrastination steals your time, but you can take it back.",
    "The hardest part is starting—after that, it gets easier.",
    "You don’t need to feel like it. You just need to do it.",
    "Be the kind of person who follows through.",
    "A few hours of focused work can change your entire week.",
    "Imagine how unstoppable you’d be if you stopped making excuses.",
    "The longer you wait, the harder it gets. Just begin.",
    "Get comfortable being uncomfortable—that’s where growth happens.",
    "You already know what you need to do. Now, go do it.",
    "Winning the day starts with winning this moment.",
    "You owe it to yourself to stay focused.",
    "You can rest when the work is done.",
    "Every moment you waste is a moment you’ll never get back.",
    "You’re building your future right now—make it count."
];

// API Routes
app.get("/random", (req, res) => {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    res.json({ messages: randomSentence });
});

app.get("/all", (req, res) => {
    res.json({ messages: sentences });
});

app.listen(PORT, () => {
    console.log(`🔥 Encouragement API is running at http://localhost:${PORT}`);
});


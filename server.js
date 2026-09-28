const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static("."));

app.post("/ask", async (req, res) => {
    try {
        const question = req.body.question;

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: question
        });

        res.json({
            answer: response.text
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            answer: "Sorry, something went wrong."
        });
    }
});

app.listen(3000, () => {
    console.log("EduGenie running at http://localhost:3000");
});
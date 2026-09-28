# EduGenie

## Google Gemini Powered Learning Assistant

EduGenie is a Generative AI based learning assistant developed using Google Gemini. It allows students to ask academic questions and receive AI-generated answers through a simple and user-friendly web interface.

## Project Team

1. Nivetha V
2. Kajal R
3. Kamalesh K
4. Ramya Sri K
5. Yogesh C

**Department:** Information Technology  
**College:** Kathir College of Arts and Science  
**Academic Year:** 2026–2027

## Project Objectives

- To provide students with an easy-to-use AI learning assistant.
- To generate subject-specific academic answers using Google Gemini.
- To support exam answers such as 2, 3, 5, 8 and 10 marks.
- To provide an interactive quiz generation feature.
- To allow students to enter questions using voice input.
- To allow generated answers to be copied easily.
- To demonstrate the practical use of Generative AI in education.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Google Gemini API
- dotenv

## Project Structure

```text
EduGenie/
├── index.html
├── server.js
├── package.json
└── package-lock.json

Features
Subject Selection
Students can select subjects such as General, Tamil, English, RDBMS, JavaScript, Microprocessor and Data Structures.
Exam Answer Mode
Students can select Normal Answer, 2 Mark, 3 Mark, 5 Mark, 8 Mark or 10 Mark Answer.
AI Question Answering
Students can enter academic questions and receive AI-generated answers using Google Gemini.
Quiz Mode
The Quiz feature generates multiple-choice questions with four options: A, B, C and D. It also indicates whether the selected answer is correct or wrong.
Voice Input
The Speak button uses the browser's Speech Recognition API when supported.
Copy Answer
The Copy Answer button allows students to copy the generated answer easily.
Enter Key Support
Students can press Enter to submit a question without clicking the Ask button.
User Interface
The interface contains the EduGenie title, subject selector, answer-mode selector, question box, voice button, quiz button, AI answer area and copy button.
How the Application Works
The student opens EduGenie.
The student selects a subject.
The student selects an answer mode.
The student types a question or uses the Speak button.
JavaScript creates the prompt.
The browser sends the request to the Express /ask endpoint.
The backend reads the Gemini API key from the .env file.
The backend sends the request to Google Gemini.
Gemini generates the response.
The backend returns the answer as JSON.
The frontend displays the answer.
The student can copy the generated answer.
How to Run
Open the EduGenie folder in VS Code.
Open the VS Code terminal.
Make sure Node.js and npm are installed.
Make sure the .env file is present.
Install the required packages:
npm install
Start the server:
node server.js
Open:
http://localhost:3000
Select a subject and ask a question.
Security
The Gemini API key is stored in the .env file instead of being written directly into the source code.
The actual API key should not be shared publicly or committed to GitHub.
Testing Performed
Tested the EduGenie web page.
Tested normal AI question answering.
Tested subject selection.
Tested mark-based answer modes.
Tested quiz generation.
Tested quiz option selection.
Tested voice input.
Tested Enter-key submission.
Tested Copy Answer functionality.
Example Usage
Example 1
Subject: RDBMS
Mode: 5 Mark Answer
Question: Explain DML statements.
Example 2
Subject: Microprocessor
Mode: 3 Mark Answer
Question: What is an interrupt?
Example 3
Subject: JavaScript
Mode: Normal Answer
Question: Explain JavaScript arrays.
Advantages
Simple and student-friendly interface.
AI-generated answers based on subject and mark level.
Supports multiple academic subjects.
Includes quiz generation.
Supports voice input on compatible browsers.
Answers can be copied easily.
Demonstrates practical Generative AI integration.
Limitations
Answer quality depends on the AI response.
Internet access is required for Gemini API requests.
Voice input depends on browser support.
Quiz mode is a basic interactive quiz.
Gemini API key must be configured correctly.
Future Enhancements
User login and personalized learning history.
Multiple-question quiz sessions with persistent scores.
Study planner and daily learning goals.
AI-generated summaries and notes.
Tamil voice input and multilingual support.
Database integration for storing questions, answers and quiz scores.
Cloud deployment.
Additional learning tools and analytics.
Conclusion
EduGenie demonstrates how Generative AI can be used to support student learning. The project combines a simple web interface with a Node.js/Express backend and Google Gemini to provide subject-based answers, exam-oriented responses, quizzes, voice input and answer-copy functionality.
The application can be extended further with personalization, databases, analytics and additional learning tools.
References
Google Gemini / Google AI Developer Documentation
Node.js Documentation
Express.js Documentation
npm Documentation
Visual Studio Code DocumentationFuture Enhancements
User login and personalized learning history.
Multiple-question quiz sessions with persistent scores.
Study planner and daily learning goals.
AI-generated summaries and notes.
Tamil voice input and multilingual support.
Database integration for storing questions, answers and quiz scores.
Cloud deployment.
Additional learning tools and analytics.
Conclusion
EduGenie demonstrates how Generative AI can be used to support student learning. The project combines a simple web interface with a Node.js/Express backend and Google Gemini to provide subject-based answers, exam-oriented responses, quizzes, voice input and answer-copy functionality.
The application can be extended further with personalization, databases, analytics and additional learning tools.
References
Google Gemini / Google AI Developer Documentation
Node.js Documentation
Express.js Documentation
npm Documentation
Visual Studio Code Documentation

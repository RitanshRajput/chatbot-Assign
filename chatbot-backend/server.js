// Backend Formatted Code:
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.use("/api", questionRoutes);
app.use("/api", chatRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Backend Unformatted Code :
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// // Models
// // const Question = mongoose.model(
// //   "Question",
// //   new mongoose.Schema({
// //     question: String,
// //     response: String,
// //   })
// // );

// // const ChatHistory = mongoose.model(
// //   "ChatHistory",
// //   new mongoose.Schema({
// //     userMessage: String,
// //     botResponse: String,
// //     timestamp: { type: Date, default: Date.now },
// //   })
// // );

// const questionsData = [
//   {
//     question: "Who is Ritansh Singh?",
//     response:
//       "Ritansh Singh is a coding ninja from Pune, India, juggling frontend and backend development like a pro magician who never drops a hat.",
//   },
//   {
//     question: "What does Ritansh do in his free time at work?",
//     response:
//       "He simultaneously handles two projects—a company website and a client's project—because multitasking is his superpower. Oh, and he does it all with Next.js, Tailwind CSS, and a sprinkle of Redux Toolkit magic!",
//   },
//   {
//     question: "What’s one impressive thing Ritansh has built?",
//     response:
//       "An end-to-end full-stack clothing website. From React.js to MySQL and Django, he stitched it together with Tailwind CSS and Postman, making him the tailor of tech solutions!",
//   },
//   {
//     question: "What’s Ritansh’s secret weapon?",
//     response:
//       "A toolbox full of HTML5, CSS3, Python, React.js, Next.js, Django, Node.js, and other cool gadgets. Oh, and don’t forget his sense of humor and go-to attitude!",
//   },
//   {
//     question: "Why does Ritansh want to work with us?",
//     response:
//       "Because your team is amazing (his words, not ours), and he wants to grow, learn, and help create impactful, innovative solutions. Plus, who wouldn’t want a team player who cracks jokes while solving complex problems?",
//   },
//   {
//     question: "What are Ritansh’s non-technical superpowers?",
//     response:
//       "Problem-solving, team management, and a good sense of humor to make daily standups less 'stand up' and more 'fun up.'",
//   },
//   {
//     question: "Is Ritansh a good hire?",
//     response:
//       "Absolutely! With long-term commitment, honesty, and skills that rival a tech superhero, he’s ready to contribute meaningfully to your team. Plus, he promises not to break the coffee machine!",
//   },
//   {
//     question: "What is the meaning of life?",
//     response:
//       "The meaning of life is subjective and can vary for everyone. Many believe it's about finding happiness, building connections, and making a positive impact!",
//   },
//   {
//     question: "Tell me a joke!",
//     response: "Why don’t skeletons fight each other? Because they don’t have the guts!",
//   },
//   {
//     question: "Who invented the computer?",
//     response:
//       "The concept of the computer was first introduced by Charles Babbage in the 19th century, often called the 'father of the computer'!",
//   },
//   {
//     question: "Can you recommend a book?",
//     response:
//       "Sure! If you like adventure, try 'The Alchemist' by Paulo Coelho. If you're into mysteries, check out 'Gone Girl' by Gillian Flynn.",
//   },
// ];

// // Initialize app
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/chatbot")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // MongoDB document insertion, using IIFE
// (async () => {
//   try {
//     await Question.insertMany(questionsData);
//     console.log("Questions inserted successfully!");
//   } catch (err) {
//     console.error("Error inserting questions:", err);
//   }
// })();

// // Routes
// // Prebuilt questions
// app.get("/questions", async (req, res) => {
//   const questions = await Question.find();
//   res.json(questions.map((q) => q.question));
// });

// // Chat route
// app.post("/chat", async (req, res) => {
//   const { query } = req.body;
//   const answer = await Question.findOne({ question: query });

//   if (answer) {
//     const botResponse = answer.response;
//     await ChatHistory.create({ userMessage: query, botResponse });
//     return res.json(botResponse);
//   }

//   const fallback = "Sorry, I don't understand that question.";
//   await ChatHistory.create({ userMessage: query, botResponse: fallback });
//   res.json(fallback);
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
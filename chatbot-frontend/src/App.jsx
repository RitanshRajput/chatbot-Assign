import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch prebuilt questions
  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((res) => setQuestions(res.data));
  }, []);

  const handleQuestionClick = async (question) => {
    if (loading) return;
    const userMessage = { text: question, sender: "user" };

    // Add user message to the state
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setTyping(true);
    setLoading(true);

    // Simulate a delay for the bot response
    try {
      const response = await axios.post("http://localhost:5000/chat", { query: question });

      // Append bot response after user message
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: response.data, sender: "bot" }]);
        setTyping(false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching response:", error);
      setTyping(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#212121", color: "white" }}>
      {/* Left Side: Questions Section */}
      <div className="w-1/3 p-4 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">Questions Bank ?</h2>
        <div className="overflow-y-auto h-[80vh] pt-5">
          {questions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleQuestionClick(q);
                setFirstVisit(false);
              }}
              disabled={loading}
              className="block w-full text-left bg-gray-800 text-white px-3 py-2 mb-2 rounded hover:bg-gray-700"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side: Chat Section */}
      <div className="w-2/3 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">ChatBuddy 🧑🏻‍💻</h1>
        <div
          className="overflow-y-auto h-[70vh] border border-gray-700 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          {firstVisit && (
            <p className="text-center text-gray-400 mb-4">
              Click on any question from the question bank and start this app.
            </p>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === "user" ? "bg-orange-500 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}

          {typing && <p className="italic text-gray-400">Typing...</p>}
        </div>
        {messages.length > 0 && (
          <div className="mt-4 text-center w-[180px]">
            <button
              onClick={() => {
                setMessages([]);
                setFirstVisit(true);
              }}
              className="w-full bg-blue-500 text-white px-3 py-2 rounded"
            >
              Clear this chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

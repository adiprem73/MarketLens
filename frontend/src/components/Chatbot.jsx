import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I'm your personal assistant for all your business and stock market queries. How can I help you today?",    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showVoiceTooltip, setShowVoiceTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = `$You are a Business and Stock Market assistant. Respond in 60 words. Users may ask questions or write prompts (e.g., "best stocks to buy today", "explain inflation"). Only if the input is clearly unrelated to business, finance, or stock markets (like personal advice, jokes, or math problems), respond: "Sorry! This question is unrelated to Business or Stock Markets. I’d be happy to assist you with financial and market queries instead." Otherwise, give a concise helpful response. Question or query: ${inputValue}`;

    setMessages([...messages, { type: "user", content: inputValue }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC5dlpsK6fqLV9ebsyuBFHkRo7ILjQmoFo",
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: userMessage,
                },
              ],
            },
          ],
        },
      });

      const aiReply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages((prev) => [...prev, { type: "bot", content: aiReply }]);
    } catch (error) {
      console.error("Error fetching from Gemini:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Oops! Something went wrong. Try again." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleVoiceCommand = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setTimeout(() => sendMessage(), 500);
      };

      recognition.start();
    } else {
      alert("Voice recognition is not supported in your browser.");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    const inputElement = document.getElementById("chat-input");
    if (inputElement) inputElement.focus();
  };

  const suggestions = [
    "Best Stock Picks",
    "Investment Recommendations",
    "Compare Stocks",
    "Market News",
    "Stock Analysis",
  ];

  return (
    <div className="font-sans text-gray-100 min-h-screen flex items-center justify-center bg-gray-900">
      

      {/* Chat trigger button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat with Sentinel"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gray-900 border border-cyan-400 shadow-lg flex items-center justify-center cursor-pointer z-50 hover:scale-105 transition-all duration-300 group"
        style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)" }}
      >
        <div className="absolute w-full h-full rounded-full animate-pulse opacity-30 bg-cyan-400"></div>
        <i
          className={`fas ${
            isOpen ? "fa-times" : "fa-chart-line"
          } text-cyan-400 text-xl group-hover:text-cyan-300`}
        ></i>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 w-[350px] h-[500px] bg-[#0A192F] border border-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          boxShadow: isOpen ? "0 0 20px rgba(6, 182, 212, 0.2)" : "none",
        }}
      >
        {/* Chat header */}
        <div className="h-[60px] px-4 flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 border border-cyan-400">
              <i className="fas fa-arrow-trend-up text-cyan-500"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Investment Assistant</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
                Online
              </div>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-white cursor-pointer"
            aria-label="Close chat"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Chat messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-4 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4a5568 #1a202c",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 max-w-[85%] ${
                message.type === "user" ? "ml-auto" : "mr-auto"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-gray-800 text-white rounded-br-none"
                    : "bg-gray-800 border border-gray-700 text-white rounded-bl-none"
                }`}
                style={{
                  boxShadow:
                    message.type === "bot"
                      ? "0 0 10px rgba(0, 255, 0, 0.1)"
                      : "none",
                }}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="mb-4 max-w-[85%] mr-auto">
              <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Suggestion chips */}
        <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-full cursor-pointer whitespace-nowrap border border-gray-600 hover:border-cyan-400 transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="h-[60px] p-2 bg-gray-800 border-t border-gray-700 flex items-center gap-2">
          <div className="relative">
            <button
              onClick={handleVoiceCommand}
              onMouseEnter={() => setShowVoiceTooltip(true)}
              onMouseLeave={() => setShowVoiceTooltip(false)}
              className={`bg-gray-700 hover:bg-gray-600 text-cyan-400 px-3 h-[40px] flex items-center justify-center cursor-pointer transition-all duration-300 rounded ${
                isListening ? "animate-pulse ring-2 ring-cyan-400" : ""
              }`}
            >
              <i
                className={`fas fa-microphone ${
                  isListening ? "text-red-400" : "text-cyan-400"
                }`}
              ></i>
            </button>
            {showVoiceTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-cyan-400 text-sm rounded-lg whitespace-nowrap border border-cyan-400 shadow-lg">
                Shop with your voice
              </div>
            )}
          </div>
          <input
            id="chat-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about stocks, shares and market..."
            className="flex-1 bg-gray-700 border-none text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm"
            style={{ height: "40px" }}
          />
          <button
            onClick={sendMessage}
            className="bg-gray-700 hover:bg-gray-600 text-cyan-400 px-4 h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-200 rounded"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

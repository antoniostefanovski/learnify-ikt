import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { sendMessageToChatbot } from '../services/ChatbotService'; 

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      content: "👋 Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    const trimmed = inputMessage.trim();
    if (!trimmed || trimmed.length <= 3) return;

    const userMessage = {
      id: uuidv4(),
      content: trimmed,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsBotTyping(true);

    try {
      const botReply = await sendMessageToChatbot(trimmed);

      const botMessage = {
        id: uuidv4(),
        content: botReply || "Sorry, I didn't understand that.",
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: uuidv4(),
        content: '⚠️ Failed to get response. Please try again later.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsBotTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh] rounded-3xl overflow-hidden border border-blue-400 shadow-2xl bg-gradient-to-br from-sky-200 to-blue-100">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-4 shadow-lg">
        <h2 className="text-2xl font-semibold tracking-wide">💬 Learnify Chatbot</h2>
        <p className="text-sm text-blue-100">Always here to help!</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 bg-white scrollbar-thin scrollbar-thumb-blue-300">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-2xl max-w-[75%] shadow-lg ${
                message.isUser
                  ? 'self-end bg-blue-600 text-white rounded-br-none'
                  : 'self-start bg-blue-100 text-blue-900 rounded-bl-none'
              }`}
            >
              <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </motion.div>
          ))}
          {isBotTyping && (
            <motion.div
              className="self-start bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl shadow-md max-w-[60%] rounded-bl-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            >
              <span className="animate-pulse">Typing...</span>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-5 bg-blue-50 border-t border-blue-300">
        <div className="relative">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full p-4 pr-14 min-h-[60px] resize-none border border-blue-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow text-blue-900 placeholder-blue-400 scrollbar-none"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || inputMessage.trim().length <= 3}
            className="absolute right-3 bottom-3 p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Send message"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
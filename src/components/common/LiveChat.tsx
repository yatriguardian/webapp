import React, { useState } from 'react';
import { MessageCircle, X, Send, Paperclip } from 'lucide-react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, we would send the message to the server
      console.log('Message sent:', message);
      setMessage('');
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-full sm:w-96 flex flex-col overflow-hidden transition-all duration-300 animate-fade-in max-h-[500px]">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">Live Chat Support</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50 h-80">
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>👋 Hello! Welcome to Yatri Guardian. How can we help you today?</p>
                </div>
              </div>
              
              <div className="flex items-start justify-end">
                <div className="bg-primary-600 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p>I need information about US visa requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>I'd be happy to help you with US visa requirements. Could you please let me know what type of visa you're interested in? (Tourist, Business, Student, Work)</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex items-center">
            <button 
              type="button"
              className="p-2 text-gray-500 hover:text-primary-600 focus:outline-none"
              aria-label="Attach file"
            >
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border-0 focus:outline-none"
            />
            <button 
              type="submit"
              className="p-2 text-primary-600 hover:text-primary-800 focus:outline-none"
              aria-label="Send message"
              disabled={!message.trim()}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          aria-label="Open live chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
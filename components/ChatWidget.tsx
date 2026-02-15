import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, Loader2 } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

// Interfaces
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

interface UserData {
  name: string;
  placement: string;
  idea: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: `Olá. Bem-vindo ao estúdio ${TEXTOS_GERAIS.marca}.`, sender: 'bot' },
    { id: '2', text: 'Sou o assistente virtual. Para começarmos, qual é o seu nome?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0); // 0: Name, 1: Placement, 2: Idea, 3: Finish
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<UserData>({ name: '', placement: '', idea: '' });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Handle Input Submit
  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    
    // Add User Message
    const newUserMsg: Message = { id: Date.now().toString(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Logic Flow based on Step
    // Simulate thinking delay
    setTimeout(() => {
      let nextBotMsg = '';
      let nextStep = step + 1;

      // Update Data
      if (step === 0) {
        setUserData(prev => ({ ...prev, name: userText }));
        nextBotMsg = `Prazer, ${userText}. Em qual parte do corpo você imagina sua tatuagem?`;
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, placement: userText }));
        nextBotMsg = 'Perfeito. E qual é a ideia principal ou conceito que você gostaria de explorar?';
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, idea: userText }));
        nextBotMsg = 'Excelente. Tenho o que preciso. Vou gerar um link direto para o WhatsApp oficial com esse resumo para agilizarmos o atendimento.';
        // Don't increment step to 3 immediately to show the button differently
      }

      setIsTyping(false);
      
      if (nextBotMsg) {
        setMessages(prev => [...prev, { id: Date.now().toString(), text: nextBotMsg, sender: 'bot' }]);
      }
      
      setStep(nextStep);

    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    const text = `*Nova Solicitação via Site*%0A%0A*Nome:* ${userData.name}%0A*Local:* ${userData.placement}%0A*Ideia:* ${userData.idea}%0A%0AGostaria de orçar esse projeto.`;
    const phone = '5511999999999'; // Replace with real number
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  // Animation for opening (Simple CSS transition handled by Tailwind classes, could be enhanced with GSAP)
  
  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[60] bg-primary dark:bg-white text-white dark:text-primary p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Abrir Chat"
      >
        <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
        {/* Pulse Effect */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-accent-pink rounded-full animate-ping"></span>
        <span className="absolute top-0 right-0 w-3 h-3 bg-accent-pink rounded-full"></span>
      </button>

      {/* CHAT WINDOW */}
      <div 
        ref={containerRef}
        className={`fixed bottom-6 right-6 z-[70] w-[90vw] md:w-[400px] bg-background-light dark:bg-[#111111] border border-primary/10 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12 pointer-events-none'}`}
        style={{ height: 'min(600px, 80vh)' }}
      >
        
        {/* HEADER */}
        <div className="bg-primary dark:bg-black/40 text-white p-4 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                    <h3 className="font-serif italic text-lg leading-none">W. Siqueira</h3>
                    <p className="font-sans text-[9px] uppercase tracking-widest opacity-60">Concierge</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent-pink transition-colors">
                <X size={20} strokeWidth={1} />
            </button>
        </div>

        {/* MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {messages.map((msg) => (
                <div 
                    key={msg.id} 
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                    <div 
                        className={`max-w-[80%] p-4 text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-primary dark:bg-white text-white dark:text-primary rounded-t-xl rounded-bl-xl font-sans' 
                            : 'bg-white dark:bg-white/5 text-primary dark:text-gray-200 rounded-t-xl rounded-br-xl border border-gray-100 dark:border-white/5 font-serif italic'
                        }`}
                    >
                        {msg.text}
                    </div>
                    <span className="text-[9px] text-gray-400 mt-2 uppercase tracking-wider">
                        {msg.sender === 'user' ? 'Você' : 'Atelier'}
                    </span>
                </div>
            ))}

            {isTyping && (
                <div className="flex items-start">
                    <div className="bg-white dark:bg-white/5 p-4 rounded-t-xl rounded-br-xl border border-gray-100 dark:border-white/5 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            )}
            
            <div ref={messagesEndRef} />
        </div>

        {/* FOOTER / INPUT */}
        <div className="p-4 bg-white dark:bg-black/20 border-t border-primary/5 dark:border-white/5">
            {step < 3 ? (
                <form onSubmit={handleSend} className="flex gap-2 relative">
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Digite sua resposta..."
                        className="w-full bg-transparent border-none focus:ring-0 text-sm font-sans text-primary dark:text-white placeholder:text-gray-400 px-0"
                        autoFocus
                    />
                    <button 
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2 text-primary dark:text-white disabled:opacity-30 hover:text-accent-pink transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </form>
            ) : (
                <button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                >
                    Continuar no WhatsApp
                    <ArrowRight size={14} />
                </button>
            )}
        </div>

      </div>
    </>
  );
};

export default ChatWidget;
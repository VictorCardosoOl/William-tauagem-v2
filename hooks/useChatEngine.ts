import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatState {
  name: string;
  placement: string;
  idea: string;
}

export const useChatEngine = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Olá. Bem-vindo ao estúdio W. Siqueira.', sender: 'bot' },
    { id: '2', text: 'Sou o assistente virtual. Para começarmos, qual é o seu nome?', sender: 'bot' }
  ]);
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<ChatState>({ name: '', placement: '', idea: '' });

  const processInput = useCallback((text: string) => {
    // 1. Add User Message
    const userMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate Thinking / Business Logic
    setTimeout(() => {
      let nextBotMsg = '';
      let nextStep = step + 1;

      if (step === 0) {
        setUserData(prev => ({ ...prev, name: text }));
        nextBotMsg = `Prazer, ${text}. Em qual parte do corpo você imagina sua tatuagem?`;
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, placement: text }));
        nextBotMsg = 'Perfeito. E qual é a ideia principal ou conceito?';
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, idea: text }));
        nextBotMsg = 'Excelente. Tenho o que preciso. Vou gerar um link direto para o WhatsApp oficial com esse resumo.';
      }

      if (nextBotMsg) {
        setMessages(prev => [...prev, { id: Date.now().toString(), text: nextBotMsg, sender: 'bot' }]);
      }
      
      setIsTyping(false);
      setStep(nextStep);
    }, 1200);
  }, [step]);

  const generateWhatsAppLink = useCallback(() => {
    const text = `*Nova Solicitação via Site*%0A%0A*Nome:* ${userData.name}%0A*Local:* ${userData.placement}%0A*Ideia:* ${userData.idea}%0A%0AGostaria de orçar esse projeto.`;
    const phone = '5511999999999'; 
    return `https://wa.me/${phone}?text=${text}`;
  }, [userData]);

  return {
    messages,
    isTyping,
    step,
    processInput,
    generateWhatsAppLink,
    isComplete: step > 2
  };
};

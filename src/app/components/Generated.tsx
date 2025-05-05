"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TypingText = ({ text, delay, onComplete, index, currentStep }: { 
  text: string; 
  delay: number; 
  onComplete?: () => void;
  index: number;
  currentStep: number;
}) => {
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const hasAnimated = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (index === currentStep) {
      hasAnimated.current = false;
      setDisplayedText('');
      setIsTyping(true);
    }
  }, [index, currentStep]);

  useEffect(() => {
    if (index === currentStep && !hasAnimated.current) {
      hasAnimated.current = true;
      let charIndex = 0;
      
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
      
      timeoutRef.current = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          if (timeoutRef.current) clearInterval(timeoutRef.current);
          
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }
      }, 50);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [text, onComplete, index, currentStep]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="text-white text-lg px-4 py-2 rounded-lg mb-4"
      style={{
        background: isTyping
          ? 'linear-gradient(135deg, #a855f7, #ec4899)'
          : 'linear-gradient(135deg, #ec4899, #f472b6)',
      }}
    >
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </motion.div>
  );
};

const ResultCard = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2, delay }}
  >
    <Image
      src={"/images/generated.png"}
      alt="Generated Site"
      width={500}
      height={500}
      priority
    />
  </motion.div>
);

const AnimatedTextGenerator = ({ messages, isVisible } : { messages: string[]; isVisible: boolean }) => {
  const [step, setStep] = useState(-1); // Start at -1, so nothing shows until visible
  const maxSteps = messages.length;
  
  // Start animation when section becomes visible
  useEffect(() => {
    if (isVisible && step === -1) {
      setStep(0);
    }
  }, [isVisible, step]);
  
  const handleStep = (nextStep : number) => {
    console.log(`Moving to step ${nextStep}`);
    if (nextStep <= maxSteps) {
      setStep(nextStep);
    }
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {messages.map((message, index) => (
        step >= index && (
          <TypingText
            key={`message-${index}`}
            text={message}
            delay={index * 0.5}
            onComplete={() => handleStep(index + 1)}
            index={index}
            currentStep={step}
          />
        )
      ))}
      
      {step >= maxSteps && (
        <ResultCard delay={1} />
      )}
    </div>
  );
};

const Generated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const messages = [
    "Let's create a site for your business.",
    "What features would you like?",
    "Got it! Generating your site now.",
  ];
  
  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section becomes at least 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally, disconnect the observer after triggering once
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2, // 20% of the element visible
      }
    );
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      style={{
        backgroundImage: "url('/images/oval.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex items-center justify-center p-4 "
    >
      <AnimatedTextGenerator messages={messages} isVisible={isVisible} />
    </div>
  );
};

export default Generated;










// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const TypingText = ({ text, delay, onComplete, index, currentStep }: { 
//   text: string; 
//   delay: number; 
//   onComplete?: () => void;
//   index: number;
//   currentStep: number;
// }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);
//   const hasAnimated = useRef(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (index === currentStep) {
//       hasAnimated.current = false;
//       setDisplayedText('');
//       setIsTyping(true);
//     }
//   }, [index, currentStep]);

//   useEffect(() => {
//     if (index === currentStep && !hasAnimated.current) {
//       hasAnimated.current = true;
//       let charIndex = 0;
      
//       if (timeoutRef.current) {
//         clearInterval(timeoutRef.current);
//       }
      
//       timeoutRef.current = setInterval(() => {
//         if (charIndex < text.length) {
//           setDisplayedText(text.slice(0, charIndex + 1));
//           charIndex++;
//         } else {
//           setIsTyping(false);
//           if (timeoutRef.current) clearInterval(timeoutRef.current);
          
//           setTimeout(() => {
//             if (onComplete) onComplete();
//           }, 500);
//         }
//       }, 50);
//     }
    
//     return () => {
//       if (timeoutRef.current) {
//         clearInterval(timeoutRef.current);
//       }
//     };
//   }, [text, onComplete, index, currentStep]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay }}
//       className="text-white text-lg px-4 py-2 rounded-lg mb-4"
//       style={{
//         background: isTyping
//           ? 'linear-gradient(135deg, #a855f7, #ec4899)'
//           : 'linear-gradient(135deg, #ec4899, #f472b6)',
//       }}
//     >
//       {displayedText}
//       {isTyping && <span className="animate-pulse">|</span>}
//     </motion.div>
//   );
// };

// const ResultCard = ({ delay }: { delay: number }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.2, delay }}
//     // className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"
//   >
//     <Image
//     src={"/images/generated.png"}
//     alt="Generated Site"
//     width={500}
//     height={500}
//     priority
//   />
//   </motion.div>
// );

// const AnimatedTextGenerator = ({ messages }: { messages: Array<string> }) => {
//   const [step, setStep] = useState(0);
//   const maxSteps = messages.length;
  
//   const handleStep = (nextStep: number) => {
//     console.log(`Moving to step ${nextStep}`);
//     if (nextStep <= maxSteps) {
//       setStep(nextStep);
//     }
//   };
  
//   return (
//     <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
//       {messages.map((message, index) => (
//         step >= index && (
//           <TypingText
//             key={`message-${index}`}
//             text={message}
//             delay={index * 0.5}
//             onComplete={() => handleStep(index + 1)}
//             index={index}
//             currentStep={step}
//           />
//         )
//       ))}
      
//       {step >= maxSteps && (
//         <ResultCard delay={1} />
//       )}
//     </div>
//   );
// };

// const Generated = () => {
//   const messages = [
//     "Let's create a site for your business.",
//     "What features would you like?",
//     "Got it! Generating your site now.",
//   ];
  
//   return (
//     <div 
//     style={{
//       backgroundImage: "url('/images/oval.png')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}
//     className="min-h-screen flex items-center justify-center p-4">
//       <AnimatedTextGenerator messages={messages} />
//     </div>
//   );
// };

// export default Generated;
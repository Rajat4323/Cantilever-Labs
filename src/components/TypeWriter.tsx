import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({ 
  words, 
  delay = 200,
  className = "" 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {}, 500);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="text-[#FFD700] animate-pulse">|</span>
    </span>
  );
};
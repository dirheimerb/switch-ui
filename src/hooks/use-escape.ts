import React from 'react';
export interface UseEscapeProps {
  onEscape: () => void;
}

export default function useEscape({ onEscape }: UseEscapeProps) {
  const closeOnEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === '27') {
      onEscape();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    };
  }, []);
}

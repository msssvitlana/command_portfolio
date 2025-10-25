declare module 'react-mdr' {
  import React from 'react';

  interface MatrixRainingLettersProps {
    className?: string;
    custom_class?: string;
    color?: string;
    backgroundColor?: string;
  }

  export const MatrixRainingLetters: React.FC<MatrixRainingLettersProps>;
}

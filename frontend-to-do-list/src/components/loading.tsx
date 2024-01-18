/* eslint-disable @next/next/no-img-element */
// Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
      <img src="loading.gif" alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default Loading;

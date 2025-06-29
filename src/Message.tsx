import React from 'react';

const Message: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default Message;
import * as React from 'react';

interface ApiKeyProps {
  apiKey: string;
}

const ApiKeyInput = (props: ApiKeyProps) => {
  console.info(props);
  return (
    <div>
      <input />
    </div>
  );
};
export default ApiKeyInput;

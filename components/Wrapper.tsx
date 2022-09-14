import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: '928px',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;

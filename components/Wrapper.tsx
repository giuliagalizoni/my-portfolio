import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export default Wrapper;

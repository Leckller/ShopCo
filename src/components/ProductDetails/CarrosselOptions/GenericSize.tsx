import { ReactNode } from 'react';

function GenericSize({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full">
      {children}
    </section>
  );
}

export default GenericSize;

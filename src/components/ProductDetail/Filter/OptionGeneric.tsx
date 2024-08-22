import { ReactNode, useState } from 'react';

function OptionGeneric({ title, children }: { title: string, children:ReactNode }) {
  const [show, setShow] = useState(true);
  return (
    <section className="flex flex-col gap-5 border-t pt-5">
      <article className="flex flex-row justify-between">
        <h2>{title}</h2>
        <button
          onClick={ () => setShow((prev) => !prev) }
        >
          {show ? 'menos' : 'mais'}
        </button>
      </article>
      {children}
    </section>
  );
}

export default OptionGeneric;

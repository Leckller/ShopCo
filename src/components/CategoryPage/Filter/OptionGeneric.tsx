import { ReactNode, useState } from 'react';

function OptionGeneric({ title = '', d = false, children }:
{ title?: string, d?: boolean, children:ReactNode }) {
  const [show, setShow] = useState(true);
  return (
    <section className={ `flex ${d ? 'flex-row' : 'flex-col'} gap-5 border-t pt-5` }>
      {title && (
        <article className="flex flex-row justify-between">
          <h2>{title}</h2>
          <button
            onClick={ () => setShow((prev) => !prev) }
          >
            {show ? 'menos' : 'mais'}
          </button>
        </article>
      )}
      {children}
    </section>
  );
}

export default OptionGeneric;

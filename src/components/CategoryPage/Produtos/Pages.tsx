import Left from '../../../assets/Arrows/left.svg';
import Right from '../../../assets/Arrows/right.svg';

function Pages() {
  return (
    <section className="flex flex-row justify-evenly">
      <button className="flex flex-row items-center gap-3">
        <img src={ Left } alt="Previous" />
        Previous
      </button>
      <article className="flex justify-center flex-grow">
        actual page

      </article>
      <button className="flex flex-row items-center gap-3">
        Next
        <img src={ Right } alt="Next" />
      </button>
    </section>
  );
}

export default Pages;

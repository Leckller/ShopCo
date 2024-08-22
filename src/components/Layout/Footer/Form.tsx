import Email from '../../../assets/Footer/email.svg';

function Form() {
  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
      className="w-full bg-black text-white flex flex-col md:flex-row flex-nowrap gap-2
      rounded-2xl p-5
      "
    >
      <h1
        className="text-center md:text-start
       md:flex-grow font-extrabold text-3xl"
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <section className="flex flex-col items-center gap-2 md:min-w-64">
        <label
          className="flex bg-white items-center
         flex-row flex-nowrap w-[90%] rounded-2xl pl-2"
        >
          <img src={ Email } alt="email" className="size-[22px]" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full rounded-2xl p-2"
          />
        </label>
        <button
          type="submit"
          className="w-[90%] bg-white text-black rounded-2xl p-2"
        >
          Subscribe to NewsLetter
        </button>
      </section>
    </form>
  );
}

export default Form;

function MainText() {
  const infos = [
    { title: '200+', text: 'International Brands' },
    { title: '2,000+', text: 'High-Quality Products' },
    { title: '30,000+', text: 'Happy Customers' },
  ];
  return (
    <section
      className="flex flex-col items-start pt-5
      justify-around gap-5 md:gap-0 md:min-w-[50%]:"
    >
      <h1 className="font-extrabold text-5xl">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="text-2xl">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of style.
      </p>
      <button>Shop Now</button>
      <section
        className="flex flex-row flex-wrap gap-5 w-full justify-around
        md:justify-start"
      >
        {infos.map((e) => (
          <article
            className="min-w-[160px]"
            key={ e.title }
          >
            <h2 className="font-semibold text-xl">{e.title}</h2>
            <p>{e.text}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

export default MainText;

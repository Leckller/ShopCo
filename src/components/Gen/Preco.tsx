function Preco({ preco, desconto }: { preco: number, desconto: number }) {
  return (
    <article className="flex flex-row gap-5  text-xl font-semibold">
      <span className="before:content-['$'] text-black">
        {`${(preco * desconto).toFixed()}`}
      </span>
      {desconto !== 1 && (
        <>
          <span className="text-gray-500 line-through decoration-1">
            {`$${(preco).toFixed()}`}
          </span>
          <span
            className=" bg-red-100 text-red-500
              pl-3 pr-3 rounded-2xl"
          >
            { `-${100 - desconto * 100}%`}
          </span>
        </>
      )}
    </article>
  );
}

export default Preco;

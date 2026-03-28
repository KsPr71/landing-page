import "./custom-card-price.css";

const CustomCard = () => {
  const ingredients = ["Matcha", "Ice Cubes", "Honey", "Milk"];

  return (
    <article className="mx-auto w-full max-w-[340px] rounded-[34px] border border-[#e8e8e2] bg-[#f7f7f2] p-3 shadow-[0_14px_30px_rgba(24,24,24,0.12)]">
      <div className="relative overflow-hidden rounded-[26px] bg-[#b8c69f]">
        <span className="custom-card-price px-4 py-2 text-[30px] font-medium leading-none text-[#111]">
          $ 10
        </span>

        <img
          src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=960"
          alt="Ice matcha"
          className="h-[360px] w-full object-cover object-center"
          
        />

        <p className=" absolute inset-x-0 bottom-0 bg-[#7f9854] px-3 py-2 text-center text-xs tracking-wide text-[#f5f8eb]" style={{opacity: 0.7}}>
          Free Delivery until 16/06/2026
        </p>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h3 className="text-[44px] font-medium leading-none tracking-tight text-[#151515]">
            Ice Matcha
          </h3>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xl font-medium text-[#1a1a1a] underline decoration-[#1a1a1a] underline-offset-4"
          >
            Order Now <span aria-hidden>{"\u2197"}</span>
          </button>
        </div>

        <ul className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <li
              key={ingredient}
              className="rounded-full bg-[#e5e7da] px-4 py-1 text-xs font-medium text-[#3d4636]"
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default CustomCard;

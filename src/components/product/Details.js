const Details = ({ product }) => {
  return (
    <section className=" padding text-slate-50 bg-slate-900">
      <div className="flex max-lg:flex-col gap-28 max-w-[1000px] mx-auto">
        <div className="lg:w-1/2">
          <h2 className="title-sm">توضیحات کالا:</h2>
          <p className="para mt-5 text-justify">{product.describe}</p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="title-sm">مشخصات کالا:</h2>
          <ul className="grid gap-y-5 mt-5">
            {product.specs.map((item, index) => {
              return (
                <>
                  <li className="w-full flex-seperate">
                    <h6 className="font-bold">{item.label} :</h6>
                    <span>{item.describe}</span>
                  </li>
                  {index + 1 != product.specs.length && (
                    <hr className="mx-5 opacity-50" />
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;

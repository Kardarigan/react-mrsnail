const Details = ({ product }) => {
  const titles = [
    {
      title: "توضیحات کالا",
      value: product.describe,
    },
  ];

  if (product.specs) {
    titles.push({
      title: "مشخصات کالا",
      value: product.specs,
    });
  }

  if (product.prices) {
    titles.push({
      title: "لیست قیمت ها",
      value: product.prices,
    });
  }

  return (
    <section className="padding text-slate-50 bg-slate-900">
      <div className="flex max-lg:flex-col gap-5 max-w-[1200px] mx-auto">
        {titles.map((title, index) => (
          <div
            className={`${
              titles.length > 2 ? "lg:w-1/3" : "lg:w-1/2"
            } border p-5`}
            key={index}
          >
            <h2 className="title-sm">{title.title}:</h2>
            {title.title === "توضیحات کالا" ? (
              <p className="para mt-5 text-justify">{title.value}</p>
            ) : (
              <ul className="grid gap-y-5 mt-5">
                {title.value.map((item, idx) => (
                  <>
                    <li className="w-full flex-seperate" key={idx}>
                      <h6 className="font-bold">{item.label} :</h6>
                      <span>{item.describe}</span>
                    </li>
                    {idx + 1 !== title.value.length && (
                      <hr className="mx-2 opacity-50" />
                    )}
                  </>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;

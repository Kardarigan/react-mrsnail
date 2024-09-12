import { Link } from "react-router-dom";
import { footer, social } from "../../data/constans";

const Footer = () => {
  return (
    <footer
      className="padding-x padding-t pb-5 min-h-[70vh] bg-slate-900 text-slate-100 flex flex-col justify-between"
      dir="rtl"
    >
      <div>
        <div className="grid md:grid-cols-4 max-md:gap-8 max-w-[800px] max-md:text-center">
          {footer.links.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="para mark mark-light md:inline">{item.title}</h3>
                <ul className="para-sm mt-3 grid gap-y-3">
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link to={link.path} className="hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="md:flex ">
            <div className="p-8 md:max-w-96">
              <h3 className="para-lil">
                برای به روز بودن از آخرین رویداد ها و تخفیفات آغای حلزون رو در
                صفحات اجتماعی دنبال کنید :
              </h3>
              <ul className="flex justify-center gap-4 mt-3">
                {social.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.path}
                        className={`${item.colorClass} hover:text-xl border-2 border-slate-100 transition-all size-12 text-center flex-fullcenter rounded-full`}
                      >
                        <i className={`fa-brands  ${item.iconClass}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="flex justify-center gap-5 mt-5">
              {footer.logos.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.path}>
                      <img
                        src={item.logo}
                        alt={item.label}
                        className="max-w-28"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <hr />
        <p className="mt-2 text-xs">
          تمام حقوق این وبسات متعلق به آقای حلزون میباشد &copy; 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;

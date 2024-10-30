import { shareButtons } from "../../data/constans";
import { Share_Button } from "../Portal";

const Blog_Control = ({ blog }) => {
  const hereUrl = window.location.href;

  return (
    <section id="firstSection" className="pagecenter p-5 flex-seperate text-sm">
      <div className="flex">
        اشتراک گذاری:
        <ul className="flex items-center md:gap-x-3 gap-x-2 ms-2 title-sm">
          {shareButtons.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href + hereUrl} title={item.title}>
                  <i className={item.icon + " hover:scale-125"} />
                </a>
              </li>
            );
          })}
          <li>
            <Share_Button
              text="این مقاله رو حتما باید بخونی :"
              customClass="hover:scale-125"
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center md:gap-x-5 gap-x-2">
        <span className="mark mark-dark">{blog.category}</span>
        <span>{blog.date}</span>
      </div>
    </section>
  );
};

export default Blog_Control;

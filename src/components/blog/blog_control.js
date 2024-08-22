import { blogControl } from "../../data/constans";

const Blog_Control = ({ blog }) => {
  return (
    <section id="firstSection" className="pagecenter p-5 flex-seperate text-sm">
      <div className="flex">
        اشتراک گذاری:
        <ul className="flex items-center md:gap-x-3 gap-x-2 ms-2 title-sm">
          {blogControl.shareButtons.map((item, index) => {
            return (
              <li key={index}>
                <a href="/" title={item.title}>
                  <i className={item.icon + " hover:scale-125"} />
                </a>
              </li>
            );
          })}
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

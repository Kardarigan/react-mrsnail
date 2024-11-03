import { articles, contact } from "../../data/constans";
import { Articles, Boxes, Breadcrumb } from "../Portal";
import Form from "../united/Form";

const Contact = () => {
  return (
    <>
      <Breadcrumb />
      <section className="bg-slate-900">
        <iframe
          title="headquarter office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.5316013750157!2d-73.98171737410269!3d40.77378646617773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1722876155654!5m2!1sen!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[50vh] w-full"
        ></iframe>
      </section>
      <section className="pagecenter padding-t text-center">
        <div className="box lg:w-4/5 mx-auto">
          <h5 className="mark mark-light md:mx-44 title-sm">صفحات اجتماعی</h5>
          <ul className="flex-fullcenter max-md:flex-col gap-3 mt-12">
            {contact.socialMedia.map((item, index) => {
              return (
                <li key={index} className="md:w-1/3 w-full">
                  <a
                    href={item.href}
                    className="button button-light py-5 w-full max-md:flex-fullcenter"
                  >
                    <i className={item.icon + " title me-1 md:block"} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Boxes />
      <section className="pagecenter" id="form">
        <div className="flex-fullcenter title-sm w-full text-center px-8 pt-1 pb-5 max-lg:py-5">
          <h5 className="mark mark-dark px-8 py-5">فرم تماس</h5>
        </div>
        <Form fields={contact.contactForm} />
      </section>
      <Articles thing={articles.home} />
    </>
  );
};

export default Contact;

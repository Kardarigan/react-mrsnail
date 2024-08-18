import { useState, useEffect } from "react";
import { articles, contact, hero } from "../../data/constans";
import { Articles, Boxes, Hero } from "../Portal";
import Form from "../united/Form";

const Contact = () => {
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const url = window.location.href;
      const lastPart = url.substr(url.lastIndexOf("#") + 1);
      setIsForm(lastPart === "form");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {isForm ? (
        <>
          <Hero thing={hero.form} />
          <section className="pagecenter padding">
            <Form fields={contact.contactForm} />
          </section>
        </>
      ) : (
        <>
          <section className="bg-slate-900">
            <iframe
              title="headquarter office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.5316013750157!2d-73.98171737410269!3d40.77378646617773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1722876155654!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[50vh] w-full"
            ></iframe>
          </section>
          <Boxes />
          <Articles thing={articles.home} />
        </>
      )}
    </>
  );
};

export default Contact;

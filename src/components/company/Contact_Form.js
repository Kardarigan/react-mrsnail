import { contact, hero } from "../../data/constans";
import { Hero } from "../Portal";
import Form from "../united/Form";

const Contact_Form = () => {
  return (
    <>
      <Hero thing={hero.form} />
      <section className="pagecenter padding">
        <Tip message={contact.hint} />
        <Form fields={contact.contactForm} />
      </section>
    </>
  );
};

export default Contact_Form;

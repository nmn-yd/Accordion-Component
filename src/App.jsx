import { useState } from "react";
import PropTypes from "prop-types";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <Item
          currOpen={currOpen}
          onOpen={setCurrOpen}
          number={i}
          title={el.title}
          text={el.text}
          key={el.title}
        />
      ))}
    </div>
  );
}

function Item({ currOpen, onOpen, number, title, text }) {
  let isopen = currOpen === number;

  // const [isopen, setIsOpen] = useState(true);

  function closeBtn() {
    isopen ? onOpen(null) : onOpen(number);
  }

  return (
    <div className={`item ${isopen ? "open" : ""}`} onClick={closeBtn}>
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isopen ? "-" : "+"}</p>
      {isopen && <div className="content-box">{text}</div>}
    </div>
  );
}

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currOpen: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

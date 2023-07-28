import { useState } from "react";

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
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <Item number={i} title={el.title} text={el.text} key={el.title} />
      ))}
    </div>
  );
}

function Item({ number, title, text }) {
  const [isopen, setIsOpen] = useState(true);

  function closeBtn() {
    setIsOpen(!isopen);
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

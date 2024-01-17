import { useState } from "react";
import "./Faq.css";
const faqData = [
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. It operates on a decentralized network, typically based on blockchain technology, ensuring secure and transparent transactions.",
  },
  {
    question: "How does cryptocurrency work?",
    answer:
      "Cryptocurrencies work through a decentralized technology called blockchain, which is a distributed ledger enforced by a network of computers (nodes). Transactions are added to blocks and then linked together in a chain, providing a secure and transparent record.",
  },
  {
    question: "What is Bitcoin?",
    answer:
      "Bitcoin is the first and most well-known cryptocurrency. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin operates on a peer-to-peer network, allowing users to send and receive payments without the need for an intermediary.",
  },
  {
    question: "What is a wallet in the context of cryptocurrencies?",
    answer:
      "A cryptocurrency wallet is a digital tool that allows users to store, send, and receive cryptocurrencies. Wallets can be software-based (online, desktop, or mobile) or hardware-based (physical devices). They come with public and private keys for secure transactions.",
  },
  {
    question: "How can I buy cryptocurrencies?",
    answer:
      "Cryptocurrencies can be purchased on cryptocurrency exchanges using traditional currency or other cryptocurrencies. Popular exchanges include Coinbase, Binance, and Kraken. Users can buy crypto with credit/debit cards, bank transfers, or other payment methods supported by the exchange.",
  },
];
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq-container">
      <h1>FAQ Section</h1>
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </div>
            <div className="faq-answer">
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;

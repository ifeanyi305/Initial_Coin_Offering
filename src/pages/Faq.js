import React from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';

const Faq = () => {
  const faqs = [
    {
      id: 1,
      questions: 'What is Easy Launch all about',
      desc: 'Easy Launch is a fundraising mechanism used by startups and projects that are built on blockchain technology. It is a type of crowdfunding where investors can purchase digital tokens or coins in exchange for funding a project. The tokens represent a stake in the project and can be used within its ecosystem.',
    },
    {
      id: 2,
      questions: 'How do I participate in an Easy Launch',
      desc: 'To participate in an Easy Launch, you will need to create a digital wallet and purchase cryptocurrency, Ethereum (ETH) on a cryptocurrency exchange. You can then use the cryptocurrency to purchase Easy Launch tokens during the ICO(Initial Coin Offering) sale period.',
    },
    {
      id: 3,
      questions: 'Is participating in an Easy Launch safe?',
      desc: 'Participating in an Easy Launch comes with some risks, such as the potential for scams, fraud, and market volatility. It is important to do your research and carefully review the team members, and roadmap before investing. Additionally, be sure to only participate in ICOs from reputable and trusted projects.',
    },
    {
      id: 4,
      questions: 'What is the difference between an ICO and an IPO?',
      desc: 'An IPO, or Initial Public Offering, is the process of offering shares of a private company to the public. An ICO is similar, but instead of offering shares, a project offers digital tokens or coins that represent a stake in the project.',
    },
    {
      id: 5,
      questions: 'Can I trade Easy Launch tokens on an exchange?',
      desc: 'Yes, after the ICO(Initial Coin Offering) sale period is over and the tokens are distributed, you can trade them on cryptocurrency exchanges where they are listed.',
    },
    {
      id: 6,
      questions: 'What happens after an ICO(Initial Coin Offering) is over?',
      desc: 'After the ICO is over, the project will use the funds raised to develop and launch their platform or product. Token holders will be able to use their tokens within the project`s ecosystem, and may also have the ability to sell or trade their tokens on exchanges. It is important to keep up to date with project developments and token usage to maximize the value of your investment.',
    },
  ];

  return (
    <section>
      <div>
        <h1 className="dark:text-[#fff] text-[#D50DA8] font-extrabold text-center my-4">Facts & Questions</h1>
        <p className="dark:text-[#fff] font-extrabold mb-6 text-center">If you have a question about Easy Launch, you are in the right place.</p>
      </div>
      <div className="faq flex justify-center dark:bg-[#2D3133] rounded-3xl p-6 bg-[#D9D9D9]">
        <div className="grid-container">
          {
            faqs.map((faq) => (
              <div key={faq.id}>
                <div className="flex items-start gap-2">
                  <BsFillQuestionSquareFill className="dark:text-[#fff] mt-2" />
                  <div className="dark:bg-[#D9D9D9] h-72 w-96 bg-[#2D3133] p-4 mb-2 rounded-2xl">
                    <h1 className="text-blue-400 font-extrabold">{faq.questions}</h1>
                    <p className="text-[#fff] dark:text-[#000]">{faq.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Faq;

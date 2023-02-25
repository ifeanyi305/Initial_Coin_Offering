import React from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';

const Faq = () => {
  const faqs = [
    {
      id: 1,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
    {
      id: 2,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
    {
      id: 3,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
    {
      id: 4,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
    {
      id: 5,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
    {
      id: 6,
      questions: 'what are the.......',
      desc: 'hfhfhffffffff',
    },
  ];

  return (
    <>
      <div>
        <h1 className="dark:text-[#fff] text-[#D50DA8] font-extrabold text-center my-4">Facts & Questions</h1>
        <p className="dark:text-[#fff] font-extrabold mb-6 text-center">If you have a question about Ico, you are in the right place.</p>
      </div>
      <div className="faq flex justify-center dark:bg-[#2D3133] rounded-3xl p-6 bg-[#D9D9D9]">
        <div className="grid-container">
          {
            faqs.map((faq) => (
              <div key={faq.id}>
                <div className="flex items-start gap-2">
                  <BsFillQuestionSquareFill className="dark:text-[#fff] mt-2" />
                  <div className="dark:bg-[#D9D9D9] bg-[#2D3133] p-4 mb-2 rounded-2xl">
                    <h1 className="text-blue-400 font-extrabold">{faq.questions}</h1>
                    <p className="text-[#fff] dark:text-[#000]">{faq.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Faq;

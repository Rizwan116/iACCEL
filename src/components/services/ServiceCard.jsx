import React from 'react';

const ServiceCard = () => {
    const cards = [
    {
      img: "/MarketAccess1.png",
      text: "Revenue Architect is an in-house capability of Revenue-focused Business Development. The function with local market knowledge covers both hunting and farming capabilities and spearheads client acquisition for our startups. The team focuses on pipeline management and client relations."
    },
    {
      img: "/MarketAccess2.png",
      text: "Market Access Enablers (MAES) are members of our network of 450+ industry experts, business owners, corporate leaders, and investors who provide our startups with insights, local market experience, and introductions to decision makers in prospective clients. They are committed to helping them accelerate revenue growth."
    },
    {
      img: "/MarketAccess3.png",
      text: "We help develop and create Specialized partnerships with industry access. We enable joint value propositions and joint go-to-market partnerships through our robust network. These include partnerships with tried and trusted resellers and distributors. With their existing client bases, these partnerships shorten the sales cycle for our startups."
    }
  ];

    return (
        <div>
               <div  data-sal="fade"
        data-sal-delay="600"
        data-sal-duration="800" className="container mx-auto px-10 md:px-6 py-20 md:py-36 max-w-6xl  items-center gap-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-8 blue">Market Access</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <img src={card.img} alt="Market" className="w-full h-48 object-cover shadow" />
            <p className="mt-4 text-gray-700 text-justify leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
       </div>
    );
}

export default ServiceCard;

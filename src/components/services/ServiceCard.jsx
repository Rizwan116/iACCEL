import React from 'react';

const ServiceCard = () => {
    const cards = [
    {
      img: "/MarketAccess1.png",
      text: "Business Horizons Ltd. is a trusted authority at delivering tailored business consulting services..."
    },
    {
      img: "/MarketAccess2.png",
      text: "These include transfer of industry best practices, market insights, partner networks, corporate strategy..."
    },
    {
      img: "/MarketAccess3.png",
      text: "We help startups and SMEs with operational performance, cost optimization and innovation..."
    }
  ];

    return (
        <div>
               <div className="container mx-auto px-6 py-20 md:py-36 max-w-6xl  items-center gap-8">
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

import React from "react";

const Overview = () => {
    const overviewsData = [
        {   
            id: 1,
            number: 6500,
            title: 'Cars Sold'
        },
        {
            id: 2,
            number: 6000,
            title: 'Satisfy Client'
        },
        {
            id: 3,
            number: 1300,
            title: 'Sellers'
        },
        {
            id: 4,
            number: 1050,
            title: 'Car Sold Per Year'
        },
    ]
  return (


    <div  data-aos="fade-up"
         data-aos-anchor-placement="bottom-bottom" className="relative">
        <div className="container mx-auto px-4 lg:px-0 py-16">
      <div>
        <h1 className="text-3xl text-center font-semibold pb-8">
          OVER 6 YEARS WE SELL USED CARS
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4">
            {
                overviewsData.map(overview => <div className="bg-gray-200 text-center py-8" key={overview.id}>
                    <h1 className="text-4xl font-bold">
                        {overview.number}+
                    </h1>
                    <p className="text-xl my-3">{overview.title}</p>
                </div>)
            }
        </div>


      </div>
    </div>
       
    </div>
  );
};

export default Overview;

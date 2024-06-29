import React from "react";
import { priceList } from "../utils/priceList";
import { FaCheck, FaXmark } from "react-icons/fa6";

function Prices() {
  return (
    <section className="pt-64 md:pt-20 ">
      <span className="relative flex justify-center ">
        <span className="relative z-10 items-center px-6 pb-5 text-4xl font-semibold text-green-800 rounded-2xl " data-aos='fade-down' data-aos-duration="2000">Pricing</span>
      </span>
      <div className="flex flex-wrap justify-center">
        {priceList.map((item, index) => (
          <div className="max-w-[330px] mx-4 my-4" key={index} data-aos={item.Animation} data-aos-duration={item.Duration}>
            <div className="border border-black divide-y divide-gray-200 shadow-sm rounded-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.Type}
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-700">
                  {item.Description}
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}{item.Price}{" "}
                  </strong>
                  <span className="text-sm font-medium text-gray-700">/month</span>
                </p>

                <a
                  className="block px-12 py-3 mt-4 text-sm font-medium text-center text-white bg-green-800 border border-green-800 rounded hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring active:text-gree-500 sm:mt-6"
                  href={item.Link}
                >
                  Get Started
                </a>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  {item.Features.map((feature, featureIndex) => (
                    <li className="flex items-center gap-1" key={featureIndex}>
                      {feature.available ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaXmark className="text-red-500" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prices;

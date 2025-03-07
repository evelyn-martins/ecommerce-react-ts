import React from "react";

function Home() {
  return (
    <main>
      <section className="bg-white100 h-110 flex justify-between relative">
        <div className="flex flex-col justify-center my-34 ml-46">
          <h2 className="text-32px font-semibold text-black800 mb-3">
            Fresh Arrivals Online
          </h2>
          <p className="text-sm text-black600 mb-12">
            Discover Our Newest Collection Today.
          </p>
          <div>
            <button className="bg-black rounded-sm text-white py-3 px-6 flex">
              View Collection
              <img src="/arrow.svg" alt="arrow right" className="ml-3" />
            </button>
          </div>
        </div>
        <div>
          <img
            src="/Burst-pucker.svg"
            alt="burst pucker"
            className="absolute top-23 right-140"
          />
          <div className="w-85 h-85 bg-white200 rounded-full absolute bottom-3 right-1/6"></div>
          <img
            src="/Hero Image.svg"
            alt="hero image"
            className="absolute bottom-0 right-1/6"
          />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-14 mx-43 my-22 h-54">
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/shipping.svg" alt="shipping" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">Free Shipping</h2>
          <p className="text-black500 text-sm w-70">
            Upgrade Your Style Today And Get FREE Shipping on all orders! Don't
            Miss Out.
          </p>
        </div>
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/guarantee.svg" alt="guarantee" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">
            Satisfaction Guarantee
          </h2>
          <p className="text-black500 text-sm w-70">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/secure.svg" alt="secure" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">Secure Payment</h2>
          <p className="text-black500 text-sm w-70">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

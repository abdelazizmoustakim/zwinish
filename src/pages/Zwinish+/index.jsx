import React from 'react';

const ZwinishPlus = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-blue-600">Zwinish+</span>
          <h2 className="text-4xl font-bold lg:text-5xl text-gray-900 mt-2">
            Pick your vibe
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Free to explore or go premium for the real sauce
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Free Plan */}
          <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Zwinish Free</h3>
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <p className="text-gray-500 mt-2">Ad-supported, always free</p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  ✅ <span>Access to public blogs</span>
                </li>
                <li className="flex items-center space-x-2">
                  ✅ <span>Community content</span>
                </li>
                <li className="flex items-center space-x-2">
                  ⚠️ <span>Includes ads</span>
                </li>
                <li className="flex items-center space-x-2">
                  🚫 <span>No access to premium blogs</span>
                </li>
              </ul>
            </div>

            <button className="mt-6 w-full py-3 font-semibold rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Zwinish+ Plan */}
          <div className="w-full max-w-sm p-6 rounded-lg shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Zwinish+</h3>
              <span className="text-5xl font-bold">$20</span>
              <span className="text-sm ml-1">/Year</span>
              <p className="mt-2 text-blue-100">Premium experience, no ads</p>

              <ul className="mt-6 space-y-3 text-white">
                <li className="flex items-center space-x-2">
                  ✅ <span>Everything in Free</span>
                </li>
                <li className="flex items-center space-x-2">
                  ✅ <span>No ads, ever</span>
                </li>
                <li className="flex items-center space-x-2">
                  🔓 <span>Exclusive Zwinish+ blogs</span>
                </li>
                <li className="flex items-center space-x-2">
                  💬 <span>Priority community access</span>
                </li>
              </ul>
            </div>

            <a
              href="#"
              className="mt-6 w-full py-3 text-center font-bold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition"
            >
              Go Zwinish+
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZwinishPlus;

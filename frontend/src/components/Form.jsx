import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormSubmission } from "./FormSubmissionContext"; // Import the context to manage form submission state

const Form = () => {
    const navigate = useNavigate();
    const { setFormSubmission } = useFormSubmission(); // Use the context to set form submission state

    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    stocks: {
      TCS: { selected: false, shares: 0 },
      RELIANCE: { selected: false, shares: 0 },
      INFY: { selected: false, shares: 0 },
      HDFCBANK: { selected: false, shares: 0 },
      HINDUNILVR: { selected: false, shares: 0 },
      ITC: { selected: false, shares: 0 },
      SBIN: { selected: false, shares: 0 },
      BHARTIARTL: { selected: false, shares: 0 },
      WIPRO: { selected: false, shares: 0 },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStockSelection = (stockName) => {
    setFormData({
      ...formData,
      stocks: {
        ...formData.stocks,
        [stockName]: {
          ...formData.stocks[stockName],
          selected: !formData.stocks[stockName].selected,
        },
      },
    });
  };

  const handleSharesChange = (stockName, shares) => {
    setFormData({
      ...formData,
      stocks: {
        ...formData.stocks,
        [stockName]: {
          ...formData.stocks[stockName],
          shares,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { fullName, email, mobile, stocks } = formData;

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Mobile Number Validation (10 digits, numbers only)
  const mobilePattern = /^\d{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Share Quantity Validation
  for (const [stockName, stockData] of Object.entries(stocks)) {
    if (stockData.selected && (stockData.shares < 0 || stockData.shares > 1000)) {
      alert(`Please enter a valid number of shares (0-1000) for ${stockName}.`);
      return;
    }
  }

  // If all validations pass, proceed to submit
  try {
    const response = await axios.post("http://localhost:5000/api/users", formData);
    localStorage.setItem("userEmail", email);
    console.log("Saved:", response.data);
    setFormSubmission(true);
    navigate("/yournewspage");
  } catch (err) {
    console.error("Error saving user:", err.message, err.response);
    alert("Something went wrong. Please try again!");
  }
};

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* Header Section */}
        <header className="mb-16 text-center">
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            PORTFOLIO LINK
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Connect your investment portfolio with our AI-powered platform to
            track performance, analyze trends, and optimize your investments.
          </p>
        </header>

        {/* Form Container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden backdrop-filter backdrop-blur-md  bg-white/3 bg-opacity-5 border border-white/10 border-opacity-10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-5"></div>

          <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Personal Information Section */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">
                  Personal Information
                </h2>
              </div>

              {/* Full Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none !rounded-button outline-none focus:ring-2 focus:ring-blue-400 py-4 px-5 text-white placeholder-transparent transition-all duration-300  bg-white/10 bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg"
                  placeholder="Full Name"
                  required
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-5 top-4 text-gray-400 transition-all duration-300 transform 
                  group-focus-within:-translate-y-10 group-focus-within:text-xs group-focus-within:text-blue-400
                  peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Full Name
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none !rounded-button outline-none focus:ring-2 focus:ring-blue-400 py-4 px-5 text-white placeholder-transparent transition-all duration-300  bg-white/10 bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg"
                  placeholder="Email Address"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-5 top-4 text-gray-400 transition-all duration-300 transform 
                  group-focus-within:-translate-y-10 group-focus-within:text-xs group-focus-within:text-blue-400
                  peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Email Address
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Mobile Number Input */}
              <div className="relative group md:col-span-2">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none !rounded-button outline-none focus:ring-2 focus:ring-blue-400 py-4 px-5 text-white placeholder-transparent transition-all duration-300  bg-white/10 bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg"
                  placeholder="Mobile Number"
                  required
                />
                <label
                  htmlFor="mobile"
                  className="absolute left-5 top-4 text-gray-400 transition-all duration-300 transform 
                  group-focus-within:-translate-y-10 group-focus-within:text-xs group-focus-within:text-blue-400
                  peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Mobile Number
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Stock Selection Section */}
              <div className="md:col-span-2 mt-8">
                <h2 className="text-2xl font-bold mb-6">Select Your Stocks</h2>
                <p className="text-gray-300 mb-8">
                  Choose the stocks you want to include in your portfolio and
                  specify the number of shares for each.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(formData.stocks).map(
                    ([stockName, stockData]) => (
                      <div
                        key={stockName}
                        className="relative p-4 rounded-lg backdrop-filter backdrop-blur-sm  bg-white/10 bg-opacity-5 border border-white/10 border-opacity-10 transition-all duration-300 hover:bg-opacity-10 cursor-pointer"
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className={`w-5 h-5 rounded mr-3 flex items-center justify-center border ${
                              stockData.selected
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 border-transparent"
                                : "border-gray-400/50"
                            }`}
                            onClick={() => handleStockSelection(stockName)}
                          >
                            {stockData.selected && (
                              <i className="fas fa-check text-xs text-white"></i>
                            )}
                          </div>
                          <label
                            className="flex-1 cursor-pointer font-medium"
                            onClick={() => handleStockSelection(stockName)}
                          >
                            {stockName}
                          </label>
                        </div>

                        {stockData.selected && (
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-gray-400 mr-3">
                              Shares:
                            </span>
                            <div className="relative flex items-center">
                              <button
                                type="button"
                                className="w-8 h-8 flex items-center justify-center  bg-white/10 bg-opacity-5 rounded-l-lg border-r border-white border-opacity-10 !rounded-button whitespace-nowrap cursor-pointer"
                                onClick={() =>
                                  handleSharesChange(
                                    stockName,
                                    Math.max(0, stockData.shares - 1),
                                  )
                                }
                              >
                                <i className="fas fa-minus text-xs"></i>
                              </button>
                              <input
                                type="number"
                                min="0"
                                value={stockData.shares}
                                onChange={(e) =>
                                  handleSharesChange(
                                    stockName,
                                    parseInt(e.target.value) || 0,
                                  )
                                }
                                className="w-16 h-8 text-center  bg-white/10 bg-opacity-5 border-none outline-none text-sm appearance-none"
                                style={{
                                  WebkitAppearance: "none",
                                  MozAppearance: "textfield",
                                }}
                              />
                              <button
                                type="button"
                                className="w-8 h-8 flex items-center justify-center  bg-white/10 bg-opacity-5 rounded-r-lg border-l border-white border-opacity-10 !rounded-button whitespace-nowrap cursor-pointer"
                                onClick={() =>
                                  handleSharesChange(
                                    stockName,
                                    stockData.shares + 1,
                                  )
                                }
                              >
                                <i className="fas fa-plus text-xs"></i>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Connect Portfolio
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default Form;

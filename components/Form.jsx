"use client"
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";

const Form = () => {
  const [state, handleSubmit] = useForm("meqwyraq");
  const [formValues, setFormValues] = useState({
    key: "",
    bannerGif: "",
    websiteUrl: "",
    card: "",
    shopDescription: "",
    telegramChannel: ""
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const isValid = form.checkValidity();
    form.reportValidity();

    if (isValid) {
      await handleSubmit(event);
      setFormValues({
        key: "",
        bannerGif: "",
        websiteUrl: "",
        card: "",
        shopDescription: "",
        telegramChannel: ""
      });
      toast.success("We will confirm your request shortly");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="key" className="block mb-2 text-sm font-medium text-white">
              Key
            </label>
            <input
              id="key"
              name="key"
              type="text"
              value={formValues.key}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="A5R9P8-•••••"
              required
            />
            <ValidationError 
              prefix="Key" 
              field="key" 
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="bannerGif" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Banner/Gif
            </label>
            <input
              id="bannerGif"
              name="bannerGif"
              type="text"
              value={formValues.bannerGif}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://imgur.com/.gif"
              required
            />
            <ValidationError 
              prefix="Banner/Gif" 
              field="bannerGif" 
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="websiteUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Website URL
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              type="text"
              value={formValues.websiteUrl}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="www.example.com"
              required
            />
            <ValidationError 
              prefix="Website URL" 
              field="websiteUrl" 
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Card
            </label>
            <textarea
              id="card"
              name="card"
              value={formValues.card}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`
    Profile Image :
    Shop Name :`}
              required
              rows={4}
            />
            <ValidationError 
              prefix="Card" 
              field="card" 
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="shopDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Shop Description
            </label>
            <textarea
              id="shopDescription"
              name="shopDescription"
              value={formValues.shopDescription}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`✅https://t.me/⭐️ Subway | Instacart | Ulta | Ihop | OF | Paypal | Starbucks⭐️ https://xyzshop.com/  🚀 Fast Support ✅`}
              required
              maxLength={250}
              rows={6}
            />
            <ValidationError 
              prefix="Shop Description" 
              field="shopDescription" 
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="telegramChannel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Telegram Channel
            </label>
            <input
              id="telegramChannel"
              name="telegramChannel"
              type="text"
              value={formValues.telegramChannel}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://t.me/xyz"
              required
            />
            <ValidationError 
              prefix="Telegram Channel" 
              field="telegramChannel" 
              errors={state.errors}
            />
          </div>
        </div>

        <button
          disabled={state.submitting}
          type="submit"
          className="text-white border border-white rounded-lg p-2 px-4 hover:bg-blue-100 hover:text-black duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

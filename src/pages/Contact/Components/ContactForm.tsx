import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded bg-black border border-amber-400 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-black border border-amber-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-black border border-amber-400 focus:outline-none"
            rows={4}
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

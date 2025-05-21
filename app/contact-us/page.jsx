export default function Contact() {
  return (
    <div className="auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center mt-12 lg:mt-20 mb-16 lg:mb-24 px-4">
        {/* About Section */}
        <div className="w-full lg:w-[500px]">
          <h1 className="text-blue-500 text-lg font-medium">Who we are</h1>
          <p className="text-4xl lg:text-5xl font-bold py-4 lg:py-5">
            We care about customer services.
          </p>
          <p className="my-4 lg:my-5 text-gray-600 leading-relaxed">
            Want to chat? We'd love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md transition-colors duration-200">
            Email Support
          </button>
        </div>

        {/* Contact Form */}
        <div className="shadow-xl rounded-lg p-8 lg:p-12 bg-white w-full max-w-lg">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h1>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80 md:h-[450px] px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7382830363827!2d38.73697337585746!3d8.996212789499621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852b6c634421%3A0x245e403a62391711!2sEagleLion%20System%20Technology!5e0!3m2!1sen!2set!4v1747133781561!5m2!1sen!2set"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

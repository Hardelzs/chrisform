import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-[#ECEDF3] ">
      <div className="bg-[#FFFFFF] p-5 flex items-center justify-between fixed w-full top-0">
        <h1 className="text-left">&lt; Back</h1>

        <h2 className="absolute left-1/2 transform -translate-x-1/2">Livestock Price data summary</h2>

        <h3 className="text-right">icon</h3>
      </div>

      <div className="p-6 text-center text-black mt-13">
        {/* Icon or Image */}
        <div className="flex justify-center mb-6 p-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Form Icon"
            className="w-16 h-16"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-[#FFFFFF] shadow-lg rounded-md">
        <h1 className="text-4xl font-sans font-bold text-center mb-2 text-[#2C3345] p-10">
          LIVESTOCK PRICE DATA SUMMARY
        </h1>
        <hr className="text-[#D7D8E1]" />
        <div className="p-8">
          <p className="text-center text-gray-600 mb-18">
            Please ensure you include LGA and Town from where you are collecting data.
          </p>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

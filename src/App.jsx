import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-[#ECEDF3] ">
      <div className="bg-amber-200 p-5 flex items-center gap-4 fixed w-full">
        <h1>/ Back</h1>

        <h2>Livestock Price data summary</h2>

        <h3>icon</h3>
      </div>

      <div className="p-6 text-center text-black">
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
        <h1 className="text-3xl font-sans font-bold text-center mb-2 text-gray-800 p-10">
          LIVESTOCK PRICE DATA SUMMARY
        </h1>
        <hr />
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

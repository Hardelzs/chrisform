import { useState } from "react";
import { saveAs } from "file-saver";
// import { Parser } from "json2csv";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    town: "",
    date: "",
    animals: "",
    poultry: "",
    meats: "",
  });

  const [submissions, setSubmissions] = useState([]);
  const [openSection, setOpenSection] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions((prev) => [...prev, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      state: "",
      town: "",
      date: "",
      animals: "",
      poultry: "",
      meats: "",
    });
    alert("Form submitted successfully!");
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(submissions, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "livestock_data.json");
  };

  const exportCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(submissions);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "livestock_data.csv");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* Name */}
        <div className="">
          <label className="font-medium text-gray-500">1. Your Name *</label>
          <div className="flex gap-4 mt-2">
            <div className="w-full space-y-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border rounded-sm p-2 w-full"
              />

              <label htmlFor="" className="text-gray-500"   >First Name</label>
            </div>
            <div className="w-full space-y-2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border rounded-sm p-2 w-full"
              />
              <label htmlFor="" className="text-gray-500">Last Name</label>
            </div>

          </div>
        </div>

        {/* State */}
        <div className="mt-10">
          <div className="grid grid-cols-1 space-y-3.5">
            <label className="font-medium text-gray-500">2. What is your State? *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border rounded-sm p-2 w-87"
            >
              <option value="">Choose</option>
              <option value="Oyo">Oyo</option>
              <option value="Lagos">Lagos</option>
              <option value="Kano">Kano</option>
            </select>
            <label htmlFor="" className="text-[14px] text-gray-400">State and LGA from where you are collecting data.</label>
          </div>

        </div>

        {/* State LGA */}
        <div className="mt-10">
          <div className="grid grid-cols-1 space-y-3.5">
            <label className="font-medium text-gray-500"></label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border rounded-sm p-2 w-87"
            >
              <option value="">Choose</option>
              <option value="Oyo">Oyo</option>
              <option value="Lagos">Lagos</option>
              <option value="Kano">Kano</option>
            </select>
            <label htmlFor="" className="text-[14px] text-gray-400">State and LGA from where you are collecting data.</label>
          </div>

        </div>



        {/* Town */}
        <div className="mt-10">
          <div className="grid grid-cols-1 space-y-3.5">
            <label className="font-medium text-gray-500">2.1 Town/Village</label>
            <input
              type="text"
              name="town"
              placeholder="Town or village"
              value={formData.town}
              onChange={handleChange}
              className="border rounded-sm p-2 w-87"
            />
            <label htmlFor="" className="text-[14px] text-gray-400">Town or village from where you are collecting data.</label>
          </div>

        </div>



        {/* Date */}
        <div className="grid grid-cols-1 space-y-3.5 mt-10">
          <label className="font-medium text-gray-500">3. Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-sm p-2 w-87"
          />
          <label htmlFor="" className="text-[14px] ">Date</label>
        </div>

        <div className="grid gap-15">

          {/* Collapsible sections */}
          {[
            {
              id: "animals",
              label: "4. Average Retail Prices of Animals (Medium) in Naira/Head",
              fields: [
                "Cattle",
                "Cow",
                "Ram",
                "Goat",
                "Ewe",
                "Pig",
                "Canal",
                "Local Horse",
                "Exoctic horse",
                "Rabbit",
                "Local Dog",
                "Donkey",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`4.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* number 5  */}
          {[
            {
              id: "animals",
              label: "5. Average Retail Prices of Poultry (Medium) in Naira/Head",
              fields: [
                "Broiler",
                "Cockerel",
                "Culled layers",
                "Local chicken",
                "Guinea Fowl",
                "Ducks",
                "Exotic Turkey",
                "Local Turkey",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`5.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* number 6  */}
          {[
            {
              id: "animals",
              label: "6. Average Retail Prices of Meats in Naira/Kg",
              fields: [
                "Beef",
                "Mutton",
                "Goat meat",
                "Pork",
                "Bush Meat",
                "Liver",
                "Kidney",
                "Dressed Chicken",
                "Dressed Turkey",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`6.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 7  */}
          {[
            {
              id: "animals",
              label: "7. Average Retail Prices of Eggs Naira/Crate",
              fields: [
                "Chicken Egg",
                "Guinea Fowl Egg",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`7.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}


          {/* number 8  */}
          {[
            {
              id: "animals",
              label: "8. Average Retail Prices of Milk",
              fields: [
                "Uncondensed Milk in Naira/tin",
                "Powdered Milk in Naira/450g.",
                "Powdered Milk in Naira/450g.",
                "Yoghurt in Naira/Litre",
                "Cheese (Wara) in Naira/piece",
                "Butter",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`8.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 9  */}
          {[
            {
              id: "animals",
              label: "9. Average Retail Prices of Cattle Hides",
              fields: [
                "(Heavy Wet) in Naira/Kg.",
                "(Light wet) in Naira/kg",
                "(Heavy Dry) in Naira/kg",
                "Light Dry) in Naira/kg",

              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`9.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}


          {/* number 10  */}
          {[
            {
              id: "animals",
              label: "10. Average Retail Prices of Sheep Hides",
              fields: [
                "(Wet) in Naira/Kg",
                "(Dry) in Naira/Kg",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`10.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}


          {/* number 11  */}
          {[
            {
              id: "animals",
              label: "11. Average Retail Prices of Goat Hides",
              fields: [
                "(Wet) in Naira/Kg",
                "(Dry) in Naira/Kg",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`11.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 12  */}
          {[
            {
              id: "animals",
              label: "12. Average Prices of Mash (Birds) in Naira/25kg",
              fields: [
                "Chikcen Mash",
                "Growers Mash",
                "Layers Mash",
                "Broilers Starters Mash",
                "Broilers Finisher Mash",
                "Turkey Starter's Mash",
                "Turkey Grower's Mash",
                "Turkey Finisher's Mash",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`12.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 13  */}
          {[
            {
              id: "animals",
              label: "13. Average Prices of Mash (Pigs) in Naira/25kg",
              fields: [
                "Pig Creep Feed",
                "Pig weaners' Mash",
                "Pig Growers Mash",
                "Pig Fattener's Mash",
                "Pig Breeders' Mash",

              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`13.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 14  */}
          {[
            {
              id: "animals",
              label: "14. Average Prices of Concentrates in Naira/Tonne",
              fields: [
                "Chicks Concentrates",
                "Growers' Concentrates",
                "Layers' Concentrates",
                "Breeders's Concentrates",
                "Broiler Starters' Concentrates",
                "Broiler Finishers' Concentrates",

              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`14.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 15  */}
          {[
            {
              id: "animals",
              label: "15.  Average Prices of Feed Components in Naira/Tonne",
              fields: [
                "Maize",
                "Guinea Corn",
                "Maize Offals",
                "Wheat Offals",
                "Brewers's Grain",
                "Cowpea Hauling",
                "Fish Meal",
                "Groundnut Cake",
                "Cotton Seed cake",
                "Soya Bean Meal",
                "Blood Meal",
                "Bone Meal",
                "Palm Kernel Cake",
                "Oyster Shell",
                "Limestone",
                "Salt",
                "Maize Bran",
                "Maize/sorghum Offal",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`15.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 16  */}
          {[
            {
              id: "animals",
              label: "16. Avg Retail Prices of Day-Old Chicks(Pullet)in Naira/Chick.",
              fields: [
                "Pullet",
                "Broiler",
                "Cockerel",
                "Turkey Poult",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`16.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 17  */}
          {[
            {
              id: "animals",
              label: "17. Average Retail Prices of PVaccine in Naira/1dose",
              fields: [

                "Anti Rabies Vaccine",
                "New Castle Disease Vaccine (NDV i/o)",
                "New Castle Disease Vaccine (NDV -L)",
                "New Castle Disease Vaccine (NDV -K)",
                "Fowl Pox Vaccine",
                "Fowl Typhoid Vaccine",
                "Fowl Cholera",
                "Gumboro (IBDV)",
                "Mareks Vaccine",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`17.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* number 18  */}
          {[
            {
              id: "animals",
              label: "18. Average Retail Prices of Poultry Equipment in Naira/Unit",
              fields: [
                "Chicks' Drinker",
                "Growers' Drinker",
                "Layers' Drinker2",
                "Chicks' Feeder",
                "Growers' Feeder",
                "Layers' Feeder",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="rounded-sm">
              <button
                type="button"
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                className="w-full flex justify-between items-center p-5 bg-[#EDEFF3] rounded-t-lg"
              >
                <span className="font-medium text-gray-600">{section.label}</span>
                <span>{openSection === section.id ? "−" : "+"}</span>
              </button>

              {openSection === section.id && (
                <div className="p-4 bg-white grid grid-cols-1 gap-16">
                  {section.fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 text-[17px] mb-1">
                        {`18.${index + 1}  ${field}`}
                      </label>
                      <input
                        type="text"
                        name={`${section.id}_${field.toLowerCase()}`}
                        placeholder=""
                        value={formData[`${section.id}_${field.toLowerCase()}`] || ""}
                        onChange={handleChange}
                        className="border rounded-sm p-2 w-87 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-700"
          >
            Submit
          </button>
          <div className="space-x-2">
            <button
              type="button"
              onClick={exportJSON}
              className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={exportCSV}
              className="bg-yellow-500 text-white px-4 py-2 rounded-sm hover:bg-yellow-600"
            >
              Export CSV
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { GiHelp } from "react-icons/gi";

const Step = ({ step, isActive, formData, handleChange, handleFileChange }) => {
  const [showNote, setShowNote] = useState(false);

  if (!isActive) return null;

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  const shouldShowAdditionalInput =
    step.label ===
      "8. Would you like to match your jewellery with an outfit?" &&
    formData[step.label] === "Yes";

  return (
    <div className="p-4 md:p-6 lg:p-8 ">
      <label className=" text-lg font-semibold flex flex-row gap-10 justify-between mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {step.label}
        </h1>
        <span
          className="cursor-pointer text-2xl text-orange-100"
          onClick={toggleNote}
          aria-label="Toggle Note"
        >
          <GiHelp />
        </span>
      </label>
      {showNote && <p className=" text-orange-100 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">{step.note}</p>}
      {step.inputType === "select" && (
        <div className="space-y-2 ">
          {step.options.map((option) => (
            <div
              key={option}
              className="flex rounded-3xl justify-center py-2 w-full align-middle border border-orange-200"
            >
              <input
                type="radio"
                id={option}
                name={step.label}
                value={option}
                checked={formData[step.label] === option}
                onChange={handleChange}
                className="appearance-none h-0 w-0 "
              />
              <label
                htmlFor={option}
                className={`text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:text-orange-100  ${
                  formData[step.label] === option
                    ? "text-orange-100 "
                    : "text-orange-300 "
                }`}
              >
                {option}
              </label>
            </div>
          ))}
          {formData[step.label] === "Other" && (
            <input
              type="text"
              name="customOccasion"
              value={formData.customOccasion || ""}
              onChange={handleChange}
              placeholder="Enter custom occasion"
              className="w-full text-center py-2 bg-transparent border border-orange-200 rounded-3xl text-orange-300 placeholder-orange-400 text-sm sm:text-base md:text-lg lg:text-xl"
              required
            />
          )}
        </div>
      )}
      {step.inputType === "radio" && (
        <div className="space-y-2 w-full ">
          {step.options.map((option) => (
            <div
              key={option}
              className=" py-2 text-sm sm:text-base md:text-lg lg:text-xl border border-orange-200  text-center bg-transparent rounded-3xl"
            >
              <input
                type="radio"
                id={option}
                name={step.label}
                value={option}
                checked={formData[step.label] === option}
                onChange={handleChange}
                className=" text-orange-300 placeholder-orange-400 appearance-none"
              />
              <label
                htmlFor={option}
                className={`text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:text-orange-100  ${
                  formData[step.label] === option
                    ? "text-orange-100 "
                    : "text-orange-300 "
                }`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
      {shouldShowAdditionalInput && (
        <>
          {formData.outfitImage && (
            <div>
              <img
                src={formData.outfitImage}
                alt="Outfit Preview"
                className="w-full mt-4"
              />
            </div>
          )}
          <div className="my-8">
            <label
              htmlFor="fileUpload"
              className="  w-full 
              p-2 text-sm 
              md:p-4 md:text-base 
              border border-orange-200 
              rounded-3xl 
              cursor-pointer 
              bg-orange-200 
              text-orange-800 
              hover:bg-orange-300 
              hover:text-orange-900"
            >
              Choose File (optional)
            </label>
            <input
              id="fileUpload"
              type="file"
              name="outfitImage"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Step;

import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "./style.css"

const features = [
  {
    name: "Quiz-Cracker",
    description: "Enhance your quiz experience with smart assistance."
  },
  {
    name: "Documentation Intelligent",
    description: "Get smart documentation suggestions."
  },
  {
    name: "Code-Master",
    description: "Improve your coding with AI-powered insights."
  },
  {
      name: "Data-analyser",
      description: "Get smart data insights."
  },
  {
    name:"Language-Translator",
    description:"Translate your language to any other language."
  }
 
]


const FeatureOption = ({ feature, onSelect, isSelected }) => {
  const selectedClass = isSelected
    ? "ring-2 ring-green-500 bg-green-100"
    : "bg-white"

  return (
    <div
      className={`p-3 m-3 flex flex-col items-center justify-center rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer ${
        isSelected ? "bg-green-100 ring-2 ring-green-500" : "bg-white"
      }`}
      onClick={() => onSelect(feature)}>
      <h3 className="text-lg font-semibold text-gray-800">{feature.name}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
      {isSelected && <div className="text-green-500 mt-2">✔️ Selected</div>}
    </div>
  )
}

function IndexPopup() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  
  const handleSelectFeature = (feature) => {
    setSelectedFeature(feature)
    toast.success(`${feature.name} selected!`)
  }

  return (
    <div className="flex items-center justify-center  p-4 w-[600px] h-[600px]">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-2xl p-8 max-w-lg w-full mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Select a feature:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {features.map((feature) => (
            <FeatureOption
              key={feature.name}
              feature={feature}
              onSelect={handleSelectFeature}
              isSelected={selectedFeature === feature}
            />
          ))}
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  )
}

export default IndexPopup
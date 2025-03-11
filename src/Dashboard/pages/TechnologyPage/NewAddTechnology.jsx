import React, { useState } from "react";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import Button from "../../components/ui/button/Button";
import ComponentCard from "../../components/common/ComponentCard";
import Checkbox from "../../components/form/input/Checkbox";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { FiPlus } from "react-icons/fi";
import ComponentCategory from "../../components/common/ComponentCategoryCard";

export default function NewAddTechnology() {
  const [selectedCategories, setSelectedCategories] = useState([]); 

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
       
        return [...prev, category];
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white/90 ">
          Add New Technology
        </h1>
        <div>
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer"
          >
            Publish
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-6">
        <div>
          <Label htmlFor="input">Add Title</Label>
          <Input type="text" id="input" placeholder="Add Title" />
        </div>
        <div className="space-y-6">
          {/* Category Selection */}
          <div>
            <ComponentCategory title="Category">
              <div className="items-center gap-4 space-y-5">
                {/* Frontend Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedCategories.includes("Frontend")} // Check if "Frontend" is selected
                    onChange={() => handleCategoryChange("Frontend")}
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Frontend
                  </span>
                </div>

                {/* Backend Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedCategories.includes("Backend")} // Check if "Backend" is selected
                    onChange={() => handleCategoryChange("Backend")}
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Backend
                  </span>
                </div>
              </div>
            </ComponentCategory>
          </div>

          {/* File Input Example */}
          <FileInputExample />
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { FaTrash } from "react-icons/fa"; // Import a trash icon from react-icons

export default function FileInputExample() {
  const [isOpen, setIsOpen] = useState(false); // Modal visibility
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Featured image URL
  const [allImages, setAllImages] = useState<string[]>([]); // Store all uploaded images
  const [isFullscreen, setIsFullscreen] = useState(false); // Control modal fullscreen state
  const [showUploadSection, setShowUploadSection] = useState(true); // Show upload section by default
  const [showAllImagesSection, setShowAllImagesSection] = useState(false); // Hide all images section by default
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null); // Selected image URL in modal

  // Open modal and reset sections
  const openModal = () => {
    setIsOpen(true);
    setIsFullscreen(false);
    setShowUploadSection(true);
    setShowAllImagesSection(false);
    setSelectedImageUrl(null);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
    setIsFullscreen(false);
  };

  // Generate a unique name for the image
  const generateUniqueName = (fileName: string) => {
    const timestamp = Date.now(); // Add a timestamp to make the name unique
    const randomNumber = Math.floor(Math.random() * 1000); // Add a random number for extra uniqueness
    const [name, extension] = fileName.split("."); // Split the file name and extension
    return `${name}_${timestamp}_${randomNumber}.${extension}`; // Combine to create a unique name
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;

        // Check if the image already exists in the list
        if (allImages.includes(imageUrl)) {
          // If the image is a duplicate, generate a unique name
          const uniqueName = generateUniqueName(file.name);
          const renamedImageUrl = imageUrl.replace(file.name, uniqueName);

          setAllImages((prev) => [...prev, renamedImageUrl]); // Add the renamed image to the list
          setSelectedImageUrl(renamedImageUrl); // Set as selected image URL
        } else {
          // If the image is not a duplicate, add it as is
          setAllImages((prev) => [...prev, imageUrl]);
          setSelectedImageUrl(imageUrl);
        }

        setShowUploadSection(false); // Hide upload section after upload
        setShowAllImagesSection(true); // Show all images section after upload
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Remove the featured image
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  // Set an image as featured
  const handleSetFeaturedImage = () => {
    if (selectedImageUrl) {
      setSelectedImage(selectedImageUrl); // Set as featured image
      closeModal();
    }
  };

  // Delete an image permanently
  const handleDeleteImage = (imageUrl: string) => {
    setAllImages((prev) => prev.filter((img) => img !== imageUrl)); // Remove from all images
    if (selectedImageUrl === imageUrl) {
      setSelectedImageUrl(null); // Reset selected image URL if it was deleted
    }
  };

  return (
    <ComponentCard title="Featured Image">
      <div>
        {/* Featured Image Section */}
        {selectedImage ? (
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Featured"
              className="w-32 h-32 object-cover rounded-md"
            />
            <button
              onClick={handleRemoveImage}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <p
            className="text-(--blue) cursor-pointer underline"
            onClick={openModal}
          >
            Set Featured Image
          </p>
        )}

        {/* Modal for Uploading and Selecting Images */}
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className={isFullscreen ? "w-full h-full" : "max-w-[1850px] h-[890px] p-6 bg-black"}
          isFullscreen={isFullscreen}
        >
          <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            {/* Modal Header */}
            <h1 className="text-2xl font-bold mb-10">Featured Image</h1>

            {/* Toggle between Upload and All Images sections */}
            <div className="border-b border-darkblack mb-5">
              <div className="flex justify-between ">
                <div className="flex items-center gap-10 mb-3">
                  <button
                    onClick={() => {
                      setShowUploadSection(true);
                      setShowAllImagesSection(false);
                    }}
                    className={`text-lg cursor-pointer ${
                      showUploadSection
                        ? "text-(--blue) border-2 border-(--blue) rounded-xl px-2 py-2"
                        : "text-gray-500"
                    }`}
                  >
                    Upload Image
                  </button>
                  <button
                    onClick={() => {
                      setShowUploadSection(false);
                      setShowAllImagesSection(true);
                    }}
                    className={`text-lg cursor-pointer ${
                      showAllImagesSection
                        ? "text-(--blue) border-2 border-(--blue) rounded-xl px-2 py-2"
                        : "text-gray-500"
                    }`}
                  >
                    All Images
                  </button>
                </div>
              </div>
            </div>

            {/* Upload Section */}
            {showUploadSection && (
              <div className="cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="cursor-pointer "
                />
                <p className="mt-2">Select an image to upload</p>
              </div>
            )}

            {/* All Images Section */}
            {showAllImagesSection && (
              <div className="overflow-x-auto">
                <h5 className="mb-4 text-xl lg:text-2xl">All Images</h5>
                <div className="grid grid-cols-8 gap-2">
                  {allImages.map((imageUrl, index) => (
                    <div
                      key={index}
                      className={`relative cursor-pointer border-4 w-40 ${
                        selectedImageUrl === imageUrl
                          ? "border-(--blue)"
                          : "border-transparent"
                      } rounded-md`}
                      onClick={() => setSelectedImageUrl(imageUrl)}
                    >
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="w-40 h-40 object-cover rounded-sm"
                      />
                      {/* Show delete button for selected image */}
                      {selectedImageUrl === imageUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent image selection
                            handleDeleteImage(imageUrl);
                          }}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <FaTrash size={16} /> {/* Trash icon */}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-end text-end gap-3 mt-6 justify-end">
            {showAllImagesSection && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleSetFeaturedImage}
                disabled={!selectedImageUrl} // Disable button if no image is selected
                className="btn btn-success flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Set Featured Image
              </Button>
            )}
          </div>
        </Modal>
      </div>
    </ComponentCard>
  );
}
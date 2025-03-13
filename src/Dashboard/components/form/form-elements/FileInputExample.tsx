import React, { useState, useEffect } from "react";
import ComponentCard from "../../common/ComponentCard";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

export default function FileInputExample({ onImageUpload, imageId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUploadSection, setShowUploadSection] = useState(true);
  const [showAllImagesSection, setShowAllImagesSection] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  // Fetch all images from the backenda
  const fetchAllImages = async () => {
    try {
      const response = await axios.get("http://localhost:5300/Image/get");
      if (response.status === 200) {
        const images = response.data.Image.map((item) => item.image);
        setAllImages(images);
      } else {
        console.error("Error fetching images:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (imageId) {
      const storedImageData = JSON.parse(localStorage.getItem("imageData") || "[]");
      const imageData = storedImageData.find((image) => image.id === imageId);

      if (imageData) {
        setSelectedImageUrl(imageData.url);
        setSelectedImage(imageData.url);
      }
    }
  }, [imageId]);

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("http://localhost:5300/Image/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const uploadedImage = response.data.Image; // Assuming the backend returns the saved image object
        const imageId = uploadedImage._id; // Get the image ID from the response
        const imageUrl = uploadedImage.image; // Get the image URL from the response

        // Retrieve existing image data from localStorage
        const storedImageData = JSON.parse(localStorage.getItem("imageData") || "[]");

        // Add the new image data to the array
        storedImageData.push({ id: imageId, url: imageUrl });

        // Update localStorage with the new array of image data
        localStorage.setItem("imageData", JSON.stringify(storedImageData));

        setShowUploadSection(false); // Switch to the "All Images" section
        setShowAllImagesSection(true);
        fetchAllImages(); // Refresh the list of images
        setSelectedImageUrl(imageUrl); // Select the newly uploaded image

        // Call onImageUpload with the imageId
        onImageUpload(imageId); // Pass the imageId to the parent component
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image. Please try again.");
      }
    }
  };

  const handleDeleteImage = async (imageUrl) => {
    try {
      const response = await axios.delete("http://localhost:5300/Image/delete", {
        data: { ImageUrl: imageUrl },
      });

      if (response.status === 200) {
        // Remove the image from the UI
        setAllImages((prev) => prev.filter((img) => img !== imageUrl));
        if (selectedImageUrl === imageUrl) {
          setSelectedImageUrl(null);
        }

        // Retrieve existing image data from localStorage
        const storedImageData = JSON.parse(localStorage.getItem("imageData") || "[]");

        // Filter out the deleted image data
        const updatedImageData = storedImageData.filter((image) => image.url !== imageUrl);

        // Update localStorage with the new array of image data
        localStorage.setItem("imageData", JSON.stringify(updatedImageData));

        console.log("Image deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };


  // Set the featured image
  const handleSetFeaturedImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Remove the featured image
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  // Pre-fill the image if imageId is provided
  useEffect(() => {
    if (imageId) {
      setSelectedImageUrl(imageId); // Set the selected image URL
    }
  }, [imageId]);

  // Open modal and fetch images
  const openModal = () => {
    setIsOpen(true);
    setIsFullscreen(false);
    setShowUploadSection(true);
    setShowAllImagesSection(false);
    setSelectedImageUrl(null); // Clear selection when opening the modal
    fetchAllImages(); // Fetch images when the modal is opened
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
    setIsFullscreen(false);
  };

  return (
    <ComponentCard title="Featured Image">
      <div>
        {/* Featured Image Section */}
        {selectedImage ? (
          <div className="flex flex-col items-center">
            <img
              src={`http://localhost:5300${selectedImage}`}
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
        <div className=" ">

          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className={isFullscreen ? "w-[80%] h-full" : "container mx-auto max-w-[1850px] w-[80%]  p-6 bg-black"}
            isFullscreen={isFullscreen}
          >

            <div className="row flex flex-col flex-wrap">
              <div className="col-3 grow-0 shrink-0 ">
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
                        className={`text-lg cursor-pointer font-bold ${showUploadSection
                          ? "text-(--white) border-2 bg-(--blue) rounded-sm border-(--blue) px-2 py-2"
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
                        className={`text-lg cursor-pointer font-bold ${showAllImagesSection
                         ? "text-(--white) border-2 bg-(--blue) rounded-sm border-(--blue) px-2 py-2"
                          : "text-gray-500"
                          }`}
                      >
                        All Images
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-3 grow-1 h-full">


                <div className="flex justify-center items-center ">
                  {showUploadSection && (
                    <div className="cursor-pointer text-center flex justify-center flex-col">
                      <div className="border-2 border-dashed border-(--blue) p-6 rounded-lg text-center hover:bg-(--blue) transition">
                        <label className="cursor-pointer">
                          <input type="file" onChange={handleUpload} accept="image/*" className="hidden" />
                          <div className="flex flex-col items-center ">
                            <FaUpload className="text-(--lightwhite) text-3xl" />
                            <p className="text-(--lightwhite) font-bold">Click to upload or drag & drop</p>
                          </div>
                        </label>
                      </div>

                      {/* <p className="mt-2 text-center">Select an image to upload</p> */}
                    </div>
                  )}
                </div>
                <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">

                  {showAllImagesSection && (
                    <div className="overflow-x-auto">
                      <h5 className="mb-4 text-xl lg:text-2xl">All Images</h5>
                      <div className="grid grid-cols-8 gap-2">
                        {(Array.isArray(allImages) ? allImages : []).map((imageUrl, index) => (
                          <div
                            key={index}
                            className={`relative cursor-pointer border-4 w-40 ${selectedImageUrl === imageUrl
                              ? "border-(--blue)"
                              : "border-transparent"
                              } rounded-md`}
                            onClick={() => setSelectedImageUrl(imageUrl)} // Allow manual selection
                          >
                            <img
                              src={`http://localhost:5300${imageUrl}`}
                              alt={`Image ${index + 1}`}
                              className="w-40 h-40 object-cover rounded-sm"
                            />
                            {selectedImageUrl === imageUrl && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent image selection
                                  handleDeleteImage(imageUrl);
                                }}
                                className="absolute top-2 cursor-pointer right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
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

              </div>

              <div className="col-3 mt-auto">
                <div className="flex items-end text-end gap-3 mt-6 justify-end">

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleSetFeaturedImage(selectedImageUrl); // Set the selected image as featured
                      closeModal(); // Close the modal
                    }}
                    disabled={!selectedImageUrl} // Disable button if no image is selected
                    className="btn btn-success cursor-pointer flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Set Featured Image
                  </Button>

                </div>

              </div>
            </div>


            {/* Modal Footer */}

          </Modal>
        </div>

      </div>
    </ComponentCard>
  );
}
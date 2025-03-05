import React from 'react';

const VideoSection = () => {
  return (
    <div className="pointer-events-none">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/zWZMN9DGuj4?autoplay=1&mute=1&controls=0&loop=1&playlist=zWZMN9DGuj4&start=2"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoSection;
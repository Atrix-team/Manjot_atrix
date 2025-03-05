import React from 'react';

const VideoSection = () => {
  return (
    <div>
    <iframe 
        class="w-full aspect-video pointer-events-none" 
        src="https://www.youtube.com/embed/zWZMN9DGuj4?si=XpIZ5znWpzxguDbo&start=2&controls=0&showinfo=0&modestbranding=1&autoplay=1&loop=1&mute=1&playlist=zWZMN9DGuj4" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
</div>

  );
};

export default VideoSection;
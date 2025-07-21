import React from 'react'

export const Map = () => {
  return (
    <div className="w-full h-[600px] max-w-[1500px] mx-auto">
      <iframe
        src="https://www.google.com/maps?q=28.6139,77.2090&z=14&output=embed"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
        title="Google Map"
      />
    </div>
  );
}

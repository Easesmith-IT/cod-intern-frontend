"use client";

import React, { useEffect, useState } from "react";

export const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Fallback: hide loader after 3s even if onLoad doesn't trigger
    const fallback = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="w-full h-[600px] max-w-[1500px] mx-auto relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
          <span className="loader" />
        </div>
      )}
      <iframe
        src="https://www.google.com/maps?q=28.6139,77.2090&z=14&output=embed"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        onLoad={handleLoad}
        style={{ border: 0 }}
        title="Google Map"
      />
    </div>
  );
};

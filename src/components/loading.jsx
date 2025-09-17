export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black/10 fixed top-0 left-0 w-full z-50">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

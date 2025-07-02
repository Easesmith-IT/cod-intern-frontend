export const CircularProgressBar = ({ value = 75, size = 128, color }) => {
  return (
    <div
      className="relative rounded-full bg-gray-200"
      style={{ width: size, height: size }}
    >
      {/* Progress Layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 180deg, ${color} ${
            value * 3.6
          }deg, #e5e7eb 0deg)`,
        }}
      ></div>

      {/* Inner Circle */}
      <div className="absolute inset-[5%] bg-white rounded-full"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center font-stolzl font-bold text-4xl">
        {value}%
      </div>
    </div>
  );
};

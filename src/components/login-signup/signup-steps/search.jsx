import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const Search = ({
  className,
  searchQuery,
  setSearchQuery,
  placeholder = "Find an interest",
}) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full text-gray-700 placeholder:text-gray-500 pr-12 h-12 rounded focus:bg-white focus:border-purple-200 transition-colors"
      />
      <div className="absolute top-0 right-0 p-1 pointer-events-none">
        <div className="bg-custom size-10 flex items-center justify-center rounded-full">
          <SearchIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

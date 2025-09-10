import { wpAxiosInstance } from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchApi = async ({ url, params }) => {
  try {
    const response = await wpAxiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export function useWpApiQuery({
  url,
  queryKeys = [],
  params = {},
  options = {},
}) {
  return useQuery({
    queryKey: [params, ...queryKeys], // Ensures caching based on query params
    queryFn: () => fetchApi({ url, params }),
    // enabled:false,
    ...options, // Allows passing additional options like staleTime, enabled, etc.
  });
}

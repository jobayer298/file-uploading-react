import { useQuery } from "@tanstack/react-query";

const useFileCount = (_id) => {
  const queryKey = ["fileCount", _id];

  const {
    data: file,
    isLoading,
    refetch,
  } = useQuery(queryKey, async () => {
    const response = await fetch(`http://localhost:5000/fileCount/${_id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  });

  return { file, isLoading, refetch };
};

export default useFileCount;

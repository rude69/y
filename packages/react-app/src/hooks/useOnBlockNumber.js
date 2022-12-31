import { useBlockNumber } from "wagmi";

function useOnBlockNumber({
  chainId,
  watch,
  cacheTime,
  enabled,
  staleTime,
  suspense,
  onBlock,
  onSuccess,
  onError,
  onSettled,
}) {
  const { data, error, isLoading, isError, status } = useBlockNumber({
    chainId: chainId,
    watch: watch,
    cacheTime: cacheTime,
    onSuccess: onSuccess,
  });

  if (isLoading) return { loading: true };
  if (isError) return { error: error };

  return data;
}

export default useOnBlockNumber;

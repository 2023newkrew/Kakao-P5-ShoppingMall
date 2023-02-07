import { useMemo } from "react";

function wrapPromise(promise) {
  let result = null;
  let error = null;

  const suspender = promise.then(
    (r) => {
      result = r;
    },
    (e) => {
      error = e;
    }
  );

  return {
    read: () => {
      if (result) {
        return result;
      }

      if (error) {
        throw error;
      }

      throw suspender;
    },
  };
}

function useResource(getResource) {
  const memoizedResource = useMemo(
    () => wrapPromise(getResource()),
    [getResource]
  );

  return memoizedResource;
}

export { useResource };

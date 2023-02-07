import { useRef } from "react";

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

function useResource(promise) {
  return useRef(wrapPromise(promise)).current;
}

export { useResource };

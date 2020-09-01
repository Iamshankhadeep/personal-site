import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

const isClient = typeof window === "object";

export function useWindowSize() {
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item =
        typeof window !== "undefined"
          ? window.localStorage.getItem(key)
          : undefined;

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      typeof window !== "undefined" &&
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const useGithubData = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        gitHubProfile {
          totalContributions
          pandemicContributions
          commitsOnRepo
        }
      }
    `
  );
  return data.gitHubProfile;
};

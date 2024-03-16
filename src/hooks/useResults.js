import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default function useResults(cleanUp) {
  const [results, setResults] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const searchApi = async (term) => {
    setPending(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "Toronto",
          term,
          limit: "50",
        },
      });
      setResults(response.data.businesses);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResults([]);
    }
    setPending(false);
    if (cleanUp) cleanUp();
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [results, pending, error, searchApi];
}

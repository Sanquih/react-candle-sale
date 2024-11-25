import { useEffect, useState } from "react";
import { essences } from "../data/essences";
import { sizes } from "../data/sizes";
import { styles } from "../data/styles";

type DataSource = "essences" | "sizes" | "styles";

export default function useGetData<T>(source: DataSource) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    setLoading(true);

    const timeoutId = setTimeout(() => {
      if (!ignore) {
        switch (source) {
          case "essences":
            setData(essences as T[]);
            break;
          case "sizes":
            setData(sizes as T[]);
            break;
          case "styles":
            setData(styles as T[]);
            break;
          default:
            setData([]);
        }
        setLoading(false);
      }
    }, 2000);

    return () => {
      ignore = true;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [source]);

  return { loading, data, setData, setLoading };
}

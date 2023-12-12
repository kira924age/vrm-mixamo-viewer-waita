import { useState, useEffect } from "react";

export const useModel = (selectedFile: File | undefined) => {
  const [modelUrl, setModelUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (selectedFile === undefined) {
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    console.log("created:", url);
    setModelUrl(url);

    return () => {
      if (url === undefined) {
        return;
      }

      URL.revokeObjectURL(url);
      console.log("revoked:", url);
    };
  }, [selectedFile]);

  return {
    modelUrl,
  };
};

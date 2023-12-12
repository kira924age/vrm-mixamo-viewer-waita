import React, { useRef } from "react";

export const useChooseFile = (setCurrentAction: (a: string) => void) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<File | undefined>(undefined);

  const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleClickChooseButton = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentAction("stop");

    const dropedFile: File | undefined = event.dataTransfer?.files?.[0];
    if (dropedFile === undefined) {
      return;
    }

    setFile(dropedFile);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return {
    file,
    handleChooseFile,
    inputRef,
    handleClickChooseButton,
    handleDrop,
    handleDragOver,
  };
};

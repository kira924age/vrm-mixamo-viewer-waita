import React from "react";
import { Header } from "./components/Header";
import { VRMCanvas } from "./components/VRMCanvas";
import { DragMessageCard } from "./components/DragMessageCard";
import { ChooseFileButton } from "./components/ChooseFileButton";
import { NavigationBar } from "./components/NavigationBar";

import styles from "./App.module.scss";
import { useChooseFile } from "./hooks/useChooseFile";
import { useModel } from "./hooks/useModel";
import { useCurrentAction } from "./hooks/useCurrentAction";

const App: React.FC = () => {
  const { currentAction, setCurrentAction } = useCurrentAction();
  const {
    file,
    handleChooseFile,
    inputRef,
    handleClickChooseButton,
    handleDrop,
    handleDragOver,
  } = useChooseFile(setCurrentAction);

  const { modelUrl } = useModel(file);

  return (
    <div
      className={styles["app-container"]}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Header />
      <div className={styles["main"]}>
        {modelUrl === undefined && (
          <>
            <DragMessageCard />
            <ChooseFileButton onClick={() => handleClickChooseButton()} />
            <input type="file" ref={inputRef} onChange={handleChooseFile} />
          </>
        )}

        {modelUrl !== undefined && (
          <>
            <VRMCanvas src={modelUrl} action={currentAction} />
            <NavigationBar setCurrentAction={setCurrentAction} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

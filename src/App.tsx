import type React from "react";
import styles from "./App.module.scss";
import { ChooseFileButton } from "./components/ChooseFileButton";
import { DragMessageCard } from "./components/DragMessageCard";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import { VRMCanvas } from "./components/VRMCanvas";
import { useChooseFile } from "./hooks/useChooseFile";
import { useCurrentAction } from "./hooks/useCurrentAction";
import { useModel } from "./hooks/useModel";

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
    <section
      className={styles["app-container"]}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      aria-label="VRM model drop area"
    >
      <Header />
      <div className={styles.main}>
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
    </section>
  );
};

export default App;

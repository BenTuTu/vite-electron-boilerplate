import React, { useEffect, memo } from "react";

import store, { s1 } from "../store";

const App = () => {
  useEffect(() => {
    Notification.requestPermission((status: string) => {
      console.log(
        "π ~ file: App.tsx ~ line 6 ~ Notification.requestPermission ~ status",
        status
      );
    });
    store.info.name = "xbb";
    store.name = "ζ¨‘εεΌηεΌη¨";
    console.log(s1);

    async function getMediaDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    return () => {};
  }, []);
  useEffect(() => {
    // Display the current version
    let version = window.appVersion;
    console.log("π ~ file: App.tsx ~ line 62 ~ useEffect ~ version", version);
    const versionEle = document.getElementById("version") as HTMLDivElement;
    versionEle.innerText = version;

    // Listen for messages
    window.ipcRenderer.on("message", function (event: Event, text: string) {
      console.log("π ~ file: App.tsx ~ line 68 ~ text", text);
      const container = document.getElementById("messages") as HTMLDivElement;
      const message = document.createElement("div");
      message.innerHTML = text;
      container.appendChild(message);
    });
    return () => {
      (window as any).ipcRenderer.removeAllListener("message");
    };
  }, []);
  const createNotification = () => {
    const nf = new Notification("ζ ι’", {
      body: "θΏζ―h5ηιη₯",
      icon: "https://www.easyicon.net/api/resizeApi.php?id=1081455&size=32",
    });
    return nf;
  };
  const showNotify = () => {
    const nf = createNotification();
    setInterval(createNotification, 10000);

    nf.onclick = () => {
      console.log("ηΉε»ηιη₯");
    };

    nf.onclose = () => {
      console.log(
        "π ~ file: App.tsx ~ line 20 ~ showNotify ~ Notification",
        Notification
      );
    };
  };

  const startDownload = () => {
    window.ipcRenderer
      .invoke("startDownload", { update: true })
      .then((data) => {
        console.log(
          "π ~ file: App.tsx ~ line 104 ~ ipcRenderer.invoke ~ data",
          data
        );
      });
  };

  return (
    <div>
      Current version: <span id="version">vX.Y.Z</span>
      <div id="messages">messages:</div>
      <button onClick={showNotify}>ζΎη€Ίιη₯</button>
      <button onClick={startDownload}>εΌε§δΈθ½½</button>
    </div>
  );
};

export default memo(App);

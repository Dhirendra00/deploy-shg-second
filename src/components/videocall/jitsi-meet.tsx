import React, { FunctionComponent, useState, useEffect } from "react";

import { loadScript } from "./utils";

interface Jitsi {
  new (domain: string, options: Record<string, any>): JitsiInstance;
}

interface JitsiInstance {
  dispose: () => void;
  executeCommand: (command: string, args?: any) => void;
  on: (event: string, cb: Function) => void;
  addListener: (event: string, cb: Function) => void;
  getIframe: () => HTMLIFrameElement;
}

interface JitsiProps {
  roomName: string;
  displayName: string;
  onEnd: () => void;
}

declare global {
  interface Window {
    JitsiMeetExternalAPI: Jitsi;
  }
}

export const JitsiMeet: FunctionComponent<JitsiProps> = ({
  roomName,
  displayName,
  onEnd,
}) => {
  const [jitsi, setJitsi] = useState<JitsiInstance | null>(null);

  const load = () => {
    return loadScript("https://meet.jit.si/external_api.js", true);
  };

  const createMeet = () => {
    return new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.getElementById("jitsi-root"),
      roomName,
      userInfo: {
        displayName,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DISPLAY_WELCOME_PAGE_CONTENT: false,
        SHOW_CHROME_EXTENSION_BANNER: false,
        SHOW_POWERED_BY: false,
        SHOW_PROMOTIONAL_CLOSE_PAGE: true,
      },
      configOverwrite: {
        disableSimulcast: false,
        enableClosePage: true,
      },
    });
  };

  const initialize = async () => {
    await load();
    setJitsi(createMeet());
  };

  const destroy = () => {
    jitsi?.dispose();
  };

  React.useEffect(() => {
    initialize(), destroy();
  }, []);

  // useLifecycles(
  //   () => initialize(),
  //   () => destroy()
  // );
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message = "Are you sure you want to leave? Your Videocall will end.";
    e.returnValue = message;
    return message;
  };
  return <div id="jitsi-root" style={{ height: 720, width: "100%" }} />;
};

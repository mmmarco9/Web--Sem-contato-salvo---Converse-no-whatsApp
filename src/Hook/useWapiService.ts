import { MockWapi } from "@/Services/MockWapi";
import { Wapi } from "@/Services/Wapi";
import { ComwoClient } from "@/app/Comwo";
import { IWapi } from "@/app/WapiService";

import { useState, useEffect, useRef } from "react";
import { singletonHook } from "react-singleton-hook";

export const wapiClient = new ComwoClient();
wapiClient.run();

const init = {
  wapiService: undefined as IWapi | undefined,
};

function useWapiServiceImpl() {
  const [wapiService, setWapiService] = useState<IWapi>();

  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT === "dev") {
      setWapiService(new MockWapi());
    } else {
      setWapiService(new Wapi(wapiClient));
    }
  }, []);

  return {
    wapiService,
  };
}

export const useWapiService = singletonHook(init, useWapiServiceImpl);

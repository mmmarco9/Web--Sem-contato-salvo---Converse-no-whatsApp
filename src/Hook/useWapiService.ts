import { MockWapi } from "@/Services/MockWapi"
import { Wapi } from "@/Services/Wapi"
import { ComwoClient } from "@/app/Comwo"
import { IWapi } from "@/app/WapiService"


import { useState, useEffect, useRef } from "react"
import { singletonHook } from "react-singleton-hook"

export const wapiClient = new ComwoClient()
wapiClient.run()

const init = {
    wapiService: undefined as IWapi | undefined,
}

function useWapiServiceImpl() {
    const [wapiService, setWapiService] = useState<IWapi>()

    useEffect(() => {
        if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
            console.log(`Develop mode - switching to mock wapi`)
            setWapiService(new MockWapi())

        } else {
            console.log(`Production mode- switching to real wapi`)
            setWapiService(new Wapi(wapiClient))
        }
    }, [])

    return {
        wapiService
    }

}

export const useWapiService = singletonHook(init, useWapiServiceImpl);



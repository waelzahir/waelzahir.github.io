import { useEffect } from "react";
import { InitState } from "../types/GlobalMetadata";
import { backgtounds } from "../Metadata/background";

export const useSetBackground = (InitState:InitState) => {
    useEffect(() => {
        const desktop = document.getElementById("Desktop");
        if (!desktop)
            return ;
        desktop.style.backgroundImage = `url('${backgtounds[InitState.background]}')`
    },[InitState])
}
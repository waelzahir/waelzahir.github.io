import { useEffect } from "react";
import { Envirment } from "../types/Envirment";

 const backgtounds = [
     "https://w.wallhaven.cc/full/jx/wallhaven-jxqrw5.jpg",
    "https://w.wallhaven.cc/full/we/wallhaven-wevker.png",
    "https://w.wallhaven.cc/full/6d/wallhaven-6dgpol.png"
]
export const useSetBackground = (Environ: Envirment) => {
    useEffect(() => {
        const desktop = document.getElementById("Desktop");
        if (!desktop)
            return ;
        desktop.style.backgroundImage = `url('${backgtounds[Environ.Background]}')`
    },[Environ])
}
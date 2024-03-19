

import { Envirment } from "../types/Envirment"

// const updatePersistance = (setter:any, val:boolean) =>
// {

//     setter((prev: Envirment)  : Envirment => {
//         return {
//             Background: prev.Background,
//             fileid: prev.fileid,
//             zindex: prev.zindex,
//             process: prev.process,
//             persistant: val,
//             user : prev.user
//         }
//     })
// }
const login = (setter:any) => {
    setter((prev: Envirment):Envirment => {
        return {
            Background: prev.Background,
            fileid: prev.fileid,
            zindex: prev.zindex,
            process: prev.process,
            persistant: prev.persistant,
            user : 0
        }
    })
}
const Animation = () => {

        return (
        <div className="w-full h-screen bg-purple-800 flex flex-col gap-y-10 justify-center items-center"> 
            <h1 className="text-6xl font-egoist font-bold text-white">
                Welcome To My Portfolio
            </h1> 
            <h1 className="text-xl font-egoist font-bold text-white">
                this portfolio is under construction
            </h1> 

        </div>
        )
}
const WelcomePage  = ({Env} : {Env: [Envirment, React.Dispatch<React.SetStateAction<Envirment>>]}) =>{
   
        setTimeout(() => login(Env[1]), 2000)
        return <Animation />
}


export default WelcomePage
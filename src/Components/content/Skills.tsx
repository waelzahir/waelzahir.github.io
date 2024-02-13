import Eye from "../../assets/Eye"

const Skills  = ({dark} : {dark: boolean} ) => 
{
    return (
        <div id="skill" className="w-full min-h-screen pt-9">
            <div className="pl-4 h-6 flex items-center gap-x-4">
                <Eye  color={`${dark ? "#fcfcfc" : "#2D2D2D"}`}/>
                <h1 className="text-center font-egoist text-2xl">Skills</h1>
            </div>
        </div>
    )
}
export default Skills
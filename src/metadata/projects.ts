import { ProjectInfo } from "../Components/types/ProjectInfo";

const AllProjects: Map<string, ProjectInfo> = new Map()


 const ListProjects = [
    "Transcendance",
    "waelzahir.github.io",
    "IRC-Server" ,
    "inception" ,
    "42_minishell" ,
    "philosophers" ,
    "Python101",
    "cub3d" ,
    "Pipex" ,
    "push_swap" ,
    "ft_printf",
    "GetNextLine" ,
    'Libft-42' ,
]
const Padding: ProjectInfo ={
    clone_url:"",
    description:"",
    html_url:"",
    language:"",
    name:"",
    topics: [],
}
ListProjects.map((proj:string) => AllProjects.set(proj, Padding))
export default AllProjects;
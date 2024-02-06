import { ProjectInfo } from "../Components/types/ProjectInfo";

const AllProjects: Map<string, ProjectInfo> = new Map()


 const ListProjects = [
    'Libft-42' ,
    "Pipex" ,
    "ft_printf",
    "gnl" ,
    "Transcendance",
    "IRC-Server" ,
    "inception" ,
    "cub3d" ,
    "42_minishell" ,
    "philosophers" ,
    "push_swap" ,
    "waelzahir.github.io",
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
export type about =
{
    name:string,
    picture:string,
    Header:string,
    me:string;
    frontEnd:string,
    backend:String,
    data:string,
    tools:string,
    resumefr:string,
    resumeen:string,
    topics: Map <string, number>;
}

const WhoAmI:about =
{
    name: "Ouail Zahir",
    picture: "https://media.licdn.com/dms/image/D4E03AQFOPtUes_7Fqg/profile-displayphoto-shrink_800_800/0/1671912678224?e=1716422400&v=beta&t=Mhc0Bii7EuiXQtedroR6vLGmfktY08yiG93FN62OimU",
    Header: " Experienced Full Stack Developer | Next.js | React.js | Node.js | NestJS | PostgreSQL | Git | Docker",
    me:"Hello! I'm Ouail Zahir, a  full stack developer.",
    frontEnd:"On the Front End,  I excel at crafting user-friendly interfaces React.js. With a keen eye for design and a focus on user experience, I strive to deliver intuitive and visually appealing solutions that captivate audiences.",
    backend: "On the backend, I specialize in developing robust applications using Node.js, NestJS, and C++. Whether it's building APIs, handling authentication, or optimizing performance, I leverage my expertise to ensure seamless functionality and scalability.",
    data:"When it comes to databases, I'm adept at managing data with PostgreSQL, TypeORM, and Prisma. From data modeling to query optimization, I ensure efficient storage and retrieval of information to support your application's needs.",
    tools: "Additionally, I'm proficient in Git and Docker, enabling smooth collaboration and streamlined deployment processes. With a strong foundation in version control and containerization, I facilitate efficient development workflows and maintainable codebases.",
    resumefr: "frresume.pdf",
    resumeen: "enresume.pdf",
    topics: new Map()
} 
export default WhoAmI

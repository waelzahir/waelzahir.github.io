const Download  =  ({color} : {color: string}) =>
{
    return (
        <svg className="w-4" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 14V20M18.5 20L16 17.5M18.5 20L21 17.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}
export default Download
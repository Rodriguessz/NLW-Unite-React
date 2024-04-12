import { ComponentProps } from "react";

interface SearchinputProps extends ComponentProps<"input"> {}


export function Searchinput (props : SearchinputProps){
    return(
        <input className=" w-[280px] bg-transparent border-[1px] border-zinc-800 pl-10 py-1.5 rounded-lg bg-[url('./assets/search.svg')] bg-left-search bg bg-no-repeat " {...props}/>
    )
}
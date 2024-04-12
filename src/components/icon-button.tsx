import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
    transparent? : boolean,
}


export function IconButton( {transparent , ...props} : IconButtonProps){
    return(

        <button 
        {...props} 
        
        // className={transparent ? "border border-white/10 rounded-md w-7 h-7 bg-black/20 flex items-center justify-center" : "border border-white/10 rounded-md w-7 h-7 bg-white/10 flex items-center justify-center"}
        className={
            twMerge('border-white/10 rounded-md w-7 h-7 bg-black/20 flex items-center justify-center',
            transparent ? "bg-black/20" : "bg-white/10",
            props.disabled ? "opacity-50" : null
            )

            }
        />

    )
}
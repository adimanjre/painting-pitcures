import { useEffect, useState} from "react";

export default function useMatchMedia(query:string){
    const [match, setMatch] = useState(window.matchMedia(query).matches);

    useEffect(()=>{
        const callBack = function(event:MediaQueryListEvent){
            console.log(event);
            if(event.matches){
                setMatch(true);
            }else{
                setMatch(false);
            }
        }
        const isMatch = window.matchMedia(query);
        isMatch.addEventListener("change",callBack)
    },[query]);

    return match;
}
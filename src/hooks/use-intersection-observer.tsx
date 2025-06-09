import { useEffect, useRef, useState} from "react"

const useInterSectionObserver = (options:IntersectionObserverInit): [React.Ref<HTMLDivElement>,boolean,boolean, {():void} ] =>{
    const target = useRef<HTMLDivElement>(null);
    const[visible, setVisible] = useState(false);
    const[ready, setReady] = useState(false);

    const handleBlur = ()=>{
        if(visible) setReady(true);
    }

    useEffect(()=>{
        const callBack = (entries:IntersectionObserverEntry[])=>{
            const isVisible = entries[0].isIntersecting;
            if(isVisible){
                setVisible(true);
                return;
            }
            return;
        };
        const observer = new IntersectionObserver(callBack,options);
        let currentTarget;
        if(target){
        currentTarget = target.current;
        observer.observe(currentTarget!);

        return () => {if(target) observer.unobserve(currentTarget!);}
        }
    },[options, target]);

    return [target,visible,ready,handleBlur];
}

export default useInterSectionObserver;


const MarqueeCard:React.FC<{url:string}> = ({url}) => {
  return (
    <div className="bg-[#3D3D3D] border border-[#747178] rounded-2xl p-5 w-[300px]">
        <img src={url} className="h-full object-contain" />
    </div>
  )
}

export default MarqueeCard
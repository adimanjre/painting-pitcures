import Button from "./Button"
import ArrowIcon from "./svg/ArrowIcon"

const ReelSection = () => {
  return (
    <section className="mt-10 relative h-[60vh]">
        <div className="absolute bottom-5 z-2 left-5">
            <h2 className="text-2xl md:text-4xl font-bold">Watch Showreel</h2>
        <p className="mt-5">Our showreel is an amalgamation of our best work <br/> for our clients, from music videos to digital commercials and short films.</p>
        <Button classes="bg-[#DC1D13] mt-5 text-white flex gap-3 items-center">
            <span>Get in Touch</span>
            <span>
                <ArrowIcon color="white"/>
            </span>
        </Button>
        </div>
        <div className="h-full w-full absolute top-0 left-0 bg-black z-1 opacity-35 rounded-2xl"></div>
        <img src="reel.png" className="absolute w-screen z-0 h-full object-cover top-0 rounded-2xl" />
    </section>
  )
}

export default ReelSection
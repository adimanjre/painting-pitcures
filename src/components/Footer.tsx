import Button from "./Button"
import Input from "./Input"

const Footer = () => {
  return (
    <footer className="mt-20 pt-10 border-t border-t-[#747178]">
        <div className="flex gap-10">
            <div className="flex-1">
                <img src="logo.png" />
                <p>
                    Our team of designers, video editors, marketers, and creators collaborate to shape dynamic strategies and elevate your brand with captivating content and seamless campaigns, transforming the digital landscape.
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-2xl font-medium">Contact Info</h3>
                <div className="text-lg">
                    <div>+44 7587812572</div>
                    <div>info@paintingpictures.co.in</div>
                </div>
                <div className="text-lg">
                    <div>+44 7587812572</div>
                    <div>info@paintingpictures.co.in</div>
                </div>
                <div className="text-lg">
                    <div>+44 7587812572</div>
                    <div>info@paintingpictures.co.in</div>
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-medium">Get in touch</h3>
                <p className="mt-5">Get in touch to begin working with us. Do not worry, we will never spam you.</p>
                <Input type="input" placeholder="Email" classes="mt-5"/>
                <Button classes="text-white bg-[#DC1D13] w-full mt-5">
                    Submit
                </Button>
            </div>
        </div>
    </footer>
  )
}

export default Footer
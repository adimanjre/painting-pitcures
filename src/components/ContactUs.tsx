import Input from "./Input"
import SectionContent2 from "./SectionContent2"

const ContactUs = () => {
  return (
    <section className="mt-10 pt-10">
        <SectionContent2 title="Send Us a Message">
            <form className="mt-10">
                <div className="grid grid-cols-2 gap-5">
                    <div><Input type="input" placeholder="First Name" /></div>
                    <div><Input type="input" placeholder="Last Name" /></div>
                    <div><Input type="input" placeholder="Email Address" /></div>
                    <div><Input type="input" placeholder="Mobile No" /></div>
                    <div className="col-span-2"><Input type="textarea" placeholder="Subject"/></div>
                    <div className="col-span-2"><Input type="textarea" placeholder="Details" classes="h-28"/></div>
                </div>
                
            </form>
        </SectionContent2>
    </section>
  )
}

export default ContactUs
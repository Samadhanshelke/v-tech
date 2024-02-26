import solarImg1 from '../../assets/photo-1502637098811-fa9526d2b659.jpg'
import solarImg2 from '../../assets/photo-1628206554160-63e8c921e398.jpg'
import solarImg3 from '../../assets/photo-1508001300512-4763bb1c5583.jpg'

function OurGoal() {
  return (
    <section className="container px-4 mt-12 ">
    <div className="text-theme-dark text-4xl mt-2">
        Our Work
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4  mt-9 rounded-3xl overflow-hidden">
        <div className="lg:col-span-2 h-72">
            <img src={solarImg1} className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className="h-72">
            <img src={solarImg2} className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className="h-72">
            <img src={solarImg3} className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className=" h-72">
                <img src={solarImg2} className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className=" lg:col-span-2 h-72">
            <img src={solarImg1} className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className="h-72">
            <img src={solarImg3} className="w-full h-full object-cover" alt="bg"/>
        </div>
    </div>
</section>
  )
}

export default OurGoal
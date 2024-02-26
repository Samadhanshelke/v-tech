import infraImg from '../../assets/photo-1497435334941-8c899ee9e8e9.jpg'
import energyImg from '../../assets/photo-1594818379496-da1e345b0ded.jpg'
function WhatWe() {
  return (
    <section className="container px-4  mt-32 ">
        <div className=" text-lg  text-theme-dark  ">
            WHO WE ARE
        </div>
        <p className="mt-3 text-4xl text-theme-dark font-bold max-w-2xl">V-TECH offers innovative
            solar solutions tailored for both
            businesses and homeowners.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-20 ">
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl">
                <img src={infraImg} className="h-full w-full object-cover" alt=""/>
                <div className="rounded-3xl absolute bottom-0 w-full  text-white p-4 md:p-9  bg-gradient-to-t from-black from-40% ">
                    <div className="text-lg md:text-2xl  font-bold">Electrical Infra &amp; Civil</div>
                    <div className="mt-4">
                        Our expertise lies in delivering
                        specialized electrical and structural
                        solutions designed to support solar
                        projects.
                    </div>
                </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl">
                <img src={energyImg} className="h-full w-full object-cover" alt=""/>
                <div className="rounded-3xl absolute bottom-0 w-full  text-white p-4 md:p-9  bg-gradient-to-t from-black from-40% ">
                    <div className="text-lg md:text-2xl font-bold">Energy Storage</div>
                    <div className="mt-4">
                        We excel in enhancing the value of
                        renewable energy investments
                        through efficient energy storage
                        solutions.
                    </div>
                </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl">
                <img src={infraImg} className="h-full w-full object-cover" alt=""/>
                <div className="rounded-3xl absolute bottom-0 w-full  text-white p-4 md:p-9  bg-gradient-to-t from-black from-40% ">
                    <div className="text-lg md:text-2xl  font-bold">Scheduling and Controlling</div>
                    <div className="mt-4">
                        Precise planning and monitoring for
                        project efficiency
                    </div>
                </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl">
                <img src={energyImg} className="h-full w-full object-cover" alt=""/>
                <div className="rounded-3xl absolute bottom-0 w-full  text-white p-4 md:p-9  bg-gradient-to-t from-black from-40% ">
                    <div className="text-lg md:text-2xl  font-bold">Procurement Management</div>
                    <div className="mt-4">
                        Meticulous selection and sourcing of
                        solar equipment.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatWe
import herobg2 from '../../assets/hero-bg-two.jpg'

function Location() {
  return (
    <section className="container px-4 mt-32 border-b border-gray-300 pb-12">
        <div className="text-theme-dark text-4xl mt-2">
            Locations
        </div>
        <div className="lg:flex gap-12 mt-12">
            <div className="lg:w-2/5 rounded-3xl overflow-hidden">
                <img src={herobg2} className="w-full h-full object-cover" alt="location pic"/>
            </div>

            <div className="lg:w-3/5 px-3 space-y-8 text-xl mt-6">
                <div className="flex gap-3 ">
                    <div className="text-theme-default">Location:</div>
                    <div>Delhi</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">Address:</div>
                    <div>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">Ph No:</div>
                    <div>+91 90987 97979</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">E-mail</div>
                    <div>info@vtech.com</div>
                </div>
            </div>
        </div>


        <div className="lg:flex lg:flex-row-reverse gap-12  mt-12">
            <div className="lg:w-2/5 rounded-3xl overflow-hidden ">
                <img src={herobg2} className="w-full h-full object-cover" alt="location pic"/>
            </div>

            <div className="lg:w-3/5 px-3 space-y-8 text-xl mt-6">
                <div className="flex gap-3 ">
                    <div className="text-theme-default">Location:</div>
                    <div>Delhi</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">Address:</div>
                    <div>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">Ph No:</div>
                    <div>+91 90987 97979</div>
                </div>

                <div className="flex gap-3">
                    <div className="text-theme-default">E-mail</div>
                    <div>info@vtech.com</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location
import leftrightImg from '../../assets/l-to-r.svg'
import righttoleftImg from '../../assets/r-to -l.svg'

import data from '../../utils/data'
function DesignAndEngineering() {

  return (
    <section className=" pt-32 container px-4 ">
        <h1 className="text-4xl font-bold">Design and Engineering</h1>
        {
            data.map((item)=>{
                return <div key={item.id}>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center lg:items-start lg:justify-start gap-x-4 mt-8 bg-white shadow-2xl p-2 rounded-md'>
                            <img src={item.image} className='sm:w-[40vw] h-[200px] rounded-l-md' alt="" />
                            <div className='sm:w-[60vw] p-2'>
                                 <h3 className='text-xl font-semibold my-2'>{item.title}</h3>
                                 <span>{item.description}
                                 </span>
                            </div>
                        </div>
                        {
                            item.id !== data.length  &&
                        <img className='w-full' src={item.id %2 ===0 ? righttoleftImg: leftrightImg} alt="" />
                        }
                </div>
            })
           

        }
    </section>
  )
}

export default DesignAndEngineering
import founderImg from '../../assets/photo-1556157382-97eda2d62296.jpg'

function AboutFounder() {
  return (
    <section className="container px-4 mt-32 border-b border-gray-300 pb-12">
    <div className="text-theme-dark text-4xl mt-2">
        Meet Our Founder
    </div>
    <div className="lg:flex gap-12 rounded-3xl overflow-hidden mt-12">
        <div className="lg:w-2/5">
            <img src={founderImg} className="w-full h-full object-cover" alt="founder pic"/>
        </div>

        <div className="lg:w-3/5 p-3">
            <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum alias, explicabo
                similique
                voluptates quidem natus temporibus. Quas saepe iure architecto. Reprehenderit magnam autem et est
                dolorem laboriosam qui accusamus, officia ratione distinctio sapiente modi eius placeat alias minima
                rem voluptate veniam perspiciatis. Exercitationem, vero?
            </div>
            <div className="flex gap-3 text-lg font-bold  mt-6">
                <div className="text-theme-default">Founder:</div>
                <div>Hola</div>
            </div>
        </div>
    </div>

    <div className="lg:flex lg:flex-row-reverse gap-12 rounded-3xl overflow-hidden mt-12">
        <div className="lg:w-2/5 ">
            <img src={founderImg} className="w-full h-full object-cover" alt="founder pic"/>
        </div>

        <div className="lg:w-3/5 p-3">
            <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum alias, explicabo
                similique
                voluptates quidem natus temporibus. Quas saepe iure architecto. Reprehenderit magnam autem et est
                dolorem laboriosam qui accusamus, officia ratione distinctio sapiente modi eius placeat alias minima
                rem voluptate veniam perspiciatis. Exercitationem, vero?
            </div>
            <div className="flex gap-3 text-lg font-bold  mt-6">
                <div className="text-theme-default">Founder:</div>
                <div>Hola</div>
            </div>
        </div>
    </div>

</section>
  )
}

export default AboutFounder
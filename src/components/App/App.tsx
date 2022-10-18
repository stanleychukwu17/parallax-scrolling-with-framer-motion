import './app.scss';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, useTransform} from 'framer-motion';
// import { gsap } from 'gsap'; 

// import of assets
import img0 from '../../assets/3.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'


// const t1 = 'S'.split('');
const t1 = 'STANLEY'.split('');
const t1Length = Math.floor(t1.length / 2) - 1
const t2 = 'PARALLAX'.split('');
const t2Length = Math.floor(t2.length / 2) - 1


const TxtComp = ({item, speed}: {item:string, speed:number}) => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 end", "end start"]
    })
    const moveY = useTransform(scrollYProgress, [0, .5, 1], [0, 50, 100 * speed])

    return  <motion.div style={{y:moveY}} ref={ref}>{item}</motion.div>
}

const ImgComp = ({img, speed}: {img:string, speed:number}) => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 end", "end start"]
    })
    const moveY = useTransform(scrollYProgress, [0, .5, 1], [0, 50, 100 * speed])

    return <motion.div style={{y:moveY}} ref={ref}><img src={img} alt="" /></motion.div>
}



const App = () => {
    const {scrollYProgress} = useScroll()
    const indicatorX = useSpring(scrollYProgress, {mass: 0.1})
    

    return (
        <div className="AppMain">
            <motion.div className="indicator" style={{scaleX: indicatorX, originX: 0}}></motion.div>
            <div className="AppHero">
                {
                    t1.map((item:string, index:number) => {
                        return <TxtComp key={`${item}-${index}`} item={item} speed={index - t1Length} />
                    })
                }
            </div>
            <div className="AppImg">
                <ImgComp speed={2} img={img0} />
                <ImgComp speed={6} img={img1} />
                <ImgComp speed={2} img={img2} />
            </div>
            <div className="AppHero">
                {
                    t2.map((item:string, index:number) => {
                        return <TxtComp key={`${item}-${index}`} item={item} speed={index - t2Length} />
                    })
                }
            </div>
            <div className="AppImg">
                <ImgComp speed={-4} img={img4} />
                <ImgComp speed={6} img={img5} />
                <ImgComp speed={-4} img={img6} />
            </div>
        </div>
    )
}
export default App;
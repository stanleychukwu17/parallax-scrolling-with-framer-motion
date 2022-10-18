import './app.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform} from 'framer-motion';
// import { gsap } from 'gsap'; 

// import of assets
import img0 from '../../assets/3.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'


// i had to split each text to allow for better parallax effect of each letter
const t1 = 'STANLEY'.split('');
const t1Length = Math.floor(t1.length / 2) - 1
const t2 = 'PARALLAX'.split('');
const t2Length = Math.floor(t2.length / 2) - 1
const t3 = 'DESIGN.'.split('');


// the Component for each of the text
const TxtComp = ({item, speed}: {item:string, speed:number}) => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref, // i only want the parallax effect to kick off once the items are on screen
        offset: ["0 end", "end start"] // check framer-motion doc for more explanation on offset
    })
    const moveY = useTransform(scrollYProgress, [0, .5, 1], [0, 5*speed, 100 * speed]) 

    return  <motion.div style={{y:moveY}} ref={ref}>{item}</motion.div>
}

const ImgComp = ({img, speed}: {img:string, speed:number}) => {
    let useY
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 end", "end start"]
    })

    const moveDef = useTransform(scrollYProgress, [0, .5, 1], [0, 5, 100 * speed])
    const moveDwn = useTransform(scrollYProgress, [0, .5, 1], [0, 5, 100 * 7])
    const moveLeft = useTransform(scrollYProgress, [0, .5, 1], ['0%', '50%', '100%'])
    const moveRUp = useTransform(scrollYProgress, [0, .5, 1], [0, -30 * 1, 100 * 5.5])
    const moveRight = useTransform(scrollYProgress, [0, .5, 1], ['-0%', '-50%', '-100%'])
    const scale = useTransform(scrollYProgress, [0, .7, 1], [1, .9, .8])

    if (speed === -11) {
        useY = {y:moveDwn, x:moveLeft, scale}
    } else if (speed === -12) {
        useY = {y:moveRUp, x:moveRight, scale}
    } else {
        useY = {y:moveDef}
    }

    return <motion.div style={useY} ref={ref}><img src={img} alt="" /></motion.div>
}



const App = () => {
    const {scrollYProgress} = useScroll()
    const indicatorX = useSpring(scrollYProgress, {mass: 0.1})
    const bg = useTransform(scrollYProgress, [0, .3, 1], ['#000','#000', '#fff'])
    const color = useTransform(scrollYProgress, [0, .6, .7, 1], ['#fff','#fff', '#000', '#000'])
    

    return (
        <motion.div className="AppMain" style={{backgroundColor: bg}}>
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
            <motion.div className="AppHero" style={{color}}>
                {
                    t2.map((item:string, index:number) => {
                        return <TxtComp key={`${item}-${index}`} item={item} speed={index - t2Length} />
                    })
                }
            </motion.div>
            <div className="AppImg">
                <ImgComp speed={-11} img={img4} />
                <ImgComp speed={6} img={img5} />
                <ImgComp speed={-12} img={img6} />
            </div>
            <motion.div className="AppHero" style={{color}}>
                {
                    t3.map((item:string, index:number) => {
                        return <TxtComp key={`${item}-${index}`} item={item} speed={1} />
                    })
                }
            </motion.div>
            <div className="AppImg">
                <ImgComp speed={8} img={img4} />
                <ImgComp speed={-5} img={img5} />
                <ImgComp speed={5} img={img6} />
            </div>
        </motion.div>
    )
}
export default App;
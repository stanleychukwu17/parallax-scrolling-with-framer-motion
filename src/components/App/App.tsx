import './app.scss';
// import { useEffect } from 'react'; useTransform
import { motion, useScroll, useSpring} from 'framer-motion';
// import { gsap } from 'gsap';

// import of assets
import img0 from '../../assets/3.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'


const t1 = 'STANLEY'.split('');
const t2 = 'PARALLAX'.split('');

const TxtComp = ({item}: {item:string}) => {
    return  <div className="">{item}</div>
}

const ImgComp = ({img}: {img:string}) => {
    return <div className=""><img src={img} alt="" /></div>
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
                        return <TxtComp key={`${item}-${index}`} item={item} />
                    })
                }
            </div>
            <div className="AppImg">
                <ImgComp img={img0} />
                <ImgComp img={img1} />
                <ImgComp img={img2} />
            </div>
            <div className="AppHero">
                {
                    t2.map((item:string, index:number) => {
                        return <TxtComp key={`${item}-${index}`} item={item} />
                    })
                }
            </div>
        </div>
    )
}
export default App;
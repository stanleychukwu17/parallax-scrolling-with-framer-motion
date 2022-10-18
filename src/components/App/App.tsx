import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// import of assets
import img0 from '../../assets/3.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'


const t1 = 'STANLEY'.split('');
console.log(t1)
const App = () => {

    return (
        <div className="AppMain">
            <div className="indicator"></div>
            <div className="AppHero">
                {
                    t1.map((item:string, index:number) => {
                        return (
                            <div className="" key={`${item}-${index}`}>{item}</div>
                        )
                    })
                }
            </div>
            <div className="AppImg">
                <div className=""><img src={img0} alt="" /></div>
                <div className=""><img src={img1} alt="" /></div>
                <div className=""><img src={img2} alt="" /></div>
            </div>
            <div className="AppHero">
                {
                    t1.map((item:string, index:number) => {
                        return (
                            <div className="" key={`${item}-${index}`}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default App;
import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

const t1 = 'Parallax'.split('');
console.log(t1)
const App = () => {

    return (
        <div className="AppMain">
            <div className="AppHero">
                {
                    t1.map((item:string, index:number) => {
                        return (
                            <div className="" key={`${item}-${index}`}>{item}</div>
                        )
                    })
                }
            </div>
            <div className="">
                <div className=""><img src="" alt="" /></div>
                <div className=""><img src="" alt="" /></div>
                <div className=""><img src="" alt="" /></div>
            </div>
        </div>
    )
}
export default App;
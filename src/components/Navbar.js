import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import plane from '../svg/plane-solid.svg'

const Navbar = () => {
    const router = useRouter()
    const mainPage = useRef();
    const mainPageSVG = useRef();
    const civilAviation = useRef();
    const militaryAviation = useRef();
    const experimentalAviation = useRef();
    const MCHSAviation = useRef();
    const game = useRef();
    
    useEffect(() => {
        console.log(router);
        switch(router.pathname){
            case "/":
                mainPage.current.classList.add(styles.location)
                mainPageSVG.current.classList.add(styles.locationSVG)
                break;
            case "/civilAviation":
                civilAviation.current.classList.add(styles.location)
                break;
            case "/militaryAviation":
                militaryAviation.current.classList.add(styles.location)
                break;
            case "/experimentalAviation":
                experimentalAviation.current.classList.add(styles.location)
                break;
            case "/MCHSAviation":
                MCHSAviation.current.classList.add(styles.location)
                break;
            case "/game":
                game.current.classList.add(styles.location)
                break;
            default:
                break;
        }
    }, [])

    return(
        <div className={styles.navbar}>
            <div className={styles.container}>
                <h2 className={styles.h1}>Авиация в России:</h2>
                <Link ref={mainPage} href="/" id='mainPage' className={styles.link}>
                    <div style={{display: "flex", alignItems: 'center'}}>
                        <svg ref={mainPageSVG} xmlns='http://www.w3.org/2000/svg' fill='#c6c6c6' height="24" viewBox='0 0 576 512'><path d='M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z'/></svg>
                    </div>
                </Link>
                <Link ref={civilAviation} href="/civilAviation" id='mainPage' className={styles.link}>
                    Гражданская
                </Link>
                <Link ref={militaryAviation} href="/militaryAviation" className={styles.link}>
                    Военная
                </Link>
                <Link ref={experimentalAviation} href="/experimentalAviation" className={styles.link}>
                    Экспериментальная
                </Link>
                <Link ref={MCHSAviation} href="/MCHSAviation" className={styles.link}>
                    МЧС
                </Link>
                <Link ref={game} href="/game" className={styles.link}>
                    Игра
                </Link>
                <Link className={styles.link} href="https://old.bigenc.ru/technology_and_technique/text/4424451" target="_blank">
                    Узнать больше...
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
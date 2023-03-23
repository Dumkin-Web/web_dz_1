import Link from 'next/link';
import styles from '../styles/Pagenav.module.css'


const Pagenav = ({sections = {}}) => {
    return(
        <div className={styles.pagenav}>
            <h4 style={{marginBottom: '15px'}}>Навигация по разделу:</h4>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            {Object.keys(sections).map((key) => {
                return <Link className={styles.href} href={"#"+key} key={key}>{sections[key]}</Link>
            })}
            </div>
            <p className={styles.p} onClick={() => window.scrollTo(0,0)}>Наверх</p>
        </div>
    )
}

export default Pagenav;
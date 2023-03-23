import { useEffect, useRef } from 'react';
import styles from '../styles/ContactForm.module.css'

const MeilingForm = ({isActive, setIsActive}) => {

    const display = useRef();

    useEffect(() => {
        if(isActive){
            display.current.style.display = "block";
            document.body.style.overflow = "hidden"   
            return
        }
        display.current.style.display = "none";
        document.body.style.overflow = "auto"  
    }, [isActive])

    return(
        <div ref={display} className={styles.ContactForm} onClick={() => {setIsActive(false)}}>
            <form className={styles.form} onClick={e => {e.stopPropagation()}}>
                <h2 style={{marginBottom: "20px", color: "#303030"}}>Подписка на рассылку новостей</h2>
                <input className={styles.input} name='name' type="text" placeholder='Имя' />
                <input className={styles.input} name='surname' type="text" placeholder='Фамилия' />
                <input className={styles.input} name='phone' type="tel" placeholder='+7(987)654-32-10' />
                <input className={styles.input} name='email' type="email" placeholder='email@example.com' />
                <div style={{border: "none", display: "flex", alignItems: "center", marginBottom: "20px"}}><input type="checkbox" name='mailingAgreement' id='mailingAgreement' /><label style={{marginLeft: "5px", color: "#888"}} htmlFor='mailingAgreement' >Я согласен получать новости на email</label></div>
                <button className={styles.button}>Отправить</button>
            </form>
        </div>
    )
}

export default MeilingForm;
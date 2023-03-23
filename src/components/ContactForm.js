import { useEffect, useRef } from 'react';
import styles from '../styles/ContactForm.module.css'

const ContactForm = ({isActive, setIsActive}) => {

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
                <h2 style={{marginBottom: "20px", color: "#303030"}}>На сайте есть неточность?</h2>
                <input className={styles.input} name='email' type="email" placeholder='email@example.com' />
                <input className={styles.input} name='name' type="text" placeholder='Имя' />
                <textarea name='problemDescription' className={styles.input} style={{resize: "none", height: "100px", paddingTop: "5px"}} placeholder='Кратко опишите проблему' />
                <button className={styles.button}>Отправить</button>
            </form>
        </div>
    )
}

export default ContactForm;
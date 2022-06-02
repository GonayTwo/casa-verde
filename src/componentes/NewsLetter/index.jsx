import React from "react";
import styles from './index.module.css' ;
import formStyles from './form.module.css';

function NewsLetter(){
    return(
        <div className={styles.NewsLetter}>
            <div className={styles.NewsLetter__container}>
                <div  className={styles.NewsLetter__container__text}>
                    <h1>
                        Sua casa com as <br />
                        <strong>
                            melhores <br />
                            plantas
                        </strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo
                        uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine  nossa
                        newsletter para saber das novidades da marca. 
                    </p>
                </div>
                
                <form className={formStyles.form} action="/">
                    <div className={formStyles.fieldGroup}>
                        <input type="email"  placeholder="Insira seu e-mail"/>
                        <button>
                            Assinar Newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default NewsLetter;
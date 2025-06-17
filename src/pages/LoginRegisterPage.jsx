import React, { useState } from 'react'
import styles from "./LoginRegisterPage.module.css"

const LoginRegisterPage = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(showLogin) {
            
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <button className={styles.toggleBtn} onClick={() => setShowLogin(!showLogin)}>
                    {
                        showLogin ?"Giriş Ekranına Git":  "Kayıt Ekranına Git" 
                    }
                </button>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    {
                        showLogin && (
                            <div className={styles.formGroup}>
                                <label>İsim:</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )
                    }
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Password: </label>
                        <input 
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className={styles.submitBtn}>
                        {showLogin ?  "Kayıt ol" : "Giriş Yap" }
                    </button>

                </form>
            </div>

        </div>
    )
}

export default LoginRegisterPage
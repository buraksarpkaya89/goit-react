import React, { useId, useState } from 'react'

const Forms = ({ handleLogin }) => {

    // const [inputValue, setInputValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");
    const [values, setValues] = useState({
        login: "",
        password: ""
    });
    const [lang, setLang] = useState("");
    const [coffeeSize, setCoffeeSize] = useState("sm");
    const [hasAccepted, setHasAccepted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { login, password } = form
        handleLogin({
            login: login.value,
            password: password.value,
        })
        form.reset();
    };
    const id = useId()
    const passwordId = useId()
    const selectId = useId();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        const name = evt.target.name
        const value = evt.target.value
        setValues({
            ...values,
            [name]: value,
        });
    };

    // const handleChange = (e) => {
    //     setInputValue(e.target.value)
    // }
    // const handleChangePassword = (e) => {
    //     setPasswordValue(e.target.value)
    // }

    const handleSizeChange = (e) => {
        setCoffeeSize(e.target.value);
    };


    const handleChangeChecked = (evt) => {
        setHasAccepted(evt.target.checked);
    };
    const test = false
    const handleSubmit1 = (e) => {
        // post işlemi yaptığımda 
        e.preventDefault()
        console.log(values);
        setValues({
            ...values,
            password:""
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit1}>
                <input type="text" name="login" id={id} value={values.login} onChange={handleChange} />
                <input type="password" name="password" id={passwordId} value={values.password} onChange={handleChange} />
                <button type="submit">Log in</button>
            </form>

            <div>
                <label htmlFor={selectId}>Choose language</label>
                <select
                    id={selectId}
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                >
                    <option value="" disabled>Seçiniz</option>
                    <option value="en">English</option>
                    <option value="uk">Ukrainian</option>
                    <option value="pl">Polish</option>
                </select>
            </div>

            <div>
                <h1>Select coffee size</h1>
                <label>
                    <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize === "sm"} onChange={handleSizeChange} />
                    Small
                </label>
                <label>
                    <input type="radio" name="coffeeSize" value="md" checked={coffeeSize === "md"} onChange={handleSizeChange} />
                    Meduim
                </label>
                <label>
                    <input type="radio" name="coffeeSize" value="lg" checked={coffeeSize === "lg"} onChange={handleSizeChange} />
                    Large
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={hasAccepted}
                        onChange={handleChangeChecked}
                    />
                    I accept terms and conditions
                </label>
                <button type="button" disabled={!hasAccepted}>Proceed</button>
            </div>
        </div>
    )
}

export default Forms
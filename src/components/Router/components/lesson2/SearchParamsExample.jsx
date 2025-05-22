import React, { useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchParamsExample = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    // console.log(searchParams);

    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );
    console.log(params);

    const { name, age,color } = params;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setSearchParams({
            name: formData.get('name'),
            age: formData.get('age'),
            color: formData.get('color')
        })
    }

    return (
        <div>
            <h3>
                URL parametreleri
            </h3>
            <p>İsim : {name}</p>
            <p>Yaş : {age}</p>
            <p>Renk : {color}</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="İsim"
                    defaultValue={name}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Yaş"
                    defaultValue={age}
                />
                <input
                    type="text"
                    name="color"
                    placeholder="Renk"
                    defaultValue={color}
                />
                <button
                    type="submit"
                >
                    Parametreleri güncelle
                </button>
            </form>
        </div>
    )
}

export default SearchParamsExample
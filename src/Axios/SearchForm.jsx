import React from 'react'

// src/components/SearchForm.jsx

export const SearchForm = ({ onSearch }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        

        // Metin alanı boşsa şu mesajı görüntüleyin 
        // ve fonksiyonu sonlandırın.
        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term!")
            return;
        }

        // Aksi takdirde, propları çağırın 
        // ve ona alanın değerini aktarın
        onSearch(topic);
        // form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="topic" placeholder="Yazınız" />
            <button>Tıkla</button>
        </form>
    );
};

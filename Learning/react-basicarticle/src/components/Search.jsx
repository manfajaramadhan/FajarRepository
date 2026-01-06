import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearchChange();
        }
    };

    return (
        <>
            <div>
                Cari Artikel : <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeyDown} value={search} />
                <button onClick={onSearchChange}>Cari</button>
            </div>

            <small>
                Ditemukan {props.totalPosts} Data Dengan Pencarian Kata {search}
            </small>
        </>
    );
}

export default Search;

import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
    return (
       <div className={style.bar}>  
       <input type="search" className={style.searchInput} />
       <button
         className={style.searchButton} 
         onClick={(id) => 
         {onSearch(id)}}
         >
            Agregar
            </button>
       </div>
    );
 };
    
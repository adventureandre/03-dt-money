import {SearchFormConteiner} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";

export function SearchForm() {
    return (
        <SearchFormConteiner>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">Buscar
                <MagnifyingGlass size={20}/>
            </button>
        </SearchFormConteiner>
    )

}
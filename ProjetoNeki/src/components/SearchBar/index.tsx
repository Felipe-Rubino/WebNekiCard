import {ChangeEvent, useState} from "react";
import { ContainerSearch, Input } from "./style";

interface SearchBarProps {
    onSearch: (text: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {

    const [searchTerm, setSearchTerm] = useState("");

     const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchTerm(text);
        onSearch(text);
    };
    
    return (
        <ContainerSearch  >
            <Input placeholder="Search"  onChange={handleSearch}  value={searchTerm}  />
        </ContainerSearch>
    )
}
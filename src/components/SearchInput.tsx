import "./SearchInput.css";

interface SearchInputProps {
    placeholder?: string;
    name?: string;
    id?: string; 
    value?: string;
    onSearch: (value: string) => void;
    type?: string;
    className?:string;
    checked?: boolean;
    
}

export const SearchInput = (props: SearchInputProps) => {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onSearch(e.target.value)}
                className={props.className}
                checked={props.checked}
                name={props.name}
                id={props.id}
            />
        </>
    );
}

import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface HeaderProps {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    handleSubmit: () => void;
}

function Header({inputValue, setInputValue, handleSubmit}: HeaderProps) {

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }
    return (
        <div className="header">
            <div className="inputBox">
                <input className={'inputAdd'} value={inputValue} onChange={handleChange} type="text"/>
                <button className={'buttonAdd'} onClick={handleSubmit} type="button">add</button>
            </div>
        </div>
    );
}

export default Header;
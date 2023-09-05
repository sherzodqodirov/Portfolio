import {useState} from 'react'
import {IData} from "./interfaces";
import {data} from "./constants";
import Header from "./components/Header.tsx";
import ListContent from "./components/ListContent.tsx";

function App() {

    const [inputValue, setInputValue] = useState<string>("")
    const [allData, setAllData] = useState<IData[]>(data)


    const handleSubmit = (): void => {
        if (inputValue.trim().length === 0) return
        const newData = {
            id: new Date().getTime(),
            title: inputValue
        }
        setAllData([...allData, newData])
        setInputValue("")
    }

    const handleDelete = (id: number): void => {
        const newData = allData.filter(data => data.id !== id)
        setAllData(newData)
    }
    return (
        <>
            <Header inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>
            <ListContent allData={allData} handleDelete={handleDelete}/>
        </>
    )
}

export default App

import {IData} from "../interfaces";

interface ListProps {
    allData: IData[];
    handleDelete: (id: number) => void;
}

function ListContent({allData, handleDelete}: ListProps) {

    return (
        <div className="listData">
            <ul>
                {allData.map(item => (
                    <li className={'liStyle'} key={item.id}><h3>{item.title}</h3>
                        <button onClick={() => handleDelete(item.id)} className={'btnDelete'}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListContent;
import { convertPrice } from "../helper/convertPrice";

const LaptopPrice=(props)=>{
    const {date}=props;
    return  <h4>{convertPrice(date)}</h4>;
}
export default LaptopPrice;
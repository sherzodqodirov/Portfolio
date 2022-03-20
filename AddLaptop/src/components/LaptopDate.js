import { convertDate } from "../helper/convertDate";

const laptopDate = (props) => {
  const { date } = props;
  return <h3>{convertDate(date)}</h3>;
};
export default laptopDate;

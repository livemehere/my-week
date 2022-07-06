import { Link } from "react-router-dom";
import { Day, Dot, Dots, WeekWrap } from "./style";

const Week = ({ data, maxRate }) => {
  return (
    <WeekWrap>
      <Day>{data.day}</Day>
      <Dots>
        {new Array(maxRate).fill(0).map((i, idx) => (
          <Dot key={idx} isActive={idx + 1 <= data.rate} />
        ))}
      </Dots>
      <Link to={`/detail/${data.day}`}>GO</Link>
    </WeekWrap>
  );
};

export default Week;

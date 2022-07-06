import { Link, useNavigate } from "react-router-dom";
import { Day, Dot, Dots, GoButton, WeekWrap } from "./style";
import { BiNavigation } from "react-icons/bi";
const Week = ({ data, maxRate }) => {
  const navigate = useNavigate();

  return (
    <WeekWrap>
      <Day>{data.day}</Day>
      <Dots>
        {new Array(maxRate).fill(0).map((i, idx) => (
          <Dot key={idx} isActive={idx + 1 <= data.rate} />
        ))}
      </Dots>
      <BiNavigation
        onClick={() => navigate(`/detail/${data.day}`)}
        fontSize={20}
        color={"#47b9d0"}
        style={{ cursor: "pointer" }}
      />
    </WeekWrap>
  );
};

export default Week;

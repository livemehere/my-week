import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dot, Dots } from "../components/Week/style";

const Detail = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <span>{id}요일 평점</span> 남기기
      </h1>
      <Dots>
        {new Array(5).fill(0).map((i, idx) => (
          <Dot
            key={idx}
            isActive={idx + 1 <= value}
            onClick={() => setValue(idx + 1)}
          />
        ))}
      </Dots>
      <button onClick={() => navigate(-1)}>평점 남기기</button>
    </div>
  );
};

export default Detail;

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Week from "../Week";
import { WeekBoxWrap, RateBoxWrap, AvgTitle } from "./style";

const calcAverage = (datas) => {
  const sum = datas.reduce((acc, cur) => acc + cur.rate, 0);
  const avg = sum / datas.length;
  return avg.toFixed(2);
};

const sortWeek = (arr) => {
  const weekData = [...arr];
  const todayIdx = new Date(Date.now()).getDay();
  while (weekData[0].id !== todayIdx) {
    const week = weekData.shift();
    weekData.push(week);
  }
  return weekData;
};

const WeekBox = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    initalWeek();
  }, []);

  const initalWeek = () => {
    let initialData = [
      { id: 1, day: "월", rate: Math.ceil(Math.random() * 5) },
      { id: 2, day: "화", rate: Math.ceil(Math.random() * 5) },
      { id: 3, day: "수", rate: Math.ceil(Math.random() * 5) },
      { id: 4, day: "목", rate: Math.ceil(Math.random() * 5) },
      { id: 5, day: "금", rate: Math.ceil(Math.random() * 5) },
      { id: 6, day: "토", rate: Math.ceil(Math.random() * 5) },
      { id: 7, day: "일", rate: Math.ceil(Math.random() * 5) },
    ];
    setDatas(sortWeek(initialData));
  };

  const resetRate = () => {
    setDatas([...datas].map((data) => ({ ...data, rate: 0 })));
  };

  const avg = useMemo(() => calcAverage(datas), [datas]);

  return (
    <WeekBoxWrap>
      <h1>나의 일주일은?</h1>
      <div>
        {datas.map((data) => (
          <Week key={data.id} data={data} maxRate={5} />
        ))}
      </div>
      <RateBoxWrap>
        <AvgTitle>{avg}</AvgTitle>
        <button onClick={() => resetRate()}>RESET</button>
      </RateBoxWrap>
    </WeekBoxWrap>
  );
};

export default WeekBox;

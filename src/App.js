import { useRef, useState } from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


// const dummyList = [
//   {
//     id: 1,
//     author:"정희창",
//     content:"하이 1",
//     emotion:5,
//     create_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author:"홍길동",
//     content:"하이 2",
//     emotion:2,
//     create_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author:"아무개",
//     content:"하이 3",
//     emotion:5,
//     create_date: new Date().getTime()
//   },

// ];

const App = () => {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  // 새로운 일기 작성하는 함수
  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList);
  };

  // 특정 일기를 수정
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=>it.id === targetId ? { ...it, content:newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;

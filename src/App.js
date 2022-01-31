import Header from "./Header/Header"
import Content from "./Content/Content"
import Gallery from "./Gallery/Gallery";
import { useEffect, useState } from "react";
var tempData = [];
function App() {

  let [memeArr, setmemeArr] = useState([]);
  let [isCreate, setIsCreate] = useState(true);

  useEffect(() => {

    (async () => {
      try {
        let response = await fetch("https://api.imgflip.com/get_memes");
        let data = await response.json();
        let temparr = data.data.memes.map((el) => {
          return {
            id: el.id,
            url: el.url
          }
        })
        setmemeArr(temparr);
      } catch (error) {
        console.log(error);
      }
    })();

  }, [])

  const handleMemeData = (val) => {
    tempData.push(val);
  }

  return (

    <div>
      <Header setIsCreate={setIsCreate} />
      {
        (isCreate) && (memeArr.length != 0)? 
        <Content memeArr={memeArr} handleMemeData={handleMemeData}/> : 
        <Gallery tempData={tempData}/>
      }
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function TabContent({tab}){
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 0);
    return () => setFade('');
  }, [tab])

  if(tab === 0){
    return <div className={'start ' + fade}>내용 0</div>
  } else if(tab === 1){
    return <div className={'start ' + fade}>내용 1</div>
  } else if(tab === 2){
    return <div className={'start ' + fade}>내용 2</div>
  }
} 

export default TabContent;
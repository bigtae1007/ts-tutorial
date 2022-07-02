import React from 'react'
import { useState } from 'react'

const Counter = () => {
  // 재너릭 형태로 사용하면 된다. 없어도 알아서 type을 유추하기때문에 꼭 필요한건 아니다.
  const [count, setCount] = useState<number>(1)

  const up = ()=>{
    setCount(count + 1)
  }
  const down = ()=>{
    setCount(count - 1)
  }
  return (
    <>
    <div>{count}
    
    </div>
    <button onClick={up}>up</button>
    <button onClick={down}>down</button>
    </>

  )
  
}

export default Counter
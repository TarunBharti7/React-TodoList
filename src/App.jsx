import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [active , setActive] = useState(" ");
  const [title , setTitle] = useState(" ");
  const [Description , setDescription] = useState(" ");
  const [listData , setListData] = useState([
  //   {
  //   title: title ,
  //   des: Description
  // }
])
  const [edits , setEdits] = useState("");
  const [editValue , setEditValue] = useState("");
  // const [editData , setEditData] = useState([]);
  const [index , setIndex] = useState();


  const addTask = () => {
    setActive("active");
  }

  function addCard() {
    setListData([...listData , title])
    // console.log(listData);
    // console.log(listData.title);
    setActive("");
    setTitle("");
    setDescription("");
  }

  function remove(i) {
    const removeData = listData.filter((elm , id)=> {
      return i != id;
    })
    setListData(removeData)
  }

  const removeAll = () => {
      setListData([]);
  }

  const edit = (i) => {
    setEdits("active");
    setIndex(i);
  }

  const change = () => {
    setEdits("");
    listData[index] = editValue;
    setListData(listData)

    setEditValue("")
  }

  useEffect(() => {
    let storeData = localStorage.getItem('myData');
    storeData = JSON.parse(storeData)
    // console.log(storeData);
    if(storeData.length >= 1){
      setListData(storeData)
    }
  }, [])

  useEffect(() => {
    
    localStorage.setItem('myData' , JSON.stringify(listData));
  }, [listData])


  return (
    <>
    {/* Navbar */}
        <Navbar/>

    {/* Add Task */}
        <div className='parent'>
            <button className='p-btn' onClick={addTask}>+ Add Task </button>
            <button className='p-btn' onClick={removeAll}>Remove All</button>
        </div>

    {/* Task Container */}
        
        {/* <div className="container" >

            {listData!=[] && listData.map((data, i)=>{
              return(
                <>
                    <div className="card" key={i}>
                      <h1 className='title'>{data}</h1>
                      <p className='des'>{data}</p>
                      <div className="card-btn">
                        <button className='c-btn' onClick={()=>edit(i)}>Edit</button>
                        <button className='c-btn' onClick={()=>remove(i)}>Remove</button>
                      </div>
                    </div>
                </>
              )
            })}
            </div>   */}

            <div className="container">
  {listData.map((data, i) => (
    <div className="card" key={i}>
      <h1 className='title'>{data}</h1>
      <p className='des'>{data}</p>
      <div className="card-btn">
        <button className='c-btn' onClick={() => edit(i)}>Edit</button>
        <button className='c-btn' onClick={() => remove(i)}>Remove</button>
      </div>
    </div>
  ))}
</div>

        
        {/* edit */}
        <div  className={`form-container ${edits}`}>
          <div className="form">
            <label htmlFor="title">Tittle</label>
            <br />
            <input className='f-input' minLength={3}  name='title' id='title' type="text" value={editValue} onChange={(e) => {setEditValue(e.target.value)}} required/>
            <br />
            <div className="submit">
              <button className="p-btn" type='submit' onClick={change}>Change</button>
            </div>
            </div>
        </div>


    {/* Taking Input className="form-container" */  }
        <div  className={`form-container ${active}`}>
          <div className="form">
            <label htmlFor="title">Tittle</label>
            <br />
            <input className='f-input' minLength={3}  name='title' id='title' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
            <br />
            <label htmlFor="des">Description</label>
            <br />
            <input className='f-input' name='des' id='des'  type="text" value={Description} onChange={(e) => {setDescription(e.target.value)}}/>
            <br />
            <div className="btn-container">
                <button className='mi-btn'>Most Important</button>
                <button className='i-btn'>Important</button>
                <button className='n-btn'>Normal</button>
            </div>
            <div className="submit">
              <button className="p-btn" type='submit' onClick={addCard}>Submit</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default App
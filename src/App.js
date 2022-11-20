import './App.css';
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Toggler from './reduxSample/toggler';
import { useSelector } from 'react-redux';

const UserContext = React.createContext()
const AdminContext = React.createContext()

function App() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const loadingPlaceholder = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }

  useEffect(()=>{
    loadingPlaceholder()
  },[])


  const ModalWithProps = withProps(Modal)

  const CompWithContext = withContext(ContextReciever, AdminContext)

  const CompWithLoader = withLoading(List)

  const isChecked = useSelector(state => state)

  return (

    <UserContext.Provider value = {"Наталья"}>
      <AdminContext.Provider value={"Надо выбрать"}>
      <div className="App">
      <UserCard/>

        <button onClick={()=>{setModal(true)}}>Открыть окно</button>

        {
          modal && <ModalWithProps data = {'Да, я задумалась'} setModal ={setModal}/>
        }

        <CompWithContext/>

        <CompWithLoader isLoading = {loading} data = {[1, 2, 3]}/>
        <Toggler/>


      </div>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

const UserCard = () =>{

  const userName = useContext(UserContext)
  const admin = useContext(AdminContext)

  return(
    <h1>Здравствуй, {userName}</h1>
  )
}


const Modal = ({data,setModal}) =>{

  return (
    <div className='modal'>
        <div>
          <h1>Ты тут?</h1>
          <p>{data}</p>
          <button onClick={()=>{setModal(false)}}>Начать загрузку</button>
        </div>
    </div>
  )
}


const withProps = (Component) =>{
    return (props) => {
      return <Component {...props} />
    }
}


const withContext = (Component, PassedContext) =>{
    return (props) => {
      const context = useContext(PassedContext)
      return <Component {...props} context = {context}/>
    }
}


const ContextReciever = ({context}) =>{
    return(
      <div>
        <h1>Список по пунктам</h1>
        <p>{context}</p>
      </div>
    )
}


const Loader = () =>{
  return(
    <div className='loader'>
       <button><h1>ОТКРЫТЬ</h1></button>
    </div>
  )
}


const withLoading = (Component) =>{
    return ({isLoading, ...props}) => {
      return isLoading ? <Loader/> : <Component {...props}/>
    }
}


const List = ({data}) =>{

  return(
    <>
      {data.map((e,i)=><p key={i}>{e}</p>)}
    </>
  )
}


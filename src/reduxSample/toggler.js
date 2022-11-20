import { useDispatch, useSelector } from "react-redux"

const Toggler = () =>{

    const isChecked = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(window.state)
    return(
        <>
            <input type='checkbox' value={isChecked} onChange = {()=>{
                dispatch({type:'SWITCH_TOGGLE',payload:['title']})
            }}/>
        </>
    )
}

export default Toggler
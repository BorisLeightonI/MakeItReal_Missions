import { useDispatch } from "react-redux";

function Button({type, children}) {
    const dispatch = useDispatch();
    return <button onClick={()=>dispatch({type})}>{children}</button>;
}

export default Button;
import { useSelector } from "react-redux";

function Count() {
    const num = useSelector(state => {
        console.log('count useSelector', state)
        return state.count
    })
    return <h2>{num}</h2>;
}

export default Count;
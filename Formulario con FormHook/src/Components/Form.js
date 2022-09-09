import {useState} from 'react';
import {axios} from 'axios';
const Form = () => {
/*     const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);
 */
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        title: '',
        description: '',
        done: false,
    })
    const {title, description, done} = data;

    const handleChange = (e) => {
        console.log(e);
        console.dir(e.target); //solo para objetos
        console.log(e.target.value);
        /* setTitle(e.target.value); */

        const {name, value, checked, type} = e.target;
        setData({ 
            ...data, 
            [name]: (type==='checkbox'? checked: value) 
        });
        // ...data copia el objeto y [name] cambia solo dos atributos
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('title:',title, 'description:',description, 'done:',done);

        axios.post('https://jsonplaceholder.typicode.com/todos/',
        /* {title, description, done} */
        data
        )
            .then((res) => {
                console.log('Datos enviados');
                console.log(res);
                setMessage('Enviado con éxito');
                setData({
                    title: '',
                    description: '',
                    done: false,
                });
/*                 setTitle('');
                setDescription('');
                setDone(false); */
            })
            .catch((err)=>{
                console.log('Ocurrió un error');
                console.log(err);
            })
        
    }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Titulo</label>
                <input id = 'title' name = 'title' type = 'text'
                    onChange={handleChange} 
                    value = {title}/>
                <label htmlFor='description'>Descripción</label>
                <input id = 'description' name = 'description' type = 'text'
                    /* onChange={(e)=>setDescription(e.target.value)}  */
                    onChange={handleChange}
                    value = {description}/>
                <label htmlFor='done'>Estás seguro?</label>
                <input id = 'done' name = 'done' type = 'checkbox'
                    /* onChange={(e)=>done?setDone(false):setDone(true)} */
                    onChange={handleChange}
                    checked = {done} 
                />
                <button type='submit'>Enviar</button>
            </form>
            {message && message};
        </>
    )
}

export default Form;
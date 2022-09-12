import { useForm } from "react-hook-form";

const FormHook = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = () => console.log(errors);
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Name</label>
        <div className={errors.firstName?'border-error':null}>
            <input {...register("firstName", { required: true, minLength:2, maxLength: 20 })}
                placeholder='First Name'  
            />
            {errors.firstName ? <span>X</span> : null}
        </div>
            <p>{errors.firstName?.type === 'required' && "First name is required"}</p>

        <label>Last Name</label>

        <div className={errors.lastName?'border-error':null}>
            <input {...register("lastName", {required:true, minLength:2, maxLength: 20 })}
                placeholder='Last Name'
            />
            {errors.lastName ? <span>X</span> : null}
        </div>
        {errors.lastName && <p>Last name is required</p>}

        <label>Age</label>
        <div className={errors.age?'border-error':null}>
            <input type="number" {...register("age", {required: true, min: 18, max: 99 })}
                placeholder='Age'
            />
            {errors.age ? <span>X</span> : null}
        </div>
        <p>{errors.age && 'age must be in range 18 to 99'}</p>

        <label>E-mail</label>
        <div className={errors.mail?'border-error':null}>
            <input {...register("mail", { required: "Email Address is required",
                    pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                })} placeholder='Email'
            />
            {errors.mail ? <span>X</span> : null}
        </div>
        <p>{errors.mail && 'Email must be valid'}</p>

        <label>Password</label>
        <div className={errors.password?'border-error':null}>
            <input type='password' {...register("password", { required: true, minLength:2, maxLength: 20 })}
                placeholder='Password'  
            />
            {errors.password ? <span>X</span> : null}
        </div>
            <p>{errors.password?.type === 'required' && "First name is required"}</p>

        <input type="submit" value='Create User'/>
        <button onClick={()=>console.log(errors)}>show error</button>
      </form>
    );
}

export default FormHook;
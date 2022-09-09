import { useForm } from "react-hook-form";

const FormHook = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <div className={errors.firstName?'border-error':null}>
            <input {...register("firstName", { required: true, maxLength: 20 })}
                placeholder='First Name'  />
            {errors.firstName ? <span>X</span> : null}
        </div>
            <p>{errors.firstName?.type === 'required' && "First name is required"}</p>

        <label>Last Name</label>
        <div className={errors.lastName?'border-error':null}>
            <input {...register("lastName", {required:true, pattern: /^[A-Za-z]+$/i })}
                placeholder='Last Name'
            />
            {errors.lastName ? <span>X</span> : null}
        </div>
        {errors.lastName && <p>Last name is required</p>}

        <label>Age</label>
        <div className={errors.number?'border-error':null}>
            <input type="number" {...register("age", { min: 18, max: 99 })}
                placeholder='Age'
            />
            {errors.number ? <span>X</span> : null}
        </div>
        <p>{errors.number && 'number must be in range 18 to 99'}</p>

        <label>E-mail</label>
        <div className={errors.mail?'border-error':null}>
            <input {...register("mail", { required: "Email Address is required",
                    pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                })} placeholder='Email'
            />
            {errors.mail ? <span>X</span> : null}
        </div>
        <p>{errors.mail && 'Email must be valid'}</p>

        <input type="submit" value='Create User'/>
      </form>
    );
}

export default FormHook;
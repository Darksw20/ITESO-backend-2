import React from 'react';
import './styles.css';

const Register = () => {
    return <div className='register'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Confirmar contraseña" />
            <button>Registrarse</button>
        </form>
    </div>

};

export default Register;
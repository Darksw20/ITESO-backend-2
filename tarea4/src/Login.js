import React from 'react';

import './styles.css';

const Login = () => {
    return <div className='login'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button>Iniciar sesión</button>
        </form>
    </div>;
};

export default Login;
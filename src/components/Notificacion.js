import React from 'react'

const Notificacion = ({ mostrarNotificacion }) => {
    return (
        <div className={`notificacion-container ${mostrarNotificacion ? 'mostrar' : ''}`}>
            <p>Ya ingresaste esta letra</p>
        </div>
    );
};

export default Notificacion;
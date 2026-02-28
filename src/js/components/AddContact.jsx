//* Importando useState  *//
import { useState } from "react";

// AddContact.jsx
export default function AddContact() {

    /* useState para guardar los datos del contacto y los inputs */
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    /* Funcion para manejar cambios en los inputs */
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
    };

    // Mandar la información del nuevo contacto a la API con una solicitud POST
    const handleSubmit = async (e) => {

        e.preventDefault(); // Evitar que el formulario se recargue

        const URL = "https://playground.4geeks.com/contact/agendas/tu_slug/contacts"; // Reemplaza "tu_slug" con el slug de mi agenda Ignacio Pinto

        const options = {
            method: "POST", // Tengo que usar POST para crear un nuevo contacto
            headers: {
                'content-type': 'applications/json' // Indicar que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(contact) // Convertir el objeto contact a una cadena JSON  
        };

        try {
            const response = await fetch(URL, options);

            if(response.ok) {
                const data = await response.json();
                console.log('Contacto agregado con exito!:', data);

                // Limpiar el formulario despues de agregar el contacto
                setContact({name: "", email: "", phone: "", address: ""});
                // Aqui debo agregar el useNavigate a Futuro para redirigir al usuario a la lista de contactos despues de agregar uno nuevo


            } else {
                console.error("Error al guardar el contacto. Codigo de estado:", response.status)
            }
        } catch (error) {
            console.error('Hubo un error en la peticion:', error);
        }
    };

return (

        
        <div className="container">
            {/* Contenedor principal del formulario */}
            <div className="row">

                <div className="col-md-8 col-lg-6 mx-auto mt-5">

                    
                    {/* Titulo del formulario*/}
                    <h1 className="text-center mb-4 mb-5">Add a new contact</h1>

                    {/* Formulario para agregar un nuevo contacto */}
                    <form onSubmit={handleSubmit} action="">
                        
                        {/* label e input para el nombre */}
                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Full Name</label>
                            <input 
                            className="form-control" 
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={handleChange} 
                            placeholder="Full Name" />
                        </div>

                        {/* label e input para el Email */}
                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Email</label>
                            <input 
                            className="form-control" 
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange} 
                            placeholder="Enter Email" />
                        </div>

                        {/* label e input para el phone */}
                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Phone</label>
                            <input 
                            className="form-control" 
                            type="tel"
                            name="phone"
                            value={contact.phone}
                            onChange={handleChange} 
                            placeholder="Enter Phone" />
                        </div>


                        {/* label e input para el Address */}
                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Address</label>
                            <input 
                            className="form-control" 
                            type="text"
                            name="address"
                            value={contact.address}
                            onChange={handleChange} 
                            placeholder="Enter Address" />
                        </div>
                        
                        {/* Botón para guardar el nuevo contacto */}
                        <button className="btn btn-primary w-100" type="submit">save</button>
                        
                        {/* Link para devolverse ESTE ELEMENTO DEBO CAMBIARLO despues a React Router */}
                        <a className="mt-3 d-inline-block" href="">or get back to contacts</a>
                        
                    </form>

                </div>
            </div>
        </div>
    )
};
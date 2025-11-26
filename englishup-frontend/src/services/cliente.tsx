export async function registrarse(formData: {nombre: string, correo: string, contrasena: string, repetircontra?: string, fecha_creacion: string}) {   
    const { nombre, correo, contrasena, fecha_creacion } = formData;
    const body = JSON.stringify({ nombre, correo, contrasena, fecha_creacion });
    const response = await fetch(`http://localhost:3001/registro/crear`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    const data = await response.json();
    if (!response.ok) {
        return { ok: false, message: data.message || 'Error en el registro' };
    }
    return data;
}
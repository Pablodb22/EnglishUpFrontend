export async function registrarse(formData: {nombre: string, correo: string, contrasena: string, repetircontra?: string, fecha_creacion: string,nivel:string}) {   
    const { nombre, correo, contrasena, fecha_creacion } = formData;
    const body = JSON.stringify({ nombre, correo, contrasena, fecha_creacion });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registro/crear`, {
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

export async function iniciarSesion(formData: {correo: string, contrasena: string}) {
    const { correo, contrasena } = formData;
    const body = JSON.stringify({ correo, contrasena });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/buscar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    const data = await response.json();
    if (!response.ok) {
        return { ok: false, message: data.message || 'Error al iniciar sesión' };
    }
    return data;
}

export async function modificarperfil(formData: {nombre: string, correo: string, correoOriginal: string}) {   
    const { nombre, correo, correoOriginal } = formData;
    const body = JSON.stringify({ nombre, correo, correoOriginal });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/modificar/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    const data = await response.json();
    if (!response.ok) {
        return { ok: false, message: data.message || 'Error al modificar el perfil' };
    }
    return data;
}
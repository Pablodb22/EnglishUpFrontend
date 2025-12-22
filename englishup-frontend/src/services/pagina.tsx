export async function getQuestions(nivel: string) {   
    // Decodificar el parámetro si viene con encoding de URL
    const nivelDecoded = decodeURIComponent(nivel);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/questions?nivel=${encodeURIComponent(nivelDecoded)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error fetching questions');
    }
    const data = await response.json();
    console.log(data)
    return data;
}

export async function getWords(tema: string) {   
    // Decodificar el parámetro si viene con encoding de URL
    const temaDecoded = decodeURIComponent(tema);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/words?tipo=${encodeURIComponent(temaDecoded)}`, {
        method: 'GET',
        headers: {  
            'Content-Type': 'application/json',
        },
    }); 
    if (!response.ok) {
        throw new Error('Error fetching words');
    }
    const data = await response.json();
    console.log(data)
    return data;
}

export async function postNivel(formData: {nivel: string,correo:string}) {
    const response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/modificar/nivel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
        return { ok: false, message: data.message || 'Error al actualizar el nivel' };
    }
    return data;

}
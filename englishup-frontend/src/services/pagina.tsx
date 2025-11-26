export async function getQuestions(nivel: string) {   
    // Decodificar el parámetro si viene con encoding de URL
    const nivelDecoded = decodeURIComponent(nivel);
    
    const response = await fetch(`http://localhost:3001/ai/questions?nivel=${encodeURIComponent(nivelDecoded)}`, {
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

    const response = await fetch(`http://localhost:3001/ai/words?tipo=${encodeURIComponent(temaDecoded)}`, {
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
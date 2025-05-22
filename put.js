document.addEventListener('DOMContentLoaded',()=>{
    const putDataButton = document.getElementById('putdata');
    const putResult = document.getElementById('putResult');

    putDataButton.addEventListener('click',()=>{
        fetch('https://jsonplaceholder.typicode.com/post/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:1,
                title: 'fooUpdated',
                body: 'barUpdated',
                userId:1,
            })
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('HTTP error: status: ${response.status}');
            }
            return response.json();
        })
        .then(data =>{
            putResult.textContent=JSON.stringify(data, null, 2);
        })
        .catch(error=>{
            putResult.textContent= 'Error: ${error.message}';
        })
    })
})
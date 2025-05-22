document.getElementById('DOMContentLoaded' ,()=>{
    const postDataButton = document.getElementById('getdata');
    const postResult=document.getElementById('postresult');

    postDataButton.addEventListener('click', ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'   
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
        })
            .then(response =>{
                if(!response.ok){
                    throw new Error('HTTP error! status: ${response.status}');
                }
                return response.json();
            })
            .then(data =>{
                postResult.textContent = JSON.stringify(data, null, 2)
            })
            .catch(error=>{
                postResult.textContent='Error: ${error.message}';
            });
    });
});
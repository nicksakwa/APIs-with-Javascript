document.addEventListener('DOMContentLoaded',()=>{
    const deleteDataButton= document.getElementById('deleteData');
    const deleteResult=document.getElementById('deleteResult');

    deleteDataButton.addEventListener('click', ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
            .then(response=>{
                if(!response.ok){
                    throw new Error('HTTP error! status: ${response.status}');
                }
                return response.json();
            })
            .then(data=>{
                deleteResult.textContent ='Deleted Successfully!';
            })
            .catch(error=>{
                deleteResult.textContent='Error:${error.message}';
            });
    });
});
document.addEventListener('DOMContentLoaded' ,()=>{
    const getDataButton = document.getByElementById('getData');
    const dataDisplay = document.getElementById('dataDisplay');

    getDataButton.addEventListener('click', ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(response=>{
            if(!response.ok){
                throw new Error('HTTP error! status:${response.status}');
            }
            return response.json();
         })
         .then(data=> {
            dataDisplay.textContent = JSON.stringify(data,null , 2);
         })
         .catch(error=>{
            dataDisplay.textContent = 'Error: ${error.message}';
         });
    });
});
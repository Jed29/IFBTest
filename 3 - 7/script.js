const show = document.getElementById("showMe")

show.addEventListener('click',function(){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        for(let i = 0 ; i < data.length; i++){
            const value = document.querySelector("tbody")
            if( i < 10){
                value.innerHTML +=
                `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].body}</td>
                    <td>
                        <button onclick="deleteData(${data[i].id})" >delete</button>
                    </td>
                </tr>`
            }
        }
    })
    .catch(err=>{
        console.log(err)
    })

function deleteData(id){
    axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
const postTitle = document.querySelector(".post-title");

fetch("https://dummyapi.io/data/v1/tag/water/post?limit=10", {
    method: 'GET',
    headers: {
      'app-id': '636e37d60e8277a6b9f87099'
    }
})
.then(res=>res.json())
.then(data=>{

})


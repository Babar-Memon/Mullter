$.get('/profile',(response) => {
    document.getElementById('container').innerHTML = 
    "<img src=" + response[0].path + "/>";
})
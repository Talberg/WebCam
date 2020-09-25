const video = document.getElementById('video')
function startVideo (){
    navigator.getUserMedia(
        {video:{facingMode:'user'}},
        stream=>video.srcObject =stream,
        err=>console.error(err)
    
    )

}

startVideo()
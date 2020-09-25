const video = document.getElementById('video')
function startVideo (){
    navigator.getUserMedia(
        {video:{
            facingMode:'environment'
        }},
        stream=>video.srcObject =stream,
        err=>console.error(err)
    
    )

}

startVideo()
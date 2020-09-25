const video = document.getElementById('video')
function startVideo (){
    navigator.getUserMedia(
        {video:{
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
              },
              height: {
                min: 720,
                ideal: 1080,
                max: 1440
              },
              facingMode: 'environment'
        }},
        stream=>video.srcObject =stream,
        err=>console.error(err)
    
    )

}

startVideo()
nosex=0;
nosey=0;
function setup(){

    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes);
}

function gotposes(result){
    if(result.length>0){
        console.log(result)
        nosex=result[0].pose.nose.x-180
        nosey=result[0].pose.nose.y-170
    }
}

function draw(){

    image(video,0,0,400,300)
    image(tiara,nosex,nosey,130,80)
}


  function preload (){

tiara=loadImage("tiara.png");

 }
 
 function modelloaded(){

    console.log("modelloaded succsessfully");
 }

 function saveimage(){

 save("queen.jpg")  ; 
 }
 
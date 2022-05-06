noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
diffrence=0;

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() 
{
console.log("model Loaded");    
}

function gotPoses(results)
{
   if (results.length > 0 ) 
    {
    console.log(results); 
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    leftwristX  = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    
    diffrence = floor(leftwristX-rightwristX);
    console.log("nose x = "+noseX+"nose y = "+noseY);
    console.log("left wrist X = "+leftwristX+"right wrist X = "+rightwristX+"diffrence = "+diffrence);
    }
}
function draw() 
{
  background("#F4E04D");

  document.getElementById('square_side').innerHTML="Width and Height of square will be"+diffrence+"px";
  fill("#FCFCFC");
  stroke("#54F2F2");
  square(noseX,noseY,diffrence);
}

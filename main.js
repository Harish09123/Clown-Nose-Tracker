noseX=0;
noseY=0;

function preload() 
{
}

    function setup() {
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCanvas(300,300);
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide();

        poseNet = ml5.poseNet(video, modelloaded);
        poseNet.on('pose', gotPoses);
    }

    function modelloaded() {
        console.log('PoseNet is Initialized');
    }

    function gotPoses(results)
    {
        if(results.length > 0)
        {
            noseX = results[0].pose.nose.x - 15;
            noseY = results[0].pose.nose.y - 7;
            console.log(results);
            console.log("nose x = " + noseX);
            console.log("nose y = " + noseY);
        }
    }

    function draw() {
        image(video, 0, 0, 300, 300);
        image(clown_nose, noseX, noseY, 30, 30);
    }

    function take_snapshot(){
        save("myFilterImage.png")
    }

    function preload(){
      clown_nose = loadImage('https://i.postimg.cc/Mpq4p4yG/e5cdf354fc1fa8e51163f45dbc17d0e4-removebg-preview.png');
    }


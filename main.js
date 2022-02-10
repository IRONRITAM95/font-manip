left_wrist_x = 0 ;
right_wrist_x = 0 ;
difference = 0 ;

function setup(){
    canvas = createCanvas(900,700);
    canvas.center() ;
    video = createCapture(VIDEO);
    video.position(10, 200) ;
    video.size(400,400);
}
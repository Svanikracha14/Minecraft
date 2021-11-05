var canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;
blockimg_width=30;
blockimg_height=30;
var player_object="";
var blockimg_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimg_object=Img;
        blockimg_object.scaleToWidth(blockimg_width);
        blockimg_object.scaleToHeight(blockimg_height);
        blockimg_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockimg_object);
    });
} 
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(e.shiftKey==true&&keyPressed=="80"){
    console.log("p and shift key pressed together");
    blockimg_width=blockimg_width+10;
    blockimg_height=blockimg_height+10;
    document.getElementById("current_width").innerHTML=blockimg_width;
    document.getElementById("current_height").innerHTML=blockimg_height
}
if(e.shiftKey==true&&keyPressed=="77"){
    console.log("m and shift key pressed together");
    blockimg_width=blockimg_width-10;
    blockimg_height=blockimg_height-10;
    document.getElementById("current_width").innerHTML=blockimg_width;
    document.getElementById("current_height").innerHTML=blockimg_height
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
if(keyPressed=="38"){
    up();
    console.log("up");
}
if(keyPressed=="39"){
    right();
    console.log("right");
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="87"){
    new_image("wall.jpg");
    console.log("w");
}
if(keyPressed=="71"){
    new_image("ground.png");
    console.log("g");
}
if(keyPressed=="76"){
    new_image("light_green.png");
    console.log("l");
}
if(keyPressed=="68"){
    new_image("dark_green.png");
    console.log("d");
}
if(keyPressed=="82"){
    new_image("roof.jpg");
    console.log("r");
}
if(keyPressed=="84"){
    new_image("trunk.jpg");
    console.log("t");
}
if(keyPressed=="89"){
    new_image("yellow_wall.png");
    console.log("y");
}
if(keyPressed=="85"){
    new_image("unique.png");
    console.log("u");
}
if(keyPressed=="67"){
    new_image("cloud.jpg");
    console.log("c");
}
}
function up(){
if(player_y>=0){
    player_y=player_y-blockimg_height;
    console.log("block image height="+blockimg_height);
    console.log("when up arrow is pressed,x="+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
    
}
}
function down(){
    if(player_y<=500){
        player_y=player_y+blockimg_height;
        console.log("block image height="+blockimg_height);
        console.log("when up arrow is pressed,x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        
    }
    }
    function left(){
        if(player_x>=0){
            player_x=player_x-blockimg_width;
            console.log("block image width="+blockimg_width);
            console.log("when up arrow is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
            
        }
        }
        function right(){
            if(player_y<=850){
                player_x=player_x+blockimg_width;
                console.log("block image width="+blockimg_width);
                console.log("when up arrow is pressed,x="+player_x+"y="+player_y);
                canvas.remove(player_object);
                player_update();
                
            }
            }
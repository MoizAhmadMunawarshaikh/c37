class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enteryourName")
    this.playButton=createbutton(play)
    this.titleImg=createImg("assets/title.png","gametitle")
    this.greeting=createElement("h2")
    
  }
setElementPosition(){
  this.titleImg.position(120,100)
this.input.position(width/2-110,height/2-80)
this.playButton.position(width/2-90,height/2-20)
this.greeting.position(width/2-300,height/2-100)

}
display(){
this.setElementPosition()
this.handleMousedPressed()

}
hide(){
this.greeting.hide()
this.playButton.hide()
this.input.hide()
}
handleMousedPressed(){
this.playButton.mousePressed(()=>{
  this.input.hide();
  this.playButton.hide();
var message=`

Hello ${this.input.value()}
</br>wait For AnotherPlayer tojoin`;
this.greeting.html(message);
});

}

  


}


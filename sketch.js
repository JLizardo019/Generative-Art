let cnv;
let xoff = 0;
let yoff = 0;
let line_color = [0,0,0];
let bg = [0,100,0];

let bg_picker = document.getElementById("picker2");
bg_picker.addEventListener("input", bgChange);

let picker = document.getElementById("picker");
picker.addEventListener("input", colorChange);

let letter =  document.getElementById("letter");
letter.addEventListener("input", myInputEvent);

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("canvas");
  background(0);

  strokeWeight(4);
  noFill();
  colorMode(HSB, 360,100,100,1);
}

function draw() {
}

function pattern1() { // a -> triangle
  const x = random(0, width);
  const y = random(0, height);
  const size = random(10, 50);
  
  beginShape();
  vertex(x,y);
  vertex(x-(size/2),y+size);
  vertex(x+(size/2),y+size);
  endShape(CLOSE);


}

function pattern2(len) { // b -> curved squares
  if (len>2){
    
    
    // angleMode(DEGREES);
    // rotate(90);
    
    translate(20,20);
    rect(-width/4.25+len,height/1.8-len, len);
    
    pattern2(len/1.5);
  }

}

function pattern3() { // c -> diamond
  const x = random(0, width);
  const size = random(10, 50);
  const y = random(0, height-(size*2));
  
  beginShape();
  vertex(x,y);
  vertex(x-(size/2),y+size);
  vertex(x,y+(size*2));
  vertex(x+(size/2),y+size);
  endShape(CLOSE);

}

function pattern4() { // d -> overlapping squares horizontally
  const x = random(0, 500);
  const y = random(0, 500);
  const size = random(10, 50);
  rect(x, y, size);

  for (let i = 0; i < 5; i++) {
    rect(x + (i * 5), y, size);
  }
}

function pattern5() { // e -> overlapping squares diagonally
  const x = random(0, 500);
  const y = random(0, 500);
  const size = random(10, 50);
  rect(x, y, size);

  for (let i = 0; i < 5; i++) {
    rect(x + (i * 7), y + (i * 7), size);
  }
}

function pattern6() { // f -> overlapping triangles diagonally
  const x = random(0, 500);
  const y = random(0, 500);
  const size = random(10, 50);

  
  for (let i = 0; i < 5; i++) {
    beginShape();
    vertex(x + (i * 5), y + (i * 9));
    vertex(x + (i * 5)-(size/2), y + (i * 9) + size);
    vertex(x + (i * 5)+(size/2), y + (i * 9)  + size);
    vertex(x + (i * 5), y + (i * 9));
    endShape();
  }
}

function pattern7(len) { // g -> large zig zags
  let x = random(10, 500);
  let y = random(10, 500);
  let size= random(10, 50);
  
  for (let i =0; i<len;i++){
    let newX = random(0,width);
    let newY = random(0,height);
    line(x, y, newX, newY);
    x = newX;
    y = newY;
  }
}

function pattern8() { // h -> x
  const x = random(0, width);
  const size = random(10, 50);
  const y = random(0, height-(size*2));

  line(x,y, x+size, y+size);
  line(x,y+size, x+size, y-size);
}

function pattern9() { // i -> line mosaic 
  let x = random(10, 500);
  let y = random(10, 500);
  let size= 50;
  
  for (let i =0; i<100;i++){
    let direction = int(random(1, 5));
    
    let mult = random();

    if (mult >0.5){
      mult =1;
    }
    else{
      mult =-1;
    }
    size = size*mult;
    // let direction = 4;
    if (direction === 1 && (y+size< height&& y+size>0)) { // vertical
      
      line(x, y, x, y+size);
      y+=size;
    } else if (direction === 2 && (y+size< height&& y+size>0) && (x+size< width&& x+size>0)) { // left diagonal
      line(x, y, x + size, y + size);
      y+=size;
      x+=size;
    } else if (direction === 3 && (x+size< width&& x+size>0)) { // horizontal
      line(x, y, x + size, y);
      x+=size;
      
    } else if (direction ===4 && (y+size< height&& y+size>0)&& (x+size< width&& x+size>0)){ // right diagonal
      line(x + size, y, x, y + size);
      y+=size;
      x-=size;
    }
    else {
      size*=mult;
    }
  }
  
}

function pattern10() { // j -> vertical dashes
  for (let r = 0; r < height; r += 10) {
    for (let c = 1; c < width; c += 10) {
      let direction = int(random(1, 5));
      if (direction === 1){
        line(r, c, r, c+10);
      }
    }
  }
}

function pattern11() { // k -> horizontal dashes
  for (let r = 0; r < height; r += 10) {
    for (let c = 0; c < width; c += 10) {
      let direction = int(random(1, 5));
      if (direction === 1){
        line(r+10, c+10, r, c+10);
      }
    }
  }

}

function pattern12(){ // l  -> perlin noise lines
  push();
  // stroke(255,255,255);
  stroke(int(line_color[0]),int(line_color[1]),int(random(40,70)));
  // let xoff=0;
  beginShape();
  for (let i =0; i<30; i++ ){
    xoff = xoff + 0.01;
    let n = noise(xoff) * width + random(-width/2, width/2);
    vertex(n,random(0,height));
    vertex(n,random(0,height));
    vertex(n,random(0,height));
  }
  endShape();
  pop();
}

function pattern13(len, x,y){ // m -> smaller triangles in a row
  if (len>2){
    const size = len;

    beginShape();
    vertex(x,y);
    vertex(x-(size/2),y+size);
    vertex(x+(size/2),y+size);
    vertex(x,y);
    endShape(CLOSE);
    

    pattern13(size/2,x,y+size);
  }
}

function pattern14(color){ // n -> filled in triangle
  push();
  const x = random(0, width);
  const y = random(0, height);
  const size = random(10, 100);

  fill(color);
  beginShape();
  vertex(x,y);
  vertex(x-(size/2),y+size);
  vertex(x+(size/2),y+size);
  vertex(x,y);
  endShape(CLOSE);
  pop();

}

function pattern15(color){ // o -> filled in square
  push();
  const x = random(0, width);
  const y = random(0, height);
  const size = random(10, 100);

  fill(color);
  rect(x, y, size);
  pop();
}

function pattern16(len){ // p -> left corner diagnonal of squares
  if (len>2){

    rect(0+len,0+len, len);

    pattern16(len/1.5);
  }
}

function pattern17(){  // q -> brick pattern
  let len =  int(random(10,50));

  for (let i = -50; i<width; i+=len){
    pattern19(len, i, 0);
  }
}

function pattern18(len,x,y){ // r -> diagonal overlapping squares row
  
  if (x<width){
    
    
    // angleMode(DEGREES);
    // rotate(90);
    
    // translate(20,20);
    rect(x,y, len);
    
    pattern18(len, x+len-(len/2.5),y+len-(len/2.5));
  }
}

function pattern19(len,x,y){ // s -> shifted square rows
  
  if (x<width && x>0 && y<height){
    rect(x,y, len);
    
    pattern19(len, x+len-20,y+len);
  }
}

function pattern20(){ // t -> square
  
  const x = random(0, width);
  const y = random(0, height);
  const size = random(10, 50);

  rect(x, y, size);
}

function pattern21(color){ // u -> filled diamond
  push()
  fill(color);
  const x = random(0, width);
  const size = random(10, 50);
  const y = random(0, height-(size*2));
  
  beginShape();
  vertex(x,y);
  vertex(x-(size/2),y+size);
  vertex(x,y+(size*2));
  vertex(x+(size/2),y+size);
  endShape(CLOSE);
  pop();
}
function pattern22(len,x,y){ // v -> squares within squares
  if (len>2){
    
    rect(x,y, len);

    pattern22(len/1.5,x,y);
  }
}

function pattern23(len,x,y){ // w -> box within box pattern
  if (len>2){

    line(x,y, x+len,y);
    line(x+len,y, x+len, y+len);
    line(x+len,y+len, x,y+len);
    line(x,y+len, x,y+len/2);

    pattern23(len/2,x,y+len/4);
  }
  
}

function pattern24(){ // x -> dots
  for (let r = 10; r < height; r += 10) {
    for (let c = 10; c < width; c += 10) {
        line(c, r, c, r);
    }
  }
}

function pattern25(len,x,y){ // y -> // triangles within triangles
  if (len>2){
    const size = len;

    beginShape();
    vertex(x,y);
    vertex(x-(size/2),y+size);
    vertex(x+(size/2),y+size);
    vertex(x,y);
    endShape(CLOSE);
    

    pattern25(size/2,x,y);
  }
  
  
}

function pattern26(){ // z -> // zig-zags
  for (let r = 0; r < height; r += 10) {
    for (let c = 0; c < width; c += 10) {
      let direction = int(random(1, 5));
      if (direction === 1) { // vertical
        line(c, r, c, r + 10);
      } else if (direction === 2) { // left diagonal
        line(c, r, c + 10, r + 10);
      } else if (direction === 3) { // horizontal
        line(c, r, c + 10, r);
      } else { // right diagonal
        line(c + 10, r, c, r + 10);
      }
    }
  }

}

function myInputEvent(){

  let colors = color(int(line_color[0]),int(line_color[1]), int(random(50,90)));
  stroke(colors);

  // make sure it is lowercase
  let val = letter.value;
  val = val.toLowerCase();
  letter.value = val;
  let i  = val[val.length-1];
  
  if (i === "a"){
    pattern1();
  }
  else if (i === "b"){
    pattern2(int(random(30,360)));
  }
  else if (i === "c"){
    pattern3();
  }
  else if (i === "d"){
    pattern4();
  }
  else if (i === "e"){
    pattern5();
  }
  else if (i === "f"){
    pattern6();
  }
  else if (i === "g"){
    pattern7(int(random(20,50)));
  }
  else if (i === "h"){
    pattern8();
  }
  else if (i === "i"){
    pattern9();
  }
  else if (i === "j"){
    pattern10();
  }
  else if (i === "k"){
    pattern11();
  }
  else if (i === "l"){
    pattern12();
  }
  else if (i === "m"){
    let size = int(random(30,360));
    pattern13(size, int(random(size/2,width-size/2)),int(random(0,height-size*2)));
  }
  else if (i === "n"){
    pattern14(colors);
  }
  else if (i === "o"){
    pattern15(colors);
  }
  else if (i === "p"){
    pattern16(int(random(30,360)));
  }
  else if (i === "q"){
    pattern17();
  }
  else if (i === "r"){
    pattern18(int(random(10,50)), int(random(10,width/2)),0);
  }
  else if (i === "s"){
    pattern19(int(random(10,50)), int(random(10,width/2)),0);
  }
  else if (i === "t"){
    pattern20();
  }
  else if (i === "u"){
    pattern21(colors);
  }
  else if (i === "v"){
    pattern22(int(random(30,360)), int(random(0,width/2)),int(random(0,height/2)));//
  }
  else if (i === "w"){
    let size = int(random(30,360));
    pattern23(size, int(random(size/2,width-size/2)),int(random(0,height-size*2)));
  }
  else if (i === "x"){
    pattern24();
  }
  else if (i === "y"){
    let size = int(random(30,360));
    pattern25(size, int(random(size/2,width-size/2)),int(random(0,height-size/2)));
  }
  else if (i === "z"){
    pattern26();
  }
}

function clearCanvas(){
  background(color(int(bg[0]),int(bg[1]),int(bg[2])));
  letter.value ="";
}

function saveImage(){
  console.log(letter.value);
  saveCanvas(cnv, letter.value, 'png');
}

function colorChange(){
  line_color = hexToHSL(picker.value);
}

function bgChange(){
  bg = hexToHSL(bg_picker.value);
  background(color(int(bg[0]),int(bg[1]),int(bg[2])));

}

// from https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-hsl
function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s , l ];
}


  




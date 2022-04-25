let cnv;
let xoff = 0;
let yoff = 0;
let line_color = [0,0,0];
let bg = [0,100,0];
let patterns = [];
let justErased = false;
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

function keyPressed(){
  if (keyCode === 8) {
    patterns.pop();
    justErased = true;
    background(bg[0],bg[1], bg[2]);

    for (let p of patterns){
      // if (p.style == 3){
      //   p.size = p.tempSize;
      // }
      p.show();
    }

    console.log(patterns);
  }
  else{
    justErased = false;
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

  // if we haven't just erased
  if (justErased == false){
    if (i === "a"){ // a -> triangle
      const x = random(0, width);
      const y = random(0, height);
      const size = random(10, 50);
      
      let p = new Pattern(x,y,size, 1);
      patterns.push(p);
      p.show();
    }
    else if (i === "b"){ // b -> curved squares 
      let p = new Pattern(0,0,int(random(30,360)), 2);
      patterns.push(p);
      p.show();
    }
    else if (i === "c"){ // c -> diamonds
      const x = random(0, width);
      const size = random(10, 50);
      const y = random(0, height-(size*2));
      let p = new Pattern(x,y,size, 3);
      patterns.push(p);
      p.show();
    }
    else if (i === "d"){ // d -> overlapping squares horizontally
      const x = random(0, 500);
      const y = random(0, 500);
      const size = random(10, 50);
      
      let p = new Pattern(x,y,size, 4);
      patterns.push(p);
      p.show();
    }
    else if (i === "e"){ // e -> overlapping squares diagonally
      const x = random(0, 500);
      const y = random(0, 500);
      const size = random(10, 50);
      
      let p = new Pattern(x,y,size, 5);
      patterns.push(p);
      p.show();
    }
    else if (i === "f"){ // f -> overlapping triangles diagonally
      const x = random(0, 500);
      const y = random(0, 500);
      const size = random(10, 50);
      
      let p = new Pattern(x,y,size, 6);
      patterns.push(p);
      p.show();
    }
    else if (i === "g"){ // g -> large zig zags

      let x = random(10, 500);
      let y = random(10, 500);
      
      let p = new Pattern(x,y,int(random(20,50)), 7);
      patterns.push(p);
      p.show();
    }
    else if (i === "h"){ // h -> x
      const x = random(0, width);
      const size = random(10, 50);
      const y = random(0, height-(size*2));

      let p = new Pattern(x,y,size, 8);
      patterns.push(p);
      p.show();
    }
    else if (i === "i"){ // i -> line mosaic 
      let x = random(10, 500);
      let y = random(10, 500);
      let size= 50;
  
      let p = new Pattern(x,y,size, 9);
      patterns.push(p);
      p.show();
    }
    else if (i === "j"){ // j -> vertical dashes

      let p = new Pattern(0,0,int(random(1,5)), 10);
      patterns.push(p);
      p.show();
    }
    else if (i === "k"){ // k -> horizontal dashes
      let p = new Pattern(0,0,0, 11);
      patterns.push(p);
      p.show();
    }
    else if (i === "l"){ // l  -> perlin noise lines
      let p = new Pattern(0,0,0, 12);
      patterns.push(p);
      p.show();
    }
    else if (i === "m"){ // m -> smaller triangles in a row
      let size = int(random(30,360));
      let x = int(random(size/2,width-size/2));
      let y = int(random(0,height-size*2));
    
      let p = new Pattern(x,y,size, 13);
      patterns.push(p);
      p.show();
    }
    else if (i === "n"){ // n -> filled in triangle
      const x = random(0, width);
      const y = random(0, height);
      const size = random(10, 100);
    
      let p = new Pattern(x,y,size, 14);
      patterns.push(p);
      p.show();
    }
    else if (i === "o"){// o -> filled in square
      const x = random(0, width);
      const y = random(0, height);
      const size = random(10, 100);

      let p = new Pattern(x,y,size, 15);
      patterns.push(p);
      p.show();
    }
    else if (i === "p"){ // p -> left corner diagnonal of squares
      let size = int(random(30,360));

      let p = new Pattern(0,0,size, 16);
      patterns.push(p);
      p.show();
    }
    else if (i === "q"){ // q -> brick
      let p = new Pattern(0,0,int(random(10,50)), 17);
      patterns.push(p);
      p.show();
    }
    else if (i === "r"){ // r -> diagonal overlapping squares row 
      let size = int(random(10,50));
      let x = int(random(10,width/2))
      let y = 0;

      let p = new Pattern(x,y,size, 18);
      patterns.push(p);
      p.show();
    }
    else if (i === "s"){ // s -> shifted square rows
      let size = int(random(10,50));
      let x = int(random(10,width/2));
      let y = 0;

      let p = new Pattern(x,y,size, 19);
      patterns.push(p);
      p.show();
    }
    else if (i === "t"){ // t -> square
      const x = random(0, width);
      const y = random(0, height);
      const size = random(10, 50);

      let p = new Pattern(x,y,size, 20);
      patterns.push(p);
      p.show();
    }
    else if (i === "u"){ // u -> filled diamond*
      const x = random(0, width);
      const size = random(10, 50);
      const y = random(0, height-(size*2));

      let p = new Pattern(x,y,size, 21);
      patterns.push(p);
      p.show();
    }
    else if (i === "v"){ // v -> squares within squares
      let size = int(random(30,360));
      let x = int(random(0,width/2));
      let y = int(random(0,height/2));
      
      let p = new Pattern(x,y,size, 22);
      patterns.push(p);
      p.show();
    }
    else if (i === "w"){  // w -> box within box pattern
      let size = int(random(30,360));
      let x = int(random(size/2,width-size/2));
      let y = int(random(0,height-size*2));

      let p = new Pattern(x,y,size, 23);
      patterns.push(p);
      p.show();
    }
    else if (i === "x"){ // x -> dots
      let p = new Pattern(0,0,0, 24);
      patterns.push(p);
      p.show();
    }
    else if (i === "y"){ // y -> triangles within triangles
      let size = int(random(30,360));
      let x = int(random(size/2,width-size/2));
      let y = int(random(0,height-size/2));

      let p = new Pattern(x,y,size, 25);
      patterns.push(p);
      p.show();
    }
    else if (i === "z"){ // z -> zig-zags

      let p = new Pattern(0, 0, 0, 26);
      patterns.push(p);
      p.show();
    }

  }
  
}

function clearCanvas(){
  background(color(int(bg[0]),int(bg[1]),int(bg[2])));
  letter.value ="";
  patterns = [];
}

function saveImage(){
  console.log(letter.value);
  saveCanvas(cnv, letter.value, 'png');
}

function colorChange(){
  line_color = hexToHSL(picker.value);

  background(bg[0],bg[1], bg[2]);

    for (let p of patterns){
      p.changeColor();
      p.show();
    }
}

function bgChange(){
  bg = hexToHSL(bg_picker.value);
  background(color(int(bg[0]),int(bg[1]),int(bg[2])));


  for (let p of patterns){
    p.show();
  }

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


  




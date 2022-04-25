class Pattern{
    constructor(x,y,s, num){
        this.x = x;
        this.y = y;
        this.size = s;
        this.style = num;
        this.tempSize = s;
        this.opacity = int(random(50,90));
        this.colors = color(int(line_color[0]),int(line_color[1]), this.opacity);
        this.tempPos = [x,y];

        // points
        this.points = [];

        if (this.style == 7){
            this.points.push([this.x, this.y]);
            for (let i =0; i<this.size;i++){
                let newX = random(0,width);
                let newY = random(0,height);
                this.points.push([newX, newY]);
            }
        }
        
        else if (this.style == 9){
            for (let i =0; i<100;i++){
                let direction = int(random(1, 5));
                let mult = random();
                this.points.push([direction, mult]);
            }
        }
        else if (this.style == 10){
            for (let r = 0; r < height; r += 10) {
                for (let c = 1; c < width; c += 10) {
                  let direction = int(random(1, 5));
                  this.points.push(direction);
                }
            }
        }
        else if (this.style == 11){
            for (let r = 0; r < height; r += 10) {
                for (let c = 0; c < width; c += 10) {
                  let direction = int(random(1, 5));
                  this.points.push(direction);
                }
            }
        }

        else if (this.style == 12){
            for (let i =0; i<30; i++ ){
                xoff = xoff + 0.01;
                let n = noise(xoff) * width + random(-width/2, width/2);
                this.points.push([n,random(0,height)]);
                this.points.push([n,random(0,height)]);
                this.points.push([n,random(0,height)]);
            }
        }
        else if (this.style == 26){
            for (let r = 0; r < height; r += 10) {
                for (let c = 0; c < width; c += 10) {
                  let direction = int(random(1, 5));
                  this.points.push(direction);
                }
            }
        }

    }

    changeColor(){
        this.colors = color(int(line_color[0]),int(line_color[1]), this.opacity);
    }
    show(){
        stroke(this.colors);
        if (this.style == 1){
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x-(this.size/2),this.y+this.size);
            vertex(this.x+(this.size/2),this.y+this.size);
            endShape(CLOSE);
        }
        else if(this.style == 2){
            this.size = this.tempSize;
            push();
            while (this.size>2){
                
                translate(20,20);
                rect(-width/4.25+this.size,height/1.8-this.size, this.size);
                
                this.size = this.size/1.5;
              }
            pop();
        }
        else if (this.style == 3){
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x-(this.size/2),this.y+this.size);
            vertex(this.x,this.y+(this.size*2));
            vertex(this.x+(this.size/2),this.y+this.size);
            endShape(CLOSE);
        }
        else if(this.style == 4){
            rect(this.x, this.y, this.size);

            for (let i = 0; i < 5; i++) {
                rect(this.x + (i * 5), this.y, this.size);
            }
        }
        else if(this.style == 5){
            rect(this.x, this.y, this.size);

            for (let i = 0; i < 5; i++) {
                rect(this.x + (i * 7), this.y + (i * 7), this.size);
            }
        }
        else if(this.style == 6){
            for (let i = 0; i < 5; i++) {
                beginShape();
                vertex(this.x + (i * 5), this.y + (i * 9));
                vertex(this.x + (i * 5)-(this.size/2), this.y + (i * 9) + this.size);
                vertex(this.x + (i * 5)+(this.size/2), this.y + (i * 9)  + this.size);
                vertex(this.x + (i * 5), this.y + (i * 9));
                endShape();
              }
        }
        else if(this.style == 7){
            for (let i =0; i<this.points.length-1;i++){
              line(this.points[i][0], this.points[i][1], this.points[i+1][0], this.points[i+1][1]);
            }
        }
        else if(this.style == 8){
            line(this.x,this.y, this.x+this.size, this.y+this.size);
            line(this.x,this.y+this.size, this.x+this.size, this.y-this.size);
        }
        else if(this.style == 9){

            this.x = this.tempPos[0];
            this.y = this.tempPos[1];
            this.size = this.tempSize;

            for (let i =0; i<100;i++){
                this.mult = this.points[i][1];
                this.direction = this.points[i][0];

                if (this.mult >0.5){
                this.mult =1;
                }
                else{
                this.mult =-1;
                }
                this.size = this.size*this.mult;
                // let this.this.direction = 4;
                if (this.direction === 1 && (this.y+this.size< height&& this.y+this.size>0)) { // vertical
                
                line(this.x, this.y, this.x, this.y+this.size);
                this.y+=this.size;
                } else if (this.direction === 2 && (this.y+this.size< height&& this.y+this.size>0) && (this.x+this.size< width&& this.x+this.size>0)) { // left diagonal
                line(this.x, this.y, this.x + this.size, this.y + this.size);
                this.y+=this.size;
                this.x+=this.size;
                } else if (this.direction === 3 && (this.x+this.size< width&& this.x+this.size>0)) { // horizontal
                line(this.x, this.y, this.x + this.size, this.y);
                this.x+=this.size;
                
                } else if (this.direction ===4 && (this.y+this.size< height&& this.y+this.size>0)&& (this.x+this.size< width&& this.x+this.size>0)){ // right diagonal
                line(this.x + this.size, this.y, this.x, this.y + this.size);
                this.y+=this.size;
                this.x-=this.size;
                }
                else {
                this.size*=this.mult;
                }
            }
        }
        else if(this.style == 10){
            let counter = 0;
            for (let r = 0; r < height; r += 10) {
                for (let c = 1; c < width; c += 10) {
                  let direction = this.points[counter];
                  if (direction === 1){
                    line(r, c, r, c+10);
                  }
                  counter += 1;
                }
              }
        }
        else if(this.style == 11){
            let counter = 0;
            for (let r = 0; r < height; r += 10) {
                for (let c = 0; c < width; c += 10) {
                  let direction = this.points[counter];
                  if (direction === 1){
                    line(r+10, c+10, r, c+10);
                  }
                  counter += 1;
                }
              }
        }
        else if(this.style == 12){
            push();
            // stroke(int(line_color[0]),int(line_color[1]),int(random(40,70)));
            beginShape();
            for (let i =0; i<this.points.length; i++ ){
                vertex(this.points[i][0],this.points[i][1]);
            }
            endShape();
            pop();
        }
        else if(this.style == 13){
            this.size = this.tempSize;
            this.y = this.tempPos[1];

            while (this.size>2){
            
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x-(this.size/2),this.y+this.size);
                vertex(this.x+(this.size/2),this.y+this.size);
                vertex(this.x,this.y);
                endShape(CLOSE);
                
                this.y += this.size;
                this.size = this.size/2;
              }


        }
        else if(this.style == 14){
            push();
            fill(this.colors);
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x-(this.size/2),this.y+this.size);
            vertex(this.x+(this.size/2),this.y+this.size);
            vertex(this.x,this.y);
            endShape(CLOSE);
            pop();
        }
        else if(this.style == 15){

            push();
            fill(this.colors);
            rect(this.x, this.y, this.size);
            pop();
        }
        else if(this.style == 16){
            this.size = this.tempSize;
            while(this.size>2){
    
                rect(0+this.size,0+this.size, this.size);
            
                this.size = this.size/1.5;
              }
        }
        else if(this.style == 17){
            this.size = this.tempSize;

            for (let i = -50; i<width; i+=this.size){
                this.x = i;
                this.y = 0;

                while(this.x<width && this.x>0 && this.y<height){
                    rect(this.x,this.y, this.size);
                    
                    this.x = this.x+this.size-20;
                    this.y = this.y+this.size;
                }
            }
        }
        else if(this.style == 18){
            this.x = this.tempPos[0];
            this.y = this.tempPos[1];
            
            while (this.x<width){
  
                rect(this.x,this.y, this.size);
                
                this.x = this.x+this.size-(this.size/2.5);
                this.y = this.y+this.size-(this.size/2.5);
              }
        }
        else if(this.style == 19){
            this.x = this.tempPos[0];
            this.y = this.tempPos[1];
            
            while(this.x<width && this.x>0 && this.y<height){
                rect(this.x,this.y, this.size);
                
                this.x = this.x+this.size-20;
                this.y = this.y+this.size;
            }
        }
        else if(this.style == 20){
            rect(this.x, this.y, this.size);
        }
        else if(this.style == 21){
            push();
            fill(this.colors);
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x-(this.size/2),this.y+this.size);
            vertex(this.x,this.y+(this.size*2));
            vertex(this.x+(this.size/2),this.y+this.size);
            endShape(CLOSE);
            pop();

        }
        else if(this.style == 22){
            while(this.size>2){
        
                rect(this.x,this.y, this.size);
        
                this.size = this.size/1.5;
              }
        }
        else if(this.style == 23){
            this.size = this.tempSize;
            this.x = this.tempPos[0];
            this.y = this.tempPos[1];

            while(this.size>2){

                line(this.x,this.y, this.x+this.size,this.y);
                line(this.x+this.size,this.y, this.x+this.size, this.y+this.size);
                line(this.x+this.size,this.y+this.size, this.x,this.y+this.size);
                line(this.x,this.y+this.size, this.x,this.y+this.size/2);
            
                this.size = this.size/2;
                this.x = this.x;
                this.y = this.y+this.size/4;
            }
        }
        else if(this.style == 24){
            for (let r = 10; r < height; r += 10) {
                for (let c = 10; c < width; c += 10) {
                    line(c, r, c, r);
                }
              }
        }
        else if(this.style == 25){
            this.size = this.tempSize;

            while(this.size>2){
                
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x-(this.size/2),this.y+this.size);
                vertex(this.x+(this.size/2),this.y+this.size);
                vertex(this.x,this.y);
                endShape(CLOSE);
            
                this.size = this.size/2;
              }
        }
        else{
            let counter = 0;
            for (let r = 0; r < height; r += 10) {
                for (let c = 0; c < width; c += 10) {
                  let direction = this.points[counter];
                  if (direction === 1) { // vertical
                    line(c, r, c, r + 10);
                  } else if (direction === 2) { // left diagonal
                    line(c, r, c + 10, r + 10);
                  } else if (direction === 3) { // horizontal
                    line(c, r, c + 10, r);
                  } else { // right diagonal
                    line(c + 10, r, c, r + 10);
                  }
                  counter += 1;
                }
              }
        }
    }
}
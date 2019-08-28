import Car from './Car.js';
export class Toyota extends Car {
    Stop() {
        console.log("stop drive the car");
    }
    setColor(color) {
        this.mColor = color;
    }
    getColor() {
        console.log(this.mColor);
    }
} 
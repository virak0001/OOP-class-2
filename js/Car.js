
   export default class Car {
    //NameCar
    setNameCar(name) {
        this.mName = name;
    }
    getNameCar() {
        console.log(this.mName);
    }
    //brand
    setBrand(brand) {
        this.mBrand = brand;
    }
    getBrand() {
        console.log(this.mBrand);
    }
    //Speed
    Speed() {
        console.log('200km/h');
    }
    back() {
        console.log("the car can back");
    }
}
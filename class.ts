class Bike {
    private miles: number;
    public price: number;
    public max_speed: string; 
    constructor(
        price: number,
        max_speed: string,
    ) {
        this.miles = 0;
        this.price = price;
        this.max_speed = max_speed;
    }
    displayInfo() {
        console.log(this.miles, this.price, this.max_speed)
    }
    ride() {
        console.log("Riding")
        this.miles += 10;
    }
    reverse() {
        console.log("Reversing")
        this.miles -= 5;
    }
}

const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(100, "26mph");
const bike3 = new Bike(300, "24mph");

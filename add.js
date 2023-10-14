const car = {
    speed : 'slow' ,
    price : 12000 ,
    streering : true,
}

var car1 = Object.create(car)
car1.speed = 'fast'

for(prop in car1){
    console.log(prop, car1[prop])
}

for(prop of Object.keys(car1)){
    console.log(prop, car1[prop])
}
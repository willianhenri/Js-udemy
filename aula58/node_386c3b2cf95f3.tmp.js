function random(max, min) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}
let rand = random(50, 1)

while (rand !== 50) {
    rand = random(50, 1)
    console.log(rand)
}
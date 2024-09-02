function points(games) {
    return games.reduce((acc, game) => {
        const [x,y] = game.split(':');
        const points = x > y ? 3 : x === y ? 1 : 0;
        acc += points;
        return acc;

    }, 0);
}


//reduce je metoda kod arraya, gdje se loopa kroz array i reducira se u jedan value, uzima 2 parametra

//acc je acuumulator
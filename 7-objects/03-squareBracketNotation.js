// Square bracket notation

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

//console.log(garden.vegetable);

let x = 'vegetable';

console.log(garden.x, garden[x]);

let baking = {};
//baking.zucchini = 'better make some bread';
baking['zucchini'] = 'better make some bread'; 
console.log(baking);

//console.log(baking.garden.vegetable); //This will not work

console.log(baking[garden['vegetable']]);
console.log(garden['vegetable']);
console.log(baking['zucchini']);

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let key = 'water';

Object.keys(garden).forEach(g => {
    //console.log(g);
    if (g === key) {
        console.log(garden[key]);
    }
})


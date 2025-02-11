//     Task
//     Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.
//
// The left side letters and their power:
//
//     w - 4
// p - 3
// b - 2
// s - 1
// The right side letters and their power:
//
//     m - 4
// q - 3
// d - 2
// z - 1
// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
//
// Example (Input --> Output)
// "s*zz"           --> "Right side wins!"
// "*zd*qm*wp*bs*"  --> "Let's fight again!"
// "zzzz*s*"        --> "Right side wins!"
// "www*www****z"   --> "Left side wins!"

function alphabetWar(fight) {
    let leftCounter = 0
    let rightCounter = 0
    const leftLetters = {w: 4, p: 3, b: 2, s: 1}
    const rightLetters = {m: 4, q: 3, d: 2, z: 1}

    const fightArr = fight.split("")
    for (let i = 0; i < fightArr.length; i++) {
        if (fightArr[i] === '*') {
            fightArr[i] = ''
            if (i > 0) {
                fightArr[i - 1] = ''
            }
            if (i < fightArr.length - 1 && fightArr[i + 1] !== "*") {
                fightArr[i + 1] = ''
            }
        }
    }

    const filterArr = fightArr.filter(el => el !== '')

    for (const filterArrElement of filterArr) {
        if (leftLetters[filterArrElement]) {
            leftCounter += leftLetters[filterArrElement]
        }
        if (rightLetters[filterArrElement]) {
            rightCounter += rightLetters[filterArrElement]
        }
    }

    if (rightCounter > leftCounter) {
        return "Right side wins!"
    } else if (leftCounter > rightCounter) {
        return "Left side wins!"
    } else {
        return "Let's fight again!"
    }
}

console.log(alphabetWar("z"))
console.log(alphabetWar("****"))
console.log(alphabetWar("z*dq*mw*pb*s"))
console.log(alphabetWar("zdqmwpbs"))
console.log(alphabetWar("zz*zzs"))
console.log(alphabetWar("sz**z**zs"))
console.log(alphabetWar("z*z*z*zs"))
console.log(alphabetWar('ix**h**qb*kz*g'))


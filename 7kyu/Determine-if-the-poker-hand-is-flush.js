// Description:
// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

const isFlush = (cards) => {
	const suit = cards[0].slice(-1)
    return cards.every(card => card.slice(-1) === suit)
};

// const isFlush2 = (cards) => {
// 	return cards.every((card) => {
//         card[1] === 'H' || card[1] === 'S' || card[1] === 'D' || card[1] === 'C'
//     });
// };

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]));
console.log(isFlush(["AD", "4S", "7H", "KS", "10S"]));

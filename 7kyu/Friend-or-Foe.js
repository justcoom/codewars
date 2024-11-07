// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Input strings will only contain letters. Note: keep the original order of the names in the output.

const friend = (friends) => {
	//your code here
	return friends.filter((el) => el.length === 4);
};

// можно добавить проверку isNaN для добавления только строки из символов

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "1234", "4", "Cool Man"]));
console.log(friend(["Peter", "Stephen", "Joe"]));

console.log(isNaN('43242'));
console.log(isNaN('dasda'));


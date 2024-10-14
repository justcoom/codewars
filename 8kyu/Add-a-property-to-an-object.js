// Description:
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

function addProperty(obj, prop, value) {
  // Add your code here
  if (prop in obj) {
    throw new Error("this property already exists");
  } else {
    return obj[prop] = value;
  }
}

nameB = {
  name: "Palle",
};

addProperty(nameB, "na", "Palle");

console.log(nameB);


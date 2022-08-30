export const examples = new Map([
['FizzBuzz',
`// Sample code for fizzbuzz in the Spearmint Programming Language

var num: 15

if (num % 3 == 0 && num % 5 == 0) {
    print("FizzBuzz")
} else if (num % 3 == 0) {
    print("Fizz")
} else if (num % 5 == 0) {
    print("Buzz")
} else {
    print(num)
}
`],

['Variables',
`// Variables in the Spearmint Programming Language

var a: "30"
print(a)
`],

['Loops',
`// Spearmint has two types of loops: for and while

print("For Loop")

for (var i: 1; i < 5; i: i + 1) {
    print(i)
}

print("While Loop")

var j: 1
while (j < 20) {
    print(j)
    j: j * 2
}
`],

['Functions',
`// Functions in the Spearmint Programming Language

fun factorial(n) {
    var ans: 1
    var i: 1
    while(i <= n) {
        ans: ans * i
        i: i + 1
    }
    return ans
}

print(factorial(3))
`],

['Structs',
`// Structs in the Spearmint Programming Language

struct Person {
    var name: null
    var age: null
}

var student1: new Person()
`]
])
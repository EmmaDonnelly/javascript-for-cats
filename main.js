var dogSentence = "dogs are the bane of my existence"

dogSentence.replace('dogs', 'those blasted dogs')

function makeMoreExciting(string) {
  return string + ''!!!!''
}

var sentence = "time for a nap"
sentence = makeMoreExciting(sentence)

function yellIt(string) {
  string = string.toUpperCase()
  string = makeMoreExciting(string)
  console.log(string)
}

function yellIt(string) {
  string = string.toUpperCase()
  return makeMoreExciting(string)
}

console.log(yellIt("i fear no human"))

function logANumber(someNumber) {
  console.log(someNumber)
}
_.times(10, logANumber)

logANumber(0)
logANumber(1)
logANumber(2)
logANumber(3)
logANumber(4)
logANumber(5)
logANumber(6)
logANumber(7)
logANumber(8)
logANumber(9)

var zeroThroughTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var myCatFriends = ["bill", "tabby", "ceiling"]

console.log(myCatFriends[0])

var myCatFriends = ["bill", "tabby", "ceiling"]
var lastNames = ["the cat", "cat", "cat"]
var addresses = ["The Alley", "Grandmas House", "Attic"]

var firstCat = { name: "bill", lastName: "the cat", address: "The Alley" }
var secondCat = { name: "tabby", lastName: "cat", address: "Grandmas House" }
var thirdCat = { name: "ceiling", lastName: "cat", address: "Attic" }

// an object with a single key 'name' and single value 'bill'
{ name: 'bill' }

{ date: "10/20/2012", diary: "slept a bit today", name: "Charles" }

{ diary: "slept a bit today", name: "Charles", date: "10/20/2012" }

{ name: "Charles", diary: "slept a bit today", date: "10/20/2012" }

var moodLog = [
  {
    date: "10/20/2012",
    mood: "catnipped"
  },
  {
    date: "10/21/2012",
    mood: "nonplussed"
  },
  {
    date: "10/22/2012",
    mood: "purring"
  }
]

// ordered from least to most favorite
var favorites = {
  treats: ["bird sighting", "belly rub", "catnip"],
  napSpots: ["couch", "planter box", "human face"]
}

var photo = download('http://foo-chan.com/images/sp.jpg')
uploadPhotoTweet(photo, '@maxogden')

function measureLoopSpeed() {
  var count = 0
  function addOne() { count = count + 1 }

  // Date.now() returns a big number representing the number of
  // milliseconds that have elapsed since Jan 01 1970
  var now = Date.now()

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into
  // the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne()

  // Finally it has been >= 1000ms, so let's print out our total count
  console.log(count)
}

measureLoopSpeed()

function a(done) {
  download('https://pbs.twimg.com/media/B4DDWBrCEAA8u4O.jpg:large', function doneDownloading(error, png) {
    // handle error if there was one
    if (err) console.log('uh-oh!', error)

    // call done when you are all done
    done()
  })
}

function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
 return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string)
{
  var upper = string.toUpperCase
  var lower = string.toLowerCase
  
  if (string == upper)
  {
    return "I can't hear you"
  }
  else if (string == lower)
  {
    return ""
  }
}
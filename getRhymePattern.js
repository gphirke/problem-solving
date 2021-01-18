/*
 * The problem statement
 * 
 * Time Limit: 15min + 45min
 * 
 * We were working with rhyme schemes. To tell if the
 * two words rhyme, we have to compare their rhyme-
 * patterns. 
 * We need your help to write a program that can find
 * out the rhyme-pattern of any word.
 * 
 * Vowel
 * A vowel is any of: `a`, `e`, `i`, `o`, `u` or `y`.
 * NOTE: we consider `​y`​ as a vowel too, as long as
 * it is not at the start or end of a word. So, as an
 * example, the `y`​ in `rhythm`​ is considered a vowel
 * 
 * ​Rhyme-pattern​
 * A ​rhyme-pattern​ is a substring of a word such that:
 *   1. The word ends with that substring.
 *   2. The first letter of the substring is always a
 *       vowel.
 *   3. The substring contains exactly one contiguous
 *       string of vowel(s).
 *   4. The substring must either be the whole word,
 *       or the letter immediately preceding the
 *       start of the substring must be a non-vowel.
 * 
 * For example,
 *  the rhyme-pattern​ of `star` would be `ar`,
 *  the rhyme-pattern​ of `rainbow` would be `ow`,
 *  the rhyme-pattern​ of `noise` would be `e`, 
 *  the rhyme-pattern​ of `sunny` would be `unny`,
 *  the rhyme-pattern​ of `s​pying​` would be `​ying​`, 
 *  and the rhyme-pattern​ of `​all​` would be `​all​`.
 * 
 * Input will:
 *  1. always be in lower case
 *  2. always have vowels
 *  3. have no other character than [a-z]
 * 
 * Task: you need to implement the function
 * `getRhymePattern` below to return the rhyme-pattern
 * as described.
 * 
 * [Bonus marks for good commenting, brevity, and modularity]
 */

function checkVowels(char, i, word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var len = word.length;
  if(vowels.indexOf(char)> -1) {
     return true;
  }

  if (!(i==0 || i == len-1) && char == 'y') {
    return true;
  }

  return false;   
}

function getRhymePattern(word) {
  // TODO: Implement the logic
  var chars = word.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var subStr = "";
  for(let i=chars.length-1; i>=0; i--) {
    /*if(vowels.indexOf(chars[i])> -1) {
      if(vowels.indexOf(chars[i-1])> -1) {
        continue;
      };
      return subStr;
      //young
    }*/
    subStr =  chars[i] + subStr;
    if(checkVowels(chars[i], i, word)) {
      if(checkVowels(chars[i-1], i-1, word)) {
        continue;
      };
      return subStr;
    }
  } 
  /*if (subStr.charAt(0) == 'y') {
    return subStr.substr(1);
  }*/
  return subStr;
}




//testcases

/*
[
  {
    "input": "problem",
    "output": "em"
  },
  {
    "input": "than",
    "output": "an"
  },
  {
    "input": "haiku",
    "output": "u"
  },
  {
    "input": "height",
    "output": "eight"
  },
  {
    "input": "weight",
    "output": "eight"
  },
  {
    "input": "doctor",
    "output": "or"
  },
  {
    "input": "pills",
    "output": "ills"
  },
  {
    "input": "ills",
    "output": "ills"
  },
  {
    "input": "every",
    "output": "ery"
  },
  {
    "input": "day",
    "output": "ay"
  },
  {
    "input": "night",
    "output": "ight"
  },
  {
    "input": "fight",
    "output": "ight"
  },
  {
    "input": "other",
    "output": "er"
  },
  {
    "input": "other",
    "output": "er"
  },
  {
    "input": "noise",
    "output": "e"
  },
  {
    "input": "boys",
    "output": "oys"
  },
  {
    "input": "true",
    "output": "ue"
  },
  {
    "input": "too",
    "output": "oo"
  },
  {
    "input": "letters",
    "output": "ers"
  },
  {
    "input": "scheme",
    "output": "e"
  },
  {
    "input": "alpha",
    "output": "a"
  },
  {
    "input": "blaster",
    "output": "er"
  },
  {
    "input": "cat",
    "output": "at"
  },
  {
    "input": "desert",
    "output": "ert"
  },
  {
    "input": "elephant",
    "output": "ant"
  },
  {
    "input": "frog",
    "output": "og"
  },
  {
    "input": "gulch",
    "output": "ulch"
  },
  {
    "input": "horse",
    "output": "e"
  },
  {
    "input": "ireland",
    "output": "and"
  },
  {
    "input": "jam",
    "output": "am"
  },
  {
    "input": "kreme",
    "output": "e"
  },
  {
    "input": "loofah",
    "output": "ah"
  },
  {
    "input": "moo",
    "output": "oo"
  },
  {
    "input": "narf",
    "output": "arf"
  },
  {
    "input": "old",
    "output": "old"
  },
  {
    "input": "pink",
    "output": "ink"
  },
  {
    "input": "quash",
    "output": "uash"
  },
  {
    "input": "rainbow",
    "output": "ow"
  },
  {
    "input": "star",
    "output": "ar"
  },
  {
    "input": "tour",
    "output": "our"
  },
  {
    "input": "uvula",
    "output": "a"
  },
  {
    "input": "very",
    "output": "ery"
  },
  {
    "input": "will",
    "output": "ill"
  },
  {
    "input": "xmas",
    "output": "as"
  },
  {
    "input": "young",
    "output": "oung"
  },
  {
    "input": "zed",
    "output": "ed"
  },
  {
    "input": "deception",
    "output": "ion"
  },
  {
    "input": "comic",
    "output": "ic"
  },
  {
    "input": "grout",
    "output": "out"
  },
  {
    "input": "oval",
    "output": "al"
  },
  {
    "input": "cable",
    "output": "e"
  },
  {
    "input": "rob",
    "output": "ob"
  },
  {
    "input": "steal",
    "output": "eal"
  },
  {
    "input": "steel",
    "output": "eel"
  },
  {
    "input": "weak",
    "output": "eak"
  },
  {
    "input": "poem",
    "output": "oem"
  },
  {
    "input": "lines",
    "output": "es"
  },
  {
    "input": "it",
    "output": "it"
  },
  {
    "input": "your",
    "output": "our"
  },
  {
    "input": "sour",
    "output": "our"
  },
  {
    "input": "fling",
    "output": "ing"
  },
  {
    "input": "flying",
    "output": "ying"
  },
  {
    "input": "yell",
    "output": "ell"
  },
  {
    "input": "hell",
    "output": "ell"
  },
  {
    "input": "sunny",
    "output": "unny"
  },
  {
    "input": "toney",
    "output": "ey"
  },
  {
    "input": "money",
    "output": "ey"
  },
  {
    "input": "bunn",
    "output": "unn"
  },
  {
    "input": "syzygy",
    "output": "ygy"
  },
  {
    "input": "yeasayer",
    "output": "ayer"
  },
  {
    "input": "layer",
    "output": "ayer"
  }
]

*/

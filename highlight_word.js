//  This function will return the HTML for highlighting the word if successful
//  Othewise, it will return undefined

function highlightWord(originalWord, newWord){
  let re = /[.,:;]+$/
  if (originalWord === newWord){
    return `<span class="highlight">${newWord}</span>`
  }else if (re.test(newWord)){
    let contains = new RegExp (`^${originalWord}`);
    let nonContainingPart = new RegExp (`[^${originalWord}]+`)
    if (contains.test(newWord)){
      let word = newWord.match(contains)
      let punctuation = newWord.match(nonContainingPart)
      //word = [ 'book', index: 0, input: 'book...' ]
      //punctuation = [ '...', index: 4, input: 'book...' ]
      return `<span class="highlight">${word}</span>${punctuation}`
    }
  }
}
console.log(highlightWord('book', 'book'))
console.log(highlightWord('book', 'book.'))
console.log(highlightWord('book', 'book...'))
console.log(highlightWord('book', 'book:'))
console.log(highlightWord('book', 'book;'))
console.log(highlightWord('booker', 'book;'))
console.log(highlightWord('books', 'book;'))
console.log(highlightWord('book', 'booka'))
console.log(highlightWord('book', 'book-'))
console.log(highlightWord('book', 'book_'))
console.log(highlightWord('book', 'book~'))

// Sample Output based on console.log above

// <span class="highlight">book</span>
// <span class="highlight">book</span>.
// <span class="highlight">book</span>...
// <span class="highlight">book</span>:
// <span class="highlight">book</span>;
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
//  This function will return the HTML for highlighting the word if successful
//  Othewise, it will return undefined

function highlightWord(searchWord, paragraphWord){
  let re = /[.,:;]+$/
  if (searchWord === paragraphWord){
    return `<span class="highlight">${searchWord}</span>`
  }else if (re.test(paragraphWord)){
    let contains = new RegExp (`^${searchWord}`);
    let nonContainingPart = new RegExp (`[^${searchWord}]+`)
    if (contains.test(paragraphWord)){
      let word = paragraphWord.match(contains)
      let punctuation = paragraphWord.match(nonContainingPart)
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

// increment (likes)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
//index is an identifier for which post needs to be updated


// add comment
export function addComment(postId, author, comment) {
  console.log('Dispatching comment')
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
//postId - which post are working with / i - what comment should be actually removed

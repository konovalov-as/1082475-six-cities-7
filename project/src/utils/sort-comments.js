function sortCommentsByDate (commentA, commentB) {
  if (commentA.date > commentB.date) {
    return -1;
  }
  if (commentA.date < commentB.date) {
    return 1;
  }
  return 0;
}

export function sortComments(comments) {
  return comments.slice().sort(sortCommentsByDate);
}

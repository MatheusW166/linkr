export default function getPostKey(post) {
  if (post.repostUserId) {
    return `${post.id}-${post.repostUserId}`;
  }
  return `${post.id}`;
}

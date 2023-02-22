const newFormHandler = async (event) => {
    event.preventDefault();

const comment_text = document.querySelector('#comment').value.trim();
const post_id = document.getElementById('comment-btn').getAttribute('data-post');
console.log(comment);
console.log(post_id);
if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json()
    console.log(result);
    
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#comment-btn')
  .addEventListener('click', newFormHandler);

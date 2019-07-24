const getFirstUserData = async () => {

    const url = 'https://my-json-server.typicode.com/typicode/demo/comments';
    const response = await fetch(url)//get commments list

    const comments = await response.json();
    const firstComment =  comments[0];

    const commnetData = await fetch(`${url}/${firstComment.id}`)//get comment data
    const parsedComment = await commnetData.json();
    console.log(parsedComment);

    return parsedComment;
}

getFirstUserData();
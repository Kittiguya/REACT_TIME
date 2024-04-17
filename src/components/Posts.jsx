import  SinglePost from "./SinglePost"


export default function Posts() {
    const posts = [
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "4",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "5",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "6",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "7",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "8",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "9",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db",
          "id": "10",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "sending to db foo",
          "id": "12",
          "title": "db-test",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo@bar.com",
            "first_name": "dylan",
            "id": "1",
            "last_name": null,
            "username": "foo"
          },
          "body": "update to db",
          "id": "11",
          "title": "db-update",
          "user_id": 1
        },
        {
          "author": {
            "email": "foo-change@bar.com",
            "first_name": "dylan",
            "id": "3",
            "last_name": null,
            "username": "foo-change"
          },
          "body": "3 posting",
          "id": "13",
          "title": "3 first post",
          "user_id": 3
        },
        {
          "author": {
            "email": "foo-change@bar.com",
            "first_name": "dylan",
            "id": "3",
            "last_name": null,
            "username": "foo-change"
          },
          "body": "3 posting",
          "id": "14",
          "title": "3 first post",
          "user_id": 3
        },
        {
          "author": {
            "email": "foo-change@bar.com",
            "first_name": "dylan",
            "id": "3",
            "last_name": null,
            "username": "foo-change"
          },
          "body": "3 posting",
          "id": "15",
          "title": "3 first post",
          "user_id": 3
        },
        {
          "author": {
            "email": "foo-change@bar.com",
            "first_name": "dylan",
            "id": "3",
            "last_name": null,
            "username": "foo-change"
          },
          "body": "3 posting with token",
          "id": "16",
          "title": "3 first post",
          "user_id": 3
        },
        {
          "author": {
            "email": "foo-change@bar.com",
            "first_name": "dylan",
            "id": "3",
            "last_name": null,
            "username": "foo-change"
          },
          "body": "3 posting with token",
          "id": "17",
          "title": "3 first post",
          "user_id": 3
        }
      ]
    

  return (
    <>
        <h2>Posts</h2>

        {posts.map((post, i) => {
                return post.author.username !== 'foo' && <SinglePost post={post} key={i}/>
    })} 
    </>
  )
}



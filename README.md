## Pyramis App

For this project I came up with this idea because it is something my friends do every week, and was thrilled when I successfully transformed it into a fully functional CRUD application. Initially, I had high aspirations for this project, but within a few days, I recognized that it may not be suitable for my portfolio due to its ranking nature. Nevertheless, I found the experience of creating it to be enjoyable and plan to refine it in the future.

And although there are several aspects of the project that I would have preferred to change and allocate more time towards, I ultimately opted to develop another full CRUD app that would enhance my portfolio.


I created 7 RESTful routes that can create, read, update, and delete data using express, node.js, and mongoose.

Ascending/Descending Sort
Specify in the sort parameter the field or fields to sort by and a value of 1 or -1 to specify an ascending or descending sort respectively.

The following operation sorts the documents first by the age field in descending order and then by the posts field in ascending order:

db.users.find({ }).sort( { age : -1, posts: 1 } )


https://www.mongodb.com/docs/manual/reference/method/cursor.sort/

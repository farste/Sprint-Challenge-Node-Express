# Review Questions

## What is Node.js?
A runtime environment that runs javascript apps server-side
## What is Express?
A web app framework that works on top of node to simplify its API and adds extra functionality like routing and middleware support.
## Mention two parts of Express that you learned about this week.

## What is Middleware?
A program that intercepts data as it goes from server to client and vice versa, performing useful functions on the data during transit
## What is a Resource?
Everything
## What can the API return to help clients know if a request was successful?
A success confirmation, by way of a code e.g.(200), a string input by the developer, or the results of the request
## How can we partition our application into sub-applications?
Doing something like

var sub1 = express();
sub1.get("/", function(req, res){
  res.json({status: "SUCCESS!!!!!!"});
});

var sub2 = express();
sub2.get("/", function(req, res){
  res.json({
    foo: "bar",
    baz: "quux"
  });
});

## What is express.json() and why do we need it?
Enables the app to parse json content out of req.body
const express = require("express");
const action = require("./data/helpers/actionModel");
const projectModel = require("./data/helpers/projectModel");
const server = express();

server.use(express.json());

server.get("/api/projects/", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

server.post("/api/projects/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .json({ errorMsg: "Please provide name and content" });
  } else {
    projectModel
      .insert(req.body)
      .then(id => {
        res.status(201).json(id);
      })
      .catch(err => {
        res.status(500).json({ error: "Unable to add project" });
      });
  }
});

server.put("/api/projects/:id", (req, res) => {
  const { name, description } = req.body;
  projectModel
    .update(req.params.id, req.body)
    .then(changes => {
      if (changes === null) {
        res.status(404).json({
          errorMsg: "The project with the specified ID does not exist."
        });
      }
      res.status(200).json(changes);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

server.delete("/api/projects/:id", (req, res) => {
     
    projectModel
    .remove(req.params.id)
    .then(id => {
        if (id === 0) {
        res.status(404).json({err: "The project with the specified ID does not exist."})
    }
        res.status(200).json('deleted')
    })
})

server.listen(3000, () => console.log("\n API on port 3k \n"));

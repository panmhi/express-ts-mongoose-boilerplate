import express from "express";
import {
  create,
  getAllNotes,
  getSingleNote,
  removeSingleNote,
  updateSingleNote,
} from "./controllers/note";
import "./db";
import Note, { NoteDocument } from "./models/note";

// create a server
const app = express();

// this will parse post request coming from fetch.post() method
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  // here we need data so that we can create new note/todo
  console.log(req.body);
  res.json({ message: "I am listening!" });
});

interface IncomingBody {
  title: string;
  description?: string;
}

app.post("/create", create);

app.patch("/:noteId", updateSingleNote);

app.delete("/:noteId", removeSingleNote);

app.get("/", getAllNotes);

app.get("/:id", getSingleNote);

// listen to some port
app.listen(8000, () => {
  console.log("listening");
});

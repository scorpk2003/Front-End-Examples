const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill All Field");
  } else {
    const note = new Note({ user: req.user._id, title, content, category });
    const createNote = await note.save();
    res.status(200).json(createNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not Found" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  const { title, content, category } = req.body;

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Can't perform this action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updateNoted = await note.save();
    res.json(updateNoted);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Can't perform this action");
  }
  if (note) {
    await note.deleteOne();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404).json({ message: "Not not found" });
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };

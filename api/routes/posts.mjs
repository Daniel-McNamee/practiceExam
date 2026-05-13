import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

const collectionName = "items";

// GET all
router.get("/", async (req, res) => {

    let collection = await db.collection(collectionName);

    let results = await collection
        .find({})
        .toArray();

    res.send(results).status(200);

});

// GET by ID
router.get("/:id", async (req, res) => {

    let id = req.params.id;

    let collection = await db.collection(collectionName);

    let query = { _id: new ObjectId(id) };

    let result = await collection.findOne(query);

    if (!result) {
        res.status(404).send("Not found");
    }
    else {
        res.status(200).send(result);
    }

});

// POST
router.post("/", async (req, res) => {

    let collection = await db.collection(collectionName);

    let newDocument = req.body;

    let result = await collection.insertOne(newDocument);

    res.status(201).send(result);

});

// DELETE
router.delete("/:id", async (req, res) => {

    let id = req.params.id;

    const query = { _id: new ObjectId(id) };

    const collection = db.collection(collectionName);

    let result = await collection.deleteOne(query);

    res.status(200).send(result);

});

// UPDATE
router.put("/:id", async (req, res) => {

    let id = req.params.id;

    const query = { _id: new ObjectId(id) };

    const updates = {
        $set: req.body
    };

    const collection = db.collection(collectionName);

    let result = await collection.updateOne(query, updates);

    res.status(200).send(result);

});

export default router;
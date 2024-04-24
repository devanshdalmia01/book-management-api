import { Request, Response } from "express";
import Book from "../models/book";

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const query: {
            author?: string;
            publicationYear?: number;
        } = {};
        if (req.query.author) {
            query["author"] = req.query.author as string;
        }
        if (req.query.year) {
            query["publicationYear"] = Number(req.query.year);
        }
        const books = await Book.find(query);
        if (books.length) {
            res.json(books);
        } else if ((req.query.year || req.query.author) && !books.length) {
            res.json("No books found with these values.");
        } else {
            res.json("No books added.");
        }
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            publicationYear: req.body.publicationYear,
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.status(200).send("Book deleted!");
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

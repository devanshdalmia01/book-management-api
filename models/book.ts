import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publicationYear: number;
}

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  publicationYear: {
    type: Number,
    required: [true, 'Publication year is required']
  }
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;

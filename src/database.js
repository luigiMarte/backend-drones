import mongoose from 'mongoose';

// Set 'strictQuery' is only to remove console warning
mongoose
  .set('strictQuery', false)
  .connect(
    'mongodb+srv://main_user:5TDz0sE3kyiIE1zR@cluster0.xgbqbgq.mongodb.net/dronesDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,
      //useCreateIndex: true,
    }
  )
  .then((db) => console.log('DB connected'))
  .catch((err) => console.log('Error connecting', err));

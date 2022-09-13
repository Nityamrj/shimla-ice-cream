import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const url = `mongodb+srv://${username}:${password}@cluster0.4hr6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected successfully!!");
    } catch (error) {
        console.log("Database connection failed!!")
    }
}

export default Connection; 
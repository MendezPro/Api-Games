import mongoose from 'mongoose';
mongoose.connect(process.env.CONECTION_STRING_DB)
.then(db => console.log('Exito al conectar a la BD'))
.catch(err => console.log(err));
export default mongoose;
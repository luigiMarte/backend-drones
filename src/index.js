// Index.js --> Para arrancar la aplicación
import app from './app.js';
import './database.js';

const PORT = process.env.PORT || 3000;
//app.listen(3000);
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

console.log('Server running on port', 3000);

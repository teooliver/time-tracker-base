import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/tasks';
import projectRoutes from './routes/projects';
import clientRoutes from './routes/clients';
import seedRoutes from './routes/seeds';
import config from './config/config';

const app = express();

app.use(cors());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use(bodyParser.json({ limit: '30mb' }));

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/clients', clientRoutes);
app.use('/seed', seedRoutes);

// Connect to Mongo
mongoose
  .connect(config.mongoConnectionUrl!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(config.port, () =>
      console.log(`Server running on port: ${config.port}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

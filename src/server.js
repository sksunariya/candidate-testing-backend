const express = require('express');
const profileRoutes = require('./routes/profileRoutes');
const groupRoutes = require('./routes/groupRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');
const testRoutes = require('./routes/testRoutes');
const tagRoutes = require('./routes/tagRoutes');
const linkRoutes = require('./routes/linkRoutes');
const queryRoutes = require('./routes/queryRoutes');
const profileTagRoutes = require('./routes/profileTagRoutes');
const groupProfileRoutes = require('./routes/groupProfileRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(errorHandler);


app.use('/api/profiles', profileRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/links', linkRoutes);
app.use('/api/queries', queryRoutes);
app.use('/api/profile-tags', profileTagRoutes);
app.use('/api/group-profiles', groupProfileRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port 5000');
});

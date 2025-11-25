const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Simple user DB (JSON file for prototype)
const USERS_FILE = path.join(__dirname, 'db', 'users.json');

// Ensure DB exists
if (!fs.existsSync(path.join(__dirname, 'db'))) {
    fs.mkdirSync(path.join(__dirname, 'db'));
}
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify({}));
}

// Helper to read/write users
const getUsers = () => JSON.parse(fs.readFileSync(USERS_FILE));
const saveUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

// Serve Public Assets (CSS, JS, Images, Index)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public'))); // Allow relative paths from lessons

// Auth Middleware for Protected Routes
const requireAuth = (req, res, next) => {
    const user = req.cookies.user;
    if (!user) {
        return res.redirect('/'); // Redirect to login if not authenticated
    }
    next();
};

// Protected Routes (The Lessons)
app.use('/lessons', requireAuth, express.static(path.join(__dirname, 'public', 'lessons')));

// API Routes
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
    
    const users = getUsers();
    if (users[username]) return res.status(400).json({ error: 'Username taken' });
    
    users[username] = { password, data: {} };
    saveUsers(users);
    
    res.cookie('user', username, { httpOnly: true });
    res.json({ success: true, username });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = getUsers();
    
    if (users[username] && users[username].password === password) {
        res.cookie('user', username, { httpOnly: true });
        res.json({ success: true, username, data: users[username].data });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('user');
    res.json({ success: true });
});

app.post('/api/progress', (req, res) => {
    const user = req.cookies.user;
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    
    const { data } = req.body;
    const users = getUsers();
    
    if (users[user]) {
        users[user].data = data; // Or merge logic
        saveUsers(users);
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.get('/api/progress', (req, res) => {
    const user = req.cookies.user;
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    
    const users = getUsers();
    res.json({ data: users[user]?.data || {} });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


// TODO: Project Routes
// Developer: [ASSIGNED_DEV]
// Routes: GET / (all), GET /:id, POST / (admin), PUT /:id (admin), DELETE /:id (admin)
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', authMiddleware, uploadMiddleware.single('image'), projectController.createProject);
router.put('/:id', authMiddleware, uploadMiddleware.single('image'), projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;


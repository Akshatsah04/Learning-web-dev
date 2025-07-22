const express = require('express')
const router = express.Router()

const {getAllJobs,getJob,createJob,updateJobs,deleteJobs} = require('../controllers/jobs')


router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').delete(deleteJobs).get(getJob).patch(updateJobs)


module.exports = router
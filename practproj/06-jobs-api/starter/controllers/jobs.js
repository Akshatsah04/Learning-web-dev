const getAllJobs = async (req , res)=>{
    res.send("login user")
}
const getJob = async (req , res)=>{
    res.send("getJob")
}
const createJob = async (req , res)=>{
    res.send("createJobs")
}
const updateJobs = async (req , res)=>{
    res.send("updateJobs")
}
const deleteJobs = async (req , res)=>{
    res.send("deleteJobs")
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJobs,
    deleteJobs
    
}
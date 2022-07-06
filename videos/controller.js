const VIDEO = require('./model')


module.exports ={
    addVid :async(req,res)=>{
        try{
        
     
            const video = req.body.video
            const videos = await new VIDEO({
            
            
              
              video})
            await videos.save();
            res.json(videos);
          } catch (error) {
            console.error(error.message);
          }               
    }
}
const Todo =require('../models/Todo')

exports.deleting = async(req,res)=>{
    try{
        // params id from URL parameter yh vo id hai jo apne app bnti hai mongodb mai
        // /id bydefauilt bni hai toh uske liye maine params use kiyaa hia

        const{id}=req.params
        const todos=await Todo.findByIdAndDelete(
           id 
        )
        res.status(200).json({
            success:true,
            message:"id deleted"
        })

    }
    catch(err){
        console.log(err)
        console.err(err)
        res.status(500).json({
            success:false,
            data:"interal server error",
            err:err.message
           
    })
    }
}

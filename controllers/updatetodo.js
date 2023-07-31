// import the model sara logic controller mai likhte hai

const Todo =require('../models/Todo')

// define route handler
// jaise button pr click krna ek event hota hai jb hm on submit krte hai 
// aise hi hm idhr aye hai ek route ko hit krke toh uske liye yh route handler likhte hai

// hm jb bhi api call krte tb bhi hm async await use kr rhe hotee hai because hm nhi chate ki 
// mera baki code ko affect ho jb tk response aega that's why 
// hm isme bhi db se interaction mai bhi mai yh bolunga ki mera code execution block na ho 

exports.updating = async(req,res)=>{
    try{
        // yh id arhi hogi models/todo se
           const {id}=req.params;
           const {title,description}=req.body

           const todo= await Todo.findByIdAndUpdate(
            {_id:id},
            // updateAt compaas mai tha vha change hoga
            {title,description,updateAt:Date.now()}
           )

            res.status(200).json(
                {
                    // 200 indicates that the request has succeeded
                    success:true,
                    data:todo,
                    message:'update successfully'
                }
            )
    }
   catch(err)
   { 
    // 500 internal server error
        console.log(err)
        console.error(err)
        res.status(500).json(
        {
                success:false,
                data:"interal server error",
                message:"something went wrong"
        })
   }
 


}


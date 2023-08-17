const Todo = require('../models/Todo')


// define route handler
// jaise button pr click krna ek event hota hai jb hm on submit krte hai 
// aise hi hm idhr aye hai ek route ko hit krke toh uske liye yh route handler likhte hai

// hm jb bhi api call krte tb bhi hm async await use kr rhe hotee hai because hm nhi chate ki 
// mera baki code ko affect ho jb tk response aega that's why 
// hm isme bhi db se interaction mai bhi mai yh bolunga ki mera code execution block na ho 

// 1st concept
exports.getting = async(req,res)=>{
    try{
            // fetch all items from database
            // koi parameter nhi hai toh empty object pass krdo because hm sare ke sare fetch krna chate hai items ko
            const todos= await Todo.find({})
            
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'all todos fetched successfully' 

                }
            )} 
            catch(err)
            {
                console.log(err)
                console.err(err)
                res.status(500).json({
                    success:false,
                    data:"interal server error",
                    err:err.message
                   
                    
                
            })
    }



}



// 2nd concept
// id ke according mai fetch krunga 

exports.gettodobyid=async(req,res)=>{
    try{
        // extract todo items on the basis of id  
        // yh id fetch krne ka tarika hai
        const  id=req.params.id;
        // agr mai destructuring krta hu na toh muje
        // const{id} =req.params
        // .findBYid({id}) krna pdega bs 
        // _id smj jaega vo 
        // agr uske baad bhi mai kr rha hu na tb bhi chlega
        // _id mongodb compass mai hai
        const todo=await Todo.findById({_id:id})
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"no data found of the givenId"
            })
        }
       res.status(200).json({
        success:true,
        data:todo,
        message:`todo ${id} data is perfectly fetched`
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

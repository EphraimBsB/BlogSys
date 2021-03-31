const models = require('../../database/models/index');
const Joi = require('joi');

//fUNCTION TO CREATE AND SAVE A POST
const save = (req,res)=>{
    const post={
        title: req.body.title,
        userId: 1,
        description:req.body.description
    }
    //validation
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        userId: Joi.number().integer().required(),
        description: Joi.string().required()
    });
    const {error} = schema.validate(post);
    if(error&&error.details){
        return res.status(400).json({
            message:"validation has faild",
            error:error.details
        });
    }
    models.Post.create(post).then(result=>{
        res.status(201).json({
            message: "Post has been created succcefuly",
            post: result
        })
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error})
        });
}

//FUNCTION TO GET ALL THE POST
const getAll = (req,res)=>{
    models.Post.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json({
            message:'Something went wrong'
        })
    })
}

//FUNCTION TO GET A SINGLE POST
const getOne = (req,res) => {
    const id = req.params.id;
    models.Post.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: '404 Post Not Found',
            }) 
        }
       
    }).catch(error=>{
        res.status(500).json({
            message: 'Something went wrong',
        })
    })
}
//FUNCTION TO UPDATE A POST
const  update = (req,res) => {
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        description:req.body.description
    }
    const userId = 1;
    models.Post.update(updatedPost,{where:{id:id, userId:userId}}).then(result=>{
        res.status(200).json({
            message: "Post updated succefully",
            post:updatedPost
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong",
            err:err
        })
    })
}

//FUNCTION TO DELETE A POST

const destroy = (req,res) => {
    const id = req.params.id;
    const userId = 1;
    models.Post.destroy({where:{id:id, userId:userId}}).then(result=>{
        res.status(200).json({
            message: "Post Deleted succefully"
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong",
            err:err})})
}


module.exports = {
    save:save,
    getAll:getAll,
    getOne:getOne,
    update:update,
    destroy:destroy
}
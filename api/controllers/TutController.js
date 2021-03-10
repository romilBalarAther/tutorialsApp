/**
 * TutController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Tut = require("../models/Tut");

// const Tut = require("../models/Tut");

// const Tut = require("../models/Tut");

// const Tut = require("../models/Tut");

module.exports = {
    list:function(req, res)
    {
        Tut.find({})
        .then(tutorials=>{
            return res.ok(tutorials)
        })
        .catch(err=> res.notFound(err))
    },
    create:function(req, res)
    {
        var name=req.param('name');
        var body=req.param('body');
        var status=req.param('status');

        Tut.create({name:name, body:body, status:status})
        .then( Tut=>{
            return res.ok(Tut);
        })
        .catch(err =>{
            if(err.name=='usageError')
                res.badRequest(err);
            else
                res.serverError(err);      
        })         
          
     },    

    delete:function(req, res)
    {
        Tut.destroy({id:req.params.id})
        .then(result => {return res.ok(result)})
        .catch(err =>{
            if(err.name=='usageError')
                res.badRequest(err);
            else
                res.databaseErrror(res); })
    },
    deleteAll:function(req,res)
    {
        Tut.destroy({})
        .then(result => {return res.ok(result)})
        .catch(err =>{
            if(err.name=='usageError')
                res.badRequest(err);
            else
                res.databaseErrror(res); })
    },

    update:function(req, res)
    {
        let attributes={}
        s

        if(req.param('name'))
            attributes.name=req.param('name');

        if(req.param('status'))
            attributes.status=req.param('status');            
        
    
        Tut.update({id:req.params.id}).set(attributes)
        .then(result =>{ return res.ok(result)})
        .catch(err=> {
            if(err.name=='usageError')
                res.badRequest(err);
            else
                res.notFound(err);
         })
       
    },
   
    find:function(req, res){ 
        
        let attributes={}
        if(req.param('id'))
            attributes.id=req.param('id');      

        if(req.param('name'))
            attributes.name={contains:req.param('name')};

        if(req.param('status'))
            attributes.status=req.param('status');

        Tut.find(attributes)
            .then(tutorials=>{
                return res.ok(tutorials)
            })
            .catch(err=> {
                if(err.name=='usageError')
                    res.badRequest(err);
                else
                    res.notFound(err);
             })

          
    },
};


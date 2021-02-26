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
        Tut.find({}).exec(function(err, tutorials)
        {
            if(err)
            {
                res.send(500, {error: 'Database error'});
            }
            res.view('list',{tutorials:tutorials});

        })
    },
    add:function(req, res)
    {
        res.view('add');
    },
    create:function(req, res)
    {
        var name=req.body.name;
        var body=req.body.body;
        var status=req.body.status;

        Tut.create({name:name, body:body, status:status}).exec(function(err)
        {
            if(err)
            {
                res.send(500, { error: 'Database error'});
            }
            res.redirect('/Tut/list');
        });
    },
    delete:function(req, res)
    {
        Tut.destroy({id:req.params.id}).exec(function(err)
        {
            if(err)
            {
                res.send(500, {error:'Database error'});
            }
            res.redirect('/Tut/list');
        });

        
        return false;

    },
    edit:function(req, res)
    {
        Tut.findOne({id:req.params.id}).exec(function(err,tutorial){
            if(err)
            { 
                res.send(500, {error:'Database error'});
            }
            res.view('edit', {tutorial:tutorial});
                   
        })

    },
    update:function(req, res)
    {
        var name=req.body.name;
        var body=req.body.body;
        var status=req.body.status;

        Tut.update({id:req.params.id},{name:name, body:body, status:status}).exec(function(err)
        {
            if(err)
            {
                res.send(500, { error: 'Database error'});
            }
            res.redirect('/Tut/list');
        });
    },
    search:function(req, res){
        res.view('search')
    },
    find:function(req, res){
        if(req.body.id)
            var id=req.body.id;

        if(req.body.name)
            var name=req.body.name;
            
        if(req.body.status)
            var status=req.body.status;

        Tut.find({id:id,name: {contains: name},status:status}).meta({makeLikeModifierCaseInsensitive: true}).exec(function(err, tutorials)
        {
            if(err)
            {
                res.send(500, {error: 'Database error'});
            }
            res.view('list',{tutorials:tutorials});

        })
    }
  

};


const request = require('request');
const accessToken= process.env.ACCESS_TOKEN


module.exports = {

    listStar: function(req,res){

        var options = {
            url: 'https://api.github.com/users/andryjns/repos',
            headers: {
                'User-Agent': 'request',
                "Authorization": 'token ' + accessToken 
            }
        }
 
        function callback(error, response, body) {
            if (!error) {

                var data= JSON.parse(body)
                var result= []

                for (var repo of data){
                    if (repo["stargazers_count"]>0) {
                        let obj= {
                            name: repo.name,
                            description: repo.description,
                            stargazers_count: repo.stargazers_count,
                            owner: repo.owner.login
                        }
                        result.push(obj)
                       
                    }
                } 

                res.status(200).json({
                    msg: "View success",
                    data: result
                })
            }else {
                res.status(500).json({
                    msg: error.message
                })  
            }        
        }
        request.get(options, callback);
    },

    createRepo: function(req,res){

        var options = {
            url: 'https://api.github.com/user/repos',
            headers: {
                'User-Agent': 'request',
                "Authorization": 'token ' + accessToken 
            },
            body: JSON.stringify({
                name: req.body.name,
                description: req.body.description
            })
        }

        function callback(error, response, body) {
            if (!error) {
                res.status(200).json({
                    msg: "Create repo success",
                    data: JSON.parse(body)
                    
                })
            }else {
                res.status(500).json({
                    msg: error.message
                })  
            }        
        }
        request.post(options, callback);
    },

    searchRepo: function(req,res){

        var options = {
            url: `https://api.github.com/users/${req.params.name}/repos`,
            headers: {
                'User-Agent': 'request',
                "Authorization": 'token ' + accessToken 
            }
        }
 
        function callback(error, response, body) {
            if (!error) {
                res.status(200).json({
                    msg: "View success",
                    data: JSON.parse(body)
                })
            }else {
                res.status(500).json({
                    msg: error.message
                })  
            }        
        }
        request.get(options, callback);
    },

    unstarRepo: function(req,res){
        var options = {
            url: `https://api.github.com/user/starred/${req.params.owner}/${req.params.repo}`,
            headers: {
                'User-Agent': 'request',
                "Authorization": 'token ' + accessToken 
            }
        }
 
        function callback(error, response, body) {
            if (!error) {
                res.status(200).json({
                    msg: "Delete success"
                })
            }else {
                res.status(500).json({
                    msg: error.message
                })  
            }        
        }
        request.delete(options, callback);

    }
}
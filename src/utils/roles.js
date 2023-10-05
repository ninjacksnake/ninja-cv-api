

module.exports = {
    admin:{
        routes: {
            user: ["POST", "PUT", "DELETE", "GET"],
            admin: ["POST", "PUT", "DELETE", "GET"],
            profile: ["POST", "PUT", "DELETE", "GET"],
            education: ["POST", "PUT", "DELETE", "GET"],
            job: ["POST", "PUT", "DELETE", "GET"],
            language: ["POST", "PUT", "DELETE", "GET"],
            project: ["POST", "PUT", "DELETE", "GET"],       
            skills: ["POST", "PUT", "DELETE", "GET"], 
        }
    },
    user:{
        routes: {
            user: ["POST", "PUT",  "GET"],
            profile: ["POST", "PUT", "DELETE", "GET"],
            education: ["POST", "PUT", "DELETE", "GET"],
            job: ["POST", "PUT", "DELETE", "GET"],
            language: ["POST", "PUT", "DELETE", "GET"],
            project: ["POST", "PUT", "DELETE", "GET"],      
            // skills: ["POST", "PUT", "DELETE", "GET"], 
         
        }
    },
}
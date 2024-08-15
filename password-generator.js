const generator = require("generate-password")

         const password = generator.generate({
             length: 8,
            numbers:true,
             symbols:true,
             uppercase:true,
             excludeSimilarCharacters:false,
             strict:true,
         })

         console.log(password);
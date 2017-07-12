            const addFilm = function(dataBase, film){
                            dataBase.push(film); 
                        }
            
            const deleteFilm = function (dataBase, film){
                var temp = dataBase.findIndex( cur_film => cur_film.name == film.name  && cur_film.year == film.year); 
                dataBase.splice(temp, 1); 
            }
            
            const showBase = function (database){
                var res = ""; 
                for(var i = 0; i < database.length; i++){
                    if(database[i].year == undefined){
                        res += database[i].name + "\n"; 
                    }
                    else{
                        res += database[i].name + " (" + database[i].year + ") \n"; 
                    }
                }
                alert("В наличии: "+ getBaseLength(filmBase) +" фильма\n" + res); 
            }
            
            const getBaseLength = function (database){
                return database.length; 
            }
            
            const getCommandInfo  =  function (){
                alert(CM_INFO); 
            }
            
            const convertInputToFilm = function (input){
                var film = {}; 
                input = input.split(" "); 
                if(isNaN(parseInt(input[0]))){
                        if(input[0]!= "" && parseInt(input[1]) > YEAR){
                            film["name"] = input[0]; 
                            film["year"] = input[1]; 
                        }
                        else return false; 
                    }
                    else{
                        if(input[1]!= "" && parseInt(input[0]) > YEAR){
                            film["name"] = input[1]; 
                            film["year"] = input[0];
                        } 
                        else{
                            return false; 
                        }
                    }
                return film; 
            }
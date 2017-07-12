 var ready = confirm(INVITATION); 
            if(ready){
                while(true){
                    var cmd = prompt(MENU);
                    if (cmd == "5") break; 
                    switch(cmd){
                        case ("1"):
                            var input = prompt(INPUT_FILM); 
                            var film = convertInputToFilm(input); 
                            if (film == false){
                                alert(INCORRECT_INPUT); 
                                break; 
                            }
                            addFilm(filmBase, film); 
                            break; 
                        case("2"):
                            var input = prompt(INPUT_FILM);
                            var film = convertInputToFilm(input);
                            if (film == false){
                                alert(INCORRECT_INPUT); 
                                break; 
                            }
                            deleteFilm(filmBase, film); 
                            break; 
                        case("3"):
                            showBase(filmBase);  
                            break; 
                        case("4"):
                            getCommandInfo(); 
                            break; 
                        default:
                            alert(CM_NOT_FOUND); 
                            break ;
                    }
                }
            }
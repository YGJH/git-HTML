function clickHandler()
            {
                var board = document.getElementById("board");
                board.innerHTML = (`&ensp;&ensp;&ensp;&ensp;*</br>
                &ensp;&ensp;&ensp;&ensp;^</br>
                &ensp;&ensp;&ensp;^^^</br>
                &ensp;&ensp;^^^^^</br>
                &ensp;&ensp;&ensp;^^^</br>
                &ensp;&ensp;^^^^^</br>
                &ensp;^^^^^^^</br>
                &ensp;&ensp;^^^^^</br>
                &ensp;^^^^^^^</br>
                                ^^^^^^^^^</br>
                                &ensp;&ensp;&ensp;###</br>
                                &ensp;&ensp;&ensp;###</br>
                                &ensp;&ensp;&ensp;###`)
            }
            var button = document.getElementById('btn');
            button.addEventListener("click" , clickHandler , false);
        //board and heading
        var h1=document.createElement("h1");
        h1.style.cssText='text-align:center;font-family:Comic Sans MS;color:blue;';
        h1.innerText="Tic-Tac-Toe";

        var main_div=document.createElement("div");
        main_div.style.cssText='text-align:center;position: absolute;top: 50%;left: 50%;-ms-transform: translateX(-50%) translateY(-50%);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);';        
        main_div.setAttribute("class","board");

        var div1 = document.createElement("div");
        div1.style.cssText='display:flex;flex-direction:row;justify-content:center;height:100px;width:300px;';
        div1.setAttribute("class","row");
        var div11= document.createElement("div");
        div11.style.cssText='border-bottom:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div11.setAttribute("class","game_cell");
        var div12= document.createElement("div");
        div12.style.cssText='border-bottom:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div12.setAttribute("class","game_cell");
        var div13= document.createElement("div");
        div13.style.cssText='border-bottom:5px solid blue;height:100px;width:100px;';
        div13.setAttribute("class","game_cell");
        div1.appendChild(div11);
        div1.appendChild(div12);
        div1.appendChild(div13);

        var div2 = document.createElement("div");
        div2.style.cssText='display:flex;flex-direction:row;justify-content:center;height:100px;width:300px;';
        div2.setAttribute("class","row");
        var div21= document.createElement("div");
        div21.style.cssText='border-top:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div21.setAttribute("class","game_cell");
        var div22= document.createElement("div");
        div22.style.cssText='border-top:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div22.setAttribute("class","game_cell");
        var div23= document.createElement("div");
        div23.style.cssText='border-top:5px solid blue;height:100px;width:100px;';
        div23.setAttribute("class","game_cell");
        div2.appendChild(div21);
        div2.appendChild(div22);
        div2.appendChild(div23);
        
        var div3 = document.createElement("div");
        div3.style.cssText='display:flex;flex-direction:row;justify-content:center;height:100px;width:300px;';
        div3.setAttribute("class","row");
        var div31= document.createElement("div");
        div31.style.cssText='border-top:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div31.setAttribute("class","game_cell");
        var div32= document.createElement("div");
        div32.style.cssText='border-top:5px solid blue;border-right:5px solid blue;height:100px;width:100px;';
        div32.setAttribute("class","game_cell");
        var div33= document.createElement("div");
        div33.style.cssText='border-top:5px solid blue;height:100px;width:100px;';
        div33.setAttribute("class","game_cell");
        div3.appendChild(div31);
        div3.appendChild(div32);
        div3.appendChild(div33);

        main_div.appendChild(div1);
        main_div.appendChild(div2);
        main_div.appendChild(div3);

        document.body.appendChild(h1);
        document.body.appendChild(main_div);
        
        //game logic
        var X=true;
        var cells=document.querySelectorAll('.game_cell');

        var clickCell = (e) => {
            var classList =e.target.classList;
            if(classList[1] === 'X' || classList[1] ==='O')
            {
                return;
            }
            if(X){
                classList.add('X');
                X=!X;
            }
            else{
                classList.add('O');
                X=!X;
            }
        }

        for(var cell of cells){
            cell.addEventListener('click',clickCell);
        }
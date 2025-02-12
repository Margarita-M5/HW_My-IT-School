let header = document.createElement("header");
header.innerHTML = " ";

let h1Header = document.createElement("h1");
h1Header.innerHTML = "Choose Your Option";
h1Header.classList.add("title");

let h3Header = document.createElement("h3");
h3Header.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing";
h3Header.classList.add("text");
h3Header.setAttribute("id", "text-size");

document.body.appendChild(header);
header.appendChild(h1Header);
header.appendChild(h3Header);

let section = document.createElement("section");
section.innerHTML = " ";

document.body.appendChild(section);

let div1 = document.createElement("div");
div1.innerHTML = " ";
div1.classList.add("content1");

let div2 = document.createElement("div");
div2.innerHTML = " ";
div2.classList.add("content2");

section.appendChild(div1);
section.appendChild(div2);

let h2 = document.createElement("h2");
h2.innerHTML = "FREELANCER";
h2.classList.add("caption");
h2.setAttribute("id", "color-grey");

let h1 = document.createElement("h1");
h1.innerHTML = "Initially <br /> designed to";
h1.classList.add("title");

let h3 = document.createElement("h3");
h3.innerHTML =
  "But I must explain to you how all this <br /> mistaken idea of denouncing";
h3.classList.add("text");

let divButton = document.createElement("div");
divButton.innerHTML = " ";
divButton.classList.add("button");

let h2Button = document.createElement("h2");
h2Button.innerHTML = "START HERE";
h2Button.classList.add("caption");

div1.appendChild(h2);
div1.appendChild(h1);
div1.appendChild(h3);
div1.appendChild(divButton);
divButton.appendChild(h2Button);

let h2Div2 = document.createElement("h2");
h2Div2.innerHTML = "STUDIO";
h2Div2.classList.add("caption");
h2Div2.setAttribute("id", "color-yellow");

let h1Clone = h1.cloneNode(" ");
let h3Clone = h3.cloneNode(" ");
h3Clone.setAttribute("id", "color-white");

let divButtonClone = divButton.cloneNode(" ");
divButtonClone.classList.add("button");

div2.appendChild(h2Div2);
div2.appendChild(h1Clone);
div2.appendChild(h3Clone);
div2.appendChild(divButtonClone);

let style = document.createElement("style");
style.innerHTML = `

     * {
        margin: 0;
        padding: 0;
        
    } 

    @font-face {
    font-family: "Arvo";
    src: url(font/Arvo-Regular.ttf);
    }

    @font-face {
    font-family: "Open Sans";
    src: url(../font/ofont.ru_Open\ Sans\ \(2\).ttf);
    
   }

    header {
    text-align: center;
    margin: 90px 0 58px;
    }

    .title {
        font-family: Arvo;
        font-size: 36px;
        line-height: 48px;
    }
    
    #text-size {
      font-size: 14px;
      padding-top: 10px;
    }

    section {
        display: flex;
        justify-content: center;
    }

    .content1 {
        width: 400px;
        height: 480px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 35px;
        border: 1px solid rgba(232, 233, 237, 1);
        border-radius: 6px 0px 0px 6px;
    }

    .content2 {
        width: 400px;
        height: 481px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 35px;
        background-color: rgba(143, 117, 190, 1);
        border-radius: 0px 6px 6px 0px;
    }

    #color-grey {
        color: rgba(159, 163, 167, 1);
    }

    #color-yellow {
        color:  rgba(255, 200, 10, 1);
    }

    #color-white {
        color: rgb(255, 255, 255);
    }

    .button {
        width: 147px;
        height: 46px;
        margin-top: 25px;
        border: 3px solid rgba(255, 200, 10, 1);
        border-radius: 30px;
        
        line-height: 46px;
    }

    .caption {
        font-family: Montserrat;
        
        font-size: 12px;
        letter-spacing: 2.4px;
    }

    .text {
        font-family: Open Sans;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: rgba(159, 163, 167, 1);
    }
    `;

document.body.appendChild(style);

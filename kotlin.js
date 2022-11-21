(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.warn(
      "You are using KotLin JS library in the browser. For complete documentation visit https://www.w3schools.com/kotlin/"
    );
    var kotlinToJs = (data) => {
      var keyword =
        data.match(/const/g) ||
        data.match(/alert/g) ||
        data.match(/console.log/g) ||
        data.match(/window/g) ||
        data.match(/let/g);
      try {
        const regex = /(for\((.*?)\))|(for \((.*?)\))/gi;
        var matched = regex.exec(data);
        // console.log()
        while (false) {
          // console.log(matched);

          //get number like 0..2 - [0, 2]
          var beginEnd =
            matched &&
            /\((.*?)\)/gi
              .exec(matched[0])[1]
              .trim()
              .split(" ")[2]
              .replace(/\./i, "")
              .split(".")
              .map((v) => parseInt(v));
          console.log(beginEnd);
          var ex = null;
          // matched.forEach((v, i) => {
          //   ex = /(\((.*?)\))/gi.exec(v)[2];
          // });
          console.log(ex);
          // var arr = matched[2].split(" ");
          // if (matched[0] && arr[1] == "in") {
          //   data = data.replaceAll(
          //     matched[0],
          //     `for(${arr[0]} of ${arr[arr.length - 1]})`
          //   );
          // }

          //variable in for loop
          let i =
            matched && /\((.*?)\)/gi.exec(matched[0])[1].trim().split(" ")[0];

          //for loop
          let newForloop = `for(let ${i} = ${beginEnd[0]}; ${i} <= ${beginEnd[1]}; ${i}++)`;

          //replace old loop into new for loop
          if (matched && !isNaN(beginEnd[0])) {
            data = data.replaceAll(matched[0], newForloop);
          }
        }
      } catch (err) {}
      try {
        let findArrayOf = /(arrayOf\((.*?)\))|(arrayOf \((.*?)\))/gi.exec(data);
        // findArrayOf[0] - array to new array findArray[2]
        data = data.replaceAll(`${findArrayOf[0]}`, `[${findArrayOf[2]}];`);
      } catch (err) {}
      if (keyword && keyword[0]) {
        throw new Error(`${keyword[0]} is not defined.`);
      }

      data = data
        .replace(/fun/g, "function")
        .replace(/val/g, "const")
        .replace(/println/g, "console.log")
        .replace(/print/g, "console.log")
        .concat("\nmain();");

      if (!document.querySelector("script#kotlinjs")) {
        let scriptKotlinJs = document.createElement("script");
        scriptKotlinJs.setAttribute("id", "kotlinjs");
        scriptKotlinJs.setAttribute("type", "text/javascript");
        scriptKotlinJs.innerHTML = data.trim();
        // console.log(data)
        document.body.appendChild(scriptKotlinJs);
      } else {
        document.querySelector("script#kotlinjs").innerHTML = data;
      }
    };
    [...document.querySelectorAll("script")]
      .filter((v) => v.hasAttribute("type"))
      .filter((v) => v.getAttribute("type") == "text/kotlin")
      .forEach((v) => {
        if (v.hasAttribute("src")) {
          var xhr = new XMLHttpRequest();
          xhr.onload = () => {
            kotlinToJs(xhr.responseText);
          };
          xhr.open("GET", v.getAttribute("src"), true);
          xhr.send(null);
        } else {
          kotlinToJs(v.innerHTML);
        }
      });
  });
})();

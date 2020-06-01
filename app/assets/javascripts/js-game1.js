// referenceClass
// mouseEvent
        } else if (word === "clientX" || word === "clientY") {
          code.attr('href', mouseEvent + word);
// element
        } else if (word === "blur") {
          code.attr('href', jsElement + word + event);
// jsConsole
        } else if (word === "console.log") {
          code.attr('href', jsConsole)
// prototype
        } else if (word === "prototype") {
          code.attr('href', prototype)
// array
        } else {
          code.attr('href', array + word);
        }

import '../intro';
function startIntro(){
    var intro = introJs();
      intro.setOptions({
        steps: [
          { 
            intro: "I will make a short presentation about I what have done at this project!"
          },
          { 
            intro: "Please don't be confused regarding russian language on site, JavaScript is international:)Landing isn't made by me, I have written only scripts!"
          },
          {
            element: '#step1',
            intro: "I set up opening modal windows on click"
          },
          {
            element: '#step2',
            intro: "I set up tabs working",
            position: 'right'
          },
          {
            element: '#step3',
            intro: "I created an object, that collect all forms dates and is sended on the server(check console)",
            position: 'left'
          },
          {
            element: '#timer',
            intro: "I created timer and implemented it on page",
            position: 'bottom'
          },
          {
            element: '#step5',
            intro: 'I have set up image zoom on click',
            position: 'top'
          }
        ]
      });

      intro.start();
  }

  export default startIntro;
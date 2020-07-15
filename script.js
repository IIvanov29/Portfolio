const navSlide = () => {
    const popbtn = document.querySelector('.popup-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //NavAnimation
    popbtn.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    

        //Animating Links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation= '';
            }
            else{
                link.style.animation = `LinksFade 0.5s ease forwards ${index/7 + 1.5}s`;
            }

        });
        //ChangePopupbtn
       popbtn.classList.toggle('toggle'); 
    });
}

const SendMessage = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('.emailinput').value))
    {
    document.querySelector('.emailinput').value=""
    document.querySelector('.nameinput').value=""
    alert("Message Sent Successfully!")
    }
    else{
        alert("Please fill in all the marked('*') fields")
    }
}
const ProgressCircle = (elementid, textcolor,bgcolor, fgcolor, fluidcolorfront,fluidcolorback, percentage) =>{
    var fm = new FluidMeter();
    fm.init({
      targetContainer: document.getElementById(elementid),
      fillPercentage: percentage,
      options: {
        fontFamily: "Teko",
        fontFillStyle: textcolor,
        drawPercentageSign: true,
        drawBubbles: true,
        size: 200,
        borderWidth: 3,
        backgroundColor: bgcolor,
        foregroundColor: fgcolor,
        foregroundFluidLayer: {
          fillStyle: fluidcolorfront,
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: fluidcolorback,
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });
}
navSlide();
ProgressCircle("fluid-meter-python","white", "#646464", "#ffd43b", "#306998", "#4b8bbe", 80);
ProgressCircle("fluid-meter-webdev", "white","#DAB92C", "#F16528", "#2EAADE", "#0B74B8", 70);
ProgressCircle("fluid-meter-linux", "white","#0d0208", "#003b00", "#008f11", "#00ff41",40);
ProgressCircle("fluid-meter-networking","black" ,"white", "black", "#15495D", "#C4122E",40);
ProgressCircle("fluid-meter-hardware", "white","#127BCA", "#C4122E", "#77B900", "#3A5900",70);


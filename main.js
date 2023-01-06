const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let store = document.querySelector(':root');
let hexName = document.querySelector('#hexValue')
let rgbValue = document.querySelector('#rgb')
let hexValue = document.querySelector('#hex')

hexColorChanger()

function hexColorChanger(){
    document.getElementById("button").addEventListener("click",()=>{
        let hexSyn = '#'
        for (let i = 0; i<6; i++){
            hexSyn += String(color[Math.floor(Math.random()*color.length)])
        }
        store.style.setProperty("--color",hexSyn)
        hexName.textContent = hexSyn
        hexName.style.setProperty("font-size","50px")


})}
function rgbColorChanger(){
    document.getElementById("button").addEventListener("click",()=>{
        let rgbSyn = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)})`
        store.style.setProperty("--color",rgbSyn)
        hexName.textContent = rgbSyn
        hexName.style.setProperty("font-size","40px")

})
}
let rgbFunct = document.getElementById("rgb").addEventListener("click",()=>{
    rgbValue.style.setProperty('color',"#185c6f");
    rgbValue.style.setProperty('cursor','pointer');
    rgbValue.style.setProperty('text-decoration-line', "overline");
    rgbValue.style.setProperty('top', "-10px");
    hexValue.style.setProperty('color',"rgb(37, 143, 147)");
    hexValue.style.setProperty('text-decoration-line', "none");
    hexValue.style.setProperty('top', "0px");
    rgbColorChanger()
})
document.getElementById("hex").addEventListener("click",()=>{
    hexValue.style.setProperty('color',"#185c6f");
    hexValue.style.setProperty('cursor','pointer');
    hexValue.style.setProperty('text-decoration-line', "overline");
    hexValue.style.setProperty('top', "-10px");
    rgbValue.style.setProperty('color',"rgb(37, 143, 147)");
    rgbValue.style.setProperty('text-decoration-line', "none");
    rgbValue.style.setProperty('top', "0px");
    hexColorChanger()
})

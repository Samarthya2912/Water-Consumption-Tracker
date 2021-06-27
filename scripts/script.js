const glasses = document.querySelectorAll(".glass");
const air = document.querySelector(".bucket .air");
const water = document.querySelector(".bucket .water");

glasses.forEach(glass=>{
    glass.addEventListener('click', function(){
        console.log('clicked', this);
        analyseConsumption(this);
    });
})

function analyseConsumption(lastGlass){
    let i = -1;

    glasses.forEach(glass=>{
        glass.classList.remove("active");
    })

    while(glasses[i] != lastGlass){
        i++;
        console.log(i);
        glasses[i].classList.add("active");
    }

    let glassesConsumed = i + 1;

    let percentage_water = (glassesConsumed*250)/20;
    let percentage_air = 100 - percentage_water;
    let litres_remaining = 2 - 0.02*percentage_water;

    air.style.height = percentage_air + "%";
    water.style.height = percentage_water + "%";
    water.textContent = percentage_water + "%";
    air.querySelector(".measure").textContent = litres_remaining + "L";
}

document.querySelector("button").addEventListener('click', ()=>{
    glasses.forEach(glass=>{
        glass.classList.remove("active");
    })

    air.style.height = 100 + "%";
    water.style.height = 0 + "%";
    water.textContent = 0 + "%";
    air.querySelector(".measure").textContent = 2 + "L";
})




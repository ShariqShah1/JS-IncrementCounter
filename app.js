const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
counter.innerHTML=0;


    function updateCounter() {
        const targetCount = +counter.getAttribute('data-target');
        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;
        if (startingCount < targetCount) {

            counter.innerHTML = `${startingCount + incr}`;
           setTimeout(updateCounter,10)
        }

    }
updateCounter();
})
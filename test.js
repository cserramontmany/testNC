// filterNumbersFromArray
function filterNumbersFromArray(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if(typeof arr[i] !== 'number') {
            arr.splice(i, 1);
        }  
    }
}

var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
// At this point, arr should have been modified in place
// and contain only 1 and 2.
for (let num of arr){
    console.log(num);
}

// filterActiveElements
const result = '{"data":[{"title":"First title","subtitle":"First subtitle","isActive":true},{"title":"Second title","subtitle":"Second subtitle","isActive":false},{"title":"Fourth title","subtitle":"Fourth subtitle","isActive":true},{"title":"Fifth title","subtitle":"Fifth subtitle","isActive":true},{"title":"Sixth title","subtitle":"Sixth subtitle","isActive":false}]}';

const filterActiveElements = () => {
    const parsedRes = JSON.parse(result);
    return parsedRes.data.filter(elem => {
        return elem.isActive;
    })
};

// Call the function here
filterActiveElements();

// fiveStars 
function setup() {
    const stars = [...document.getElementsByTagName('span')];

    stars.forEach((clickedStar,clickedIndex) => {
        clickedStar.addEventListener('click', ()=> {
            stars.forEach((star,index) =>{
                if(index <= clickedIndex){
                    star.classList.add("active");
                } else {
                    star.classList.remove("active");
                }
            })
        });
    })
}





      
// Example case. -------------------------
document.body.innerHTML = `
<div id='rating'>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
</div>`;

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);

document.getElementsByTagName("span")[1].click();
console.log(document.body.innerHTML);
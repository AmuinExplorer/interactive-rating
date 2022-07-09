let rating = 0;

function rate(e, btns) {
    const rateVal = e.children[0];
    rating = parseInt(rateVal.value)

    const btn = document.querySelectorAll('.btn')

    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.add('bg-MediumGrey');
        btn[i].classList.remove('bg-slate-700');
    }

    const idBtn = document.querySelector(`#${btns}`);
    idBtn.classList.add('bg-slate-700');
}

function changeText() {
const main = document.querySelector('.main');
const div = document.createElement('div');
const ratingSection = document.querySelector('.ratingSection');
ratingSection.classList.add('hidden')
const items = `
<div class="flex flex-col p-5">
    <!-- Image -->
    <div class="grid items-center justify-center">
        <div>
          <img src="images/illustration-thank-you.svg" alt="">
        </div>
    </div>
    <!-- end -->
    <!-- ratings -->
    <div class="grid items-center justify-center my-10">
        <p class="w-50 px-4 py-1 bg-slate-700 text-center rounded-full text-Orange">You selected ${rating} out of 5</p>
    </div>
    <!-- end -->
    <!-- Thank you -->
    <div>
        <h1 class="text-center text-gray-200 text-3xl font-['Poppins'] font-bold">Thank you</h1>
    </div>
    <!-- end -->
    <!-- Texts -->
    <div>
        <p class="text-center py-3 text-LightGrey font-['Arial']">
          We appreciate you taking the time to give a rating. If you 
          ever need more support, don't hesitate to get in touch!
        </p>
    </div>
    <!-- end -->
</div>
`;
div.innerHTML = items;
main.append(div);
}
// $(window).on('load', function() {

// })

jQuery(document).ready(function () {
   //----Format Webp---------
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }
   });

   let dateSpan = $('#date, #date2')
   const monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const date = new Date();
   let day = date.getDate();
   let year = date.getFullYear();
   let months = date.getMonth();

   monthsAll.map((m, i) => (months === i) ? months = m : null)

   const today = `${months} ${day}, ${year}`

   dateSpan.html(today);

   const body = $('.survey__body');
   const form = $('.form');

   data = {
      email: '',
      step1: '',
      step2: '',
      step3: '',
      step4: '',
      step5: '',
      step6: '',
      step7: '',
   }

//-------------------ALL STEPS--------------------------
   const step_1 = `
   <div class="survey__step-wrapper step step_1">
      <h1 class="survey-text">How often do you shop online?</h1>
      <form action="" class="survey-form">
         <div class="survey-form__wrapper">

            <label for="radio1" class='survey-form__label input' >
            <input type="radio" name="step_1" id="radio1" data-value='Daily' required>
               <span>Daily</span>
            </label>
            <hr>

            <label for="radio2" class='survey-form__label'>
            <input type="radio" name="step_1" id="radio2" data-value='Once in 2-3 days'>
               <span>Once in 2-3 days</span>
            </label>

            <label for="radio3" class='survey-form__label'>
            <input type="radio" name="step_1" id="radio3" data-value='Weekly'>
               <span>Weekly</span>
            </label>

            <label for="radio4" class='survey-form__label'>
            <input type="radio" name="step_1" id="radio4" data-value='Monthly'>
               <span>Monthly</span>
            </label>

            <label for="radio5" class='survey-form__label'>
            <input type="radio" name="step_1" id="radio5" data-value='Once in 2-3 months'>
               <span>Once in 2-3 months</span>
            </label>
            
            <label for="radio6" class='survey-form__label'>
            <input type="radio" name="step_1" id="radio6" data-value="When I'm free">
               <span>When I'm free</span>
            </label>

         </div>
         <button class="survey-form__button" id='surveyButton'>Next</button>
      </form>
   </div>
   `
 
   const step_2 = `
   <div class="survey__step-wrapper step step_2">
      <h1 class="survey-text">What types of products do you typically buy online?</h1>
      <form action="" class="survey-form2">
         <div class="survey-form__wrapper">

            <label for="radio1" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio1" data-value='Electronics' required>
               <span>Electronics</span>
            </label>

            <label for="radio2" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio2"  data-value='Smart devices'>
               <span>Smart devices</span>
            </label>

            <label for="radio3" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio3"  data-value='Home/kitchen appliances'>
               <span>Home/kitchen appliances</span>
            </label>

            <label for="radio4" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio4"  data-value='Health and beauty'>
               <span>Health and beauty</span>
            </label>

            <label for="radio5" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio5"  data-value='Clothing and accessories'>
               <span>Clothing and accessories</span>
            </label>

            <label for="radio6" class='survey-form__label'>
               <input type="radio" name="step_2" id="radio6"  data-value='Food and grocery'>
               <span>Food and grocery</span>
            </label>

            <label for="radio7" class='survey-form2__label-other' id='oteherRadio'>
               <input type="radio" name="step_2" id="radio7" data-value='Other'>
               <span>Other (please specify) </span>
            </label>

            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form2__button2" id='surveyButton'>Next</button>
      </form>
   </div>
`

   const step_4 = `
   <div class="survey__step-wrapper step step_4">
      <h1 class="survey-text">What attracts you to buy in this online store?</h1>
      <form action="" class="survey-form4">
         <div class="survey-form__wrapper">
            <label for="radio1" class='survey-form__label' data-value='Good quality'>
               <input type="radio" name="step_4" id="radio1">
               <span>Good quality</span>
            </label>
            <label for="radio2" class='survey-form__label' data-value='Fast shipping'>
               <input type="radio" name="step_4" id="radio2">
               <span>Fast shipping</span>
            </label>
            <label for="radio3" class='survey-form__label' data-value='Regular sales'>
               <input type="radio" name="step_4" id="radio3">
               <span>Regular sales</span>
            </label>
            <label for="radio4" class='survey-form__label' data-value='Loyalty programs'>
               <input type="radio" name="step_4" id="radio4">
               <span>Loyalty programs</span>
            </label>
            <label for="radio5" class='survey-form__label' data-value='Availability of goods in stock'>
               <input type="radio" name="step_4" id="radio5">
               <span>Availability of goods in stock</span>
            </label>
            <label for="radio6" class='survey-form__label' data-value='Vouchers'>
               <input type="radio" name="step_4" id="radio6">
               <span>Vouchers</span>
            </label>
            <label for="radio7" class='survey-form4__label-other' id='oteherRadio' data-value='Other (please specify)' >
               <input type="radio" name="step_4" id="radio7">
               <span>Other (please specify) </span>
            </label>
            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form4__button4" id='surveyButton'>Next</button>
      </form>
   </div>
   `

   const step_5 = `
   <div class="survey__step-wrapper step step_5">
      <h1 class="survey-text">How much do you spend on online shopping monthly?</h1>
      <form action="" class="survey-form5">
         <div class="survey-form__wrapper">
            <label for="radio1" class='survey-form__label' data-value='Less than 100 USD'>
               <input type="radio" name="step_5" id="radio1">
               <span>Less than 100 USD</span>
            </label>
            <label for="radio2" class='survey-form__label' data-value='$100 – $250'>
               <input type="radio" name="step_5" id="radio2">
               <span>$100 – $250</span>
            </label>
            <label for="radio3" class='survey-form__label' data-value='$250 – $500'>
               <input type="radio" name="step_5" id="radio3">
               <span>$250 – $500</span>
            </label>
            <label for="radio4" class='survey-form__label' data-value='$500 – $1000'>
               <input type="radio" name="step_5" id="radio4">
               <span>$500 – $1000</span>
            </label>
            <label for="radio5" class='survey-form__label' data-value='$1000 - $2000'>
               <input type="radio" name="step_5" id="radio5">
               <span>$1000 - $2000</span>
            </label>
            <label for="radio6" class='survey-form__label' data-value='More than 2000 USD'>
               <input type="radio" name="step_5" id="radio6">
               <span>More than 2000 USD </span>
            </label>
            <label for="radio7" class='survey-form5__label-other' id='oteherRadio' data-value='Other (please specify)' >
               <input type="radio" name="step_5" id="radio7">
               <span>Other (please specify) </span>
            </label>
            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form5__button5" id='surveyButton'>Next</button>
      </form>
   </div>
   `

   const step_6 = `
   <div class="survey__step-wrapper step step_6">
      <h1 class="survey-text">Which payment method do you prefer for online shopping? </h1>
      <form action="" class="survey-form6">
         <div class="survey-form__wrapper">
            <label for="radio1" class='survey-form__label' data-value='Paypal'>
               <input type="radio" name="step_6" id="radio1">
               <span>Paypal</span>
            </label>
            <label for="radio2" class='survey-form__label' data-value='Google Pay'>
               <input type="radio" name="step_6" id="radio2">
               <span>Google Pay</span>
            </label>
            <label for="radio3" class='survey-form__label' data-value='American Express'>
               <input type="radio" name="step_6" id="radio3">
               <span>American Express</span>
            </label>
            <label for="radio4" class='survey-form__label' data-value='Apple Pay'>
               <input type="radio" name="step_6" id="radio4">
               <span>Apple Pay</span>
            </label>
            <label for="radio5" class='survey-form__label' data-value='Masterpass'>
               <input type="radio" name="step_6" id="radio5">
               <span>Masterpass</span>
            </label>
            <label for="radio6" class='survey-form__label' data-value='Visa Checkout'>
               <input type="radio" name="step_6" id="radio6">
               <span>Visa Checkout</span>
            </label>
            <label for="radio7" class='survey-form6__label-other' id='oteherRadio' data-value='Other (please specify)' >
               <input type="radio" name="step_6" id="radio7">
               <span>Other (please specify) </span>
            </label>
            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form6__button6" id='surveyButton'>Next</button>
      </form>
   </div>
   `

   const step_7 = `
   <div class="survey__step-wrapper step step_7">
      <h1 class="survey-text">Which delivery service do you prefer for online shopping?</h1>
      <form action="" class="survey-form7">
         <div class="survey-form__wrapper">
            <label for="radio1" class='survey-form__label' data-value='Shopping center delivery service'>
               <input type="radio" name="step_7" id="radio1">
               <span>Shopping center delivery service</span>
            </label>
            <label for="radio2" class='survey-form__label' data-value='FedEx'>
               <input type="radio" name="step_7" id="radio2">
               <span>FedEx</span>
            </label>
            <label for="radio3" class='survey-form__label' data-value='UPS'>
               <input type="radio" name="step_7" id="radio3">
               <span>UPS</span>
            </label>
            <label for="radio4" class='survey-form__label' data-value='XPO'>
               <input type="radio" name="step_7" id="radio4">
               <span>XPO</span>
            </label>
            <label for="radio5" class='survey-form__label' data-value='USPS'>
               <input type="radio" name="step_7" id="radio5">
               <span>USPS</span>
            </label>
            <label for="radio6" class='survey-form__label' data-value='Deliv'>
               <input type="radio" name="step_7" id="radio6">
               <span>Deliv</span>
            </label>
            <label for="radio7" class='survey-form7__label-other' id='oteherRadio' data-value='Other (please specify)' >
               <input type="radio" name="step_7" id="radio7">
               <span>Other (please specify) </span>
            </label>
            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form7__button7" id='surveyButton'>Next</button>
      </form>
   </div>
   `

   const step_8 = `
   <div class="survey__step-wrapper step step_8">
      <h1 class="survey-text">Congratulations, the form has been sent for processing.</h1>
   </div>
   `
   //-------------------END------------------

   // --------------- 3 STEPS --------------
   const step_3_1 = `
   <div class="survey__step-wrapper step step_3">
      <h1 class="survey-text">What is the best website to buy from?</h1>
      <form action="" class="survey-form3">
         <div class="survey-form__wrapper">

            <label for="radio1" class='survey-form__label'>
            <input type="radio" name="step_3" id="radio1" data-value='BestBuy'>
               <span>BestBuy</span>
            </label>

            <label for="radio2" class='survey-form__label'>
            <input type="radio" name="step_3" id="radio2" data-value='Ebay'>
               <span>Ebay</span>
            </label>

            <label for="radio3" class='survey-form__label'
            <input type="radio" name="step_3" id="radio3" data-value='Amazon'>
               <span>Amazon</span>
            </label>

            <label for="radio4" class='survey-form__label'>
            <input type="radio" name="step_3" id="radio4" data-value='TigerDirect'>
               <span>TigerDirect</span>
            </label>

            <label for="radio5" class='survey-form__label'>
            <input type="radio" name="step_3" id="radio5" data-value='NewEgg'>
               <span>NewEgg</span>
            </label>

            <label for="radio6" class='survey-form__label'>
            <input type="radio" name="step_3" id="radio6" data-value='Walmart'>
               <span>Walmart</span>
            </label>

            <label for="radio7" class='survey-form3__label-other' id='oteherRadio'>
            <input type="radio" name="step_3" id="radio7" data-value='Other (please specify)'>
               <span>Other (please specify) </span>
            </label>

            <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
         </div>
         <button class="survey-form3__button3" id='surveyButton'>Next</button>
      </form>
   </div>
   `
   // const step_3_2 = () => `
   // <div class="survey__step-wrapper step step_3">
   //    <h1 class="survey-text">What is the best website to buy from?11111111111111111111</h1>
   //    <form action="" class="survey-form">
   //       <div class="survey-form__wrapper">
   //          <label for="radio1" class='survey-form__label' data-value='Amazon'>
   //             <input type="radio" name="step_3" id="radio1">
   //             <span>Amazon</span>
   //          </label>
   //          <label for="radio2" class='survey-form__label' data-value='Ikea'>
   //             <input type="radio" name="step_3" id="radio2">
   //             <span>​Ikea</span>
   //          </label>
   //          <label for="radio3" class='survey-form__label' data-value='Target'>
   //             <input type="radio" name="step_3" id="radio3">
   //             <span>Target</span>
   //          </label>
   //          <label for="radio4" class='survey-form__label' data-value='Best Buy'>
   //             <input type="radio" name="step_3" id="radio4">
   //             <span>Best Buy</span>
   //          </label>
   //          <label for="radio5" class='survey-form__label' data-value='P.C. Richard & Son'>
   //             <input type="radio" name="step_3" id="radio5">
   //             <span>P.C. Richard & Son</span>
   //          </label>
   //          <label for="radio6" class='survey-form__label' data-value='The Home Depot'>
   //             <input type="radio" name="step_3" id="radio6">
   //             <span>The Home Depot</span>
   //          </label>
   //          <label for="radio7" class='survey-form__label-other' id='oteherRadio' data-value='Other (please specify)' >
   //             <input type="radio" name="step_3" id="radio7">
   //             <span>Other (please specify) </span>
   //          </label>
   //          <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
   //       </div>
   //       <button class="survey-form__button" id='surveyButton'>Next</button>
   //    </form>
   // </div>
   // `

   // const step_3_3 = () => `
   // <div class="survey__step-wrapper step step_3">
   //    <h1 class="survey-text">What is the best website to buy from?</h1>
   //    <form action="" class="survey-form">
   //       <div class="survey-form__wrapper">
   //          <label for="radio1" class='survey-form__label' data-value='Home Depot'>
   //             <input type="radio" name="step_3" id="radio1">
   //             <span>Home Depot</span>
   //          </label>
   //          <label for="radio2" class='survey-form__label' data-value='Lowe's'>
   //             <input type="radio" name="step_3" id="radio2">
   //             <span>Lowe's</span>
   //          </label>
   //          <label for="radio3" class='survey-form__label' data-value='Wayfair'>
   //             <input type="radio" name="step_3" id="radio3">
   //             <span>Wayfair</span>
   //          </label>
   //          <label for="radio4" class='survey-form__label' data-value='Best Buy'>
   //             <input type="radio" name="step_3" id="radio4">
   //             <span>Best Buy</span>
   //          </label>
   //          <label for="radio5" class='survey-form__label' data-value='Costco'>
   //             <input type="radio" name="step_3" id="radio5">
   //             <span>Costco</span>
   //          </label>
   //          <label for="radio6" class='survey-form__label' data-value='AJ Madison'>
   //             <input type="radio" name="step_3" id="radio6">
   //             <span>AJ Madison</span>
   //          </label>
   //          <label for="radio7" class='survey-form__label-other' id='oteherRadio' data-value='Other (please specify)' >
   //             <input type="radio" name="step_3" id="radio7">
   //             <span>Other (please specify) </span>
   //          </label>
   //          <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
   //       </div>
   //       <button class="survey-form__button" id='surveyButton'>Next</button>
   //    </form>
   // </div>
   // `

   // const step_3_4 = () => `
   // <div class="survey__step-wrapper step step_3">
   //    <h1 class="survey-text">What is the best website to buy from?</h1>
   //    <form action="" class="survey-form">
   //       <div class="survey-form__wrapper">
   //          <label for="radio1" class='survey-form__label' data-value='Sephora'>
   //             <input type="radio" name="step_3" id="radio1">
   //             <span>Sephora</span>
   //          </label>
   //          <label for="radio2" class='survey-form__label' data-value='Walgreens'>
   //             <input type="radio" name="step_3" id="radio2">
   //             <span>Walgreens</span>
   //          </label>
   //          <label for="radio3" class='survey-form__label' data-value='Clinique'>
   //             <input type="radio" name="step_3" id="radio3">
   //             <span>Clinique</span>
   //          </label>
   //          <label for="radio4" class='survey-form__label' data-value='CVS'>
   //             <input type="radio" name="step_3" id="radio4">
   //             <span>CVS</span>
   //          </label>
   //          <label for="radio5" class='survey-form__label' data-value='MAC'>
   //             <input type="radio" name="step_3" id="radio5">
   //             <span>MAC</span>
   //          </label>
   //          <label for="radio6" class='survey-form__label' data-value='Lancome'>
   //             <input type="radio" name="step_3" id="radio6">
   //             <span>Lancome</span>
   //          </label>
   //          <label for="radio7" class='survey-form__label-other' id='oteherRadio' data-value='Other (please specify)' >
   //             <input type="radio" name="step_3" id="radio7">
   //             <span>Other (please specify) </span>
   //          </label>
   //          <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
   //       </div>
   //       <button class="survey-form__button" id='surveyButton'>Next</button>
   //    </form>
   // </div>
   // `

   // const step_3_5 = () => `
   // <div class="survey__step-wrapper step step_3">
   //    <h1 class="survey-text">What is the best website to buy from?</h1>
   //    <form action="" class="survey-form">
   //       <div class="survey-form__wrapper">
   //          <label for="radio1" class='survey-form__label' data-value='GAP'>
   //             <input type="radio" name="step_3" id="radio1">
   //             <span>GAP</span>
   //          </label>
   //          <label for="radio2" class='survey-form__label' data-value='KOHL'S>
   //             <input type="radio" name="step_3" id="radio2">
   //             <span>KOHL'S</span>
   //          </label>
   //          <label for="radio3" class='survey-form__label' data-value='ASOS'>
   //             <input type="radio" name="step_3" id="radio3">
   //             <span>ASOS</span>
   //          </label>
   //          <label for="radio4" class='survey-form__label' data-value='6pm'>
   //             <input type="radio" name="step_3" id="radio4">
   //             <span>6pm</span>
   //          </label>
   //          <label for="radio5" class='survey-form__label' data-value='ZARA'>
   //             <input type="radio" name="step_3" id="radio5">
   //             <span>ZARA</span>
   //          </label>
   //          <label for="radio6" class='survey-form__label' data-value='H&M'>
   //             <input type="radio" name="step_3" id="radio6">
   //             <span>H&M</span>
   //          </label>
   //          <label for="radio7" class='survey-form__label-other' id='oteherRadio' data-value='ther (please specify)' >
   //             <input type="radio" name="step_3" id="radio7">
   //             <span>Other (please specify) </span>
   //          </label>
   //          <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
   //       </div>
   //       <button class="survey-form__button" id='surveyButton'>Next</button>
   //    </form>
   // </div>
   // `

   // const step_3_6 = () => `
   // <div class="survey__step-wrapper step step_3">
   //    <h1 class="survey-text">What is the best website to buy from?</h1>
   //    <form action="" class="survey-form">
   //       <div class="survey-form__wrapper">
   //          <label for="radio1" class='survey-form__label' data-value='GAP'>
   //             <input type="radio" name="step_3" id="radio1">
   //             <span>GAP</span>
   //          </label>
   //          <label for="radio2" class='survey-form__label' data-value='KOHL'S'>
   //             <input type="radio" name="step_3" id="radio2">
   //             <span>KOHL'S</span>
   //          </label>
   //          <label for="radio3" class='survey-form__label' data-value='ASOS'>
   //             <input type="radio" name="step_3" id="radio3">
   //             <span>ASOS</span>
   //          </label>
   //          <label for="radio4" class='survey-form__label' data-value='6pm'>
   //             <input type="radio" name="step_3" id="radio4">
   //             <span>6pm</span>
   //          </label>
   //          <label for="radio5" class='survey-form__label' data-value='ZARA'>
   //             <input type="radio" name="step_3" id="radio5">
   //             <span>ZARA</span>
   //          </label>
   //          <label for="radio6" class='survey-form__label' data-value='H&M'>
   //             <input type="radio" name="step_3" id="radio6">
   //             <span>H&M</span>
   //          </label>
   //          <label for="radio7" class='survey-form__label-other' id='oteherRadio' data-value='Other (please specify)' >
   //             <input type="radio" name="step_3" id="radio7">
   //             <span>Other (please specify) </span>
   //          </label>
   //          <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
   //       </div>
   //       <button class="survey-form__button" id='surveyButton'>Next</button>
   //    </form>
   // </div>
   // `
   //--------------END--------------

   function textaraeRadio() {
      const textarea = $('.survey-form2__textarea');
      $('#oteherRadio').on('click', () => {
         textarea.removeClass('hide')
      })
      $(".survey-form__label").on('click', () => {
         textarea.addClass('hide')
      })
   }

   const test = () => {

      if ($('form').hasClass('error')) {
         $('#error').text('This field is required.')
      }

      $('input[type=radio]').on('change', function () {
         addCheckInput();
         form.removeClass('error')
         $('#error').text('');
      })

      $('input[type=text]').on('change', function () {
         $('#error').text('');
      })

      const addCheckInput = function () {
         let allInputs = body.find('input:checked');
         $.each(allInputs, function (index, value) {
            if ($(this).attr('data-value') == 'Other') {
               $('input').addClass('show')
               $('input').attr('required', true)
               $('input').on('change', function () {
               // textareaValue()
               })
            } else {
               $('input').removeClass('show')
               $('input').removeAttr('required')
            }
         })
      }
   }

   const section = $("#section");

   function checkedRadio(step, key, class1, class2, stepClass1, stepClass2) {
      $.each($('input[type="radio"]'), function () {
         if ($(this).is(':checked')) {
            data[`${key}`] = $(this).next().text()
            body.html(step);
            body.removeClass(`${class1}`).addClass(`${class2}`)
            section.removeClass(`${stepClass1}`).addClass(`${stepClass2}`);
         }
      })
   }

   function changeSteps() {
      if (body.is('.previewStep')) {
         data.email = $('input[name="email"]').val();

         if (data.email.length !== 0) {
            body.html(step_1);
            section.addClass('step1');
            body.removeClass('previewStep').addClass('firstStep')
         } else if (data.email.length !== 0) {
            body.html(step_2);
            section.addClass('step2');
            body.removeClass('firstStep').addClass('secondStep')
         } else if (data.email.length !== 0) {
            body.html(step_3_1);
            section.addClass('step3');
            body.removeClass('secondStep').addClass('thirdStep')
         }
      } else if (body.is('.firstStep')) {
         checkedRadio(step_2, 'step1', 'firstStep', 'secondStep', 'step1', 'step2')
         textaraeRadio()
      } else if (body.is('.secondStep')){
         checkedRadio(step_3_1, 'step2', 'secondStep', 'thirdStep', 'step2', 'step3')
         textaraeRadio()
      } else if (body.is('.thirdStep')) {
         checkedRadio(step_4, 'step3', 'thirdStep', 'fourthStep', 'step3', 'step4')
         textaraeRadio()
      } else if (body.is('.fourthStep')) {
         checkedRadio(step_5, 'step4', 'fourthStep', 'fifthStep', 'step4', 'step5')
         textaraeRadio()
      } else if (body.is('.fifthStep')) {
         checkedRadio(step_6, 'step5', 'fifthStep', 'sixthStep', 'step5', 'step6')
         textaraeRadio()
      } else if (body.is('.sixthStep')) {
         checkedRadio(step_7, 'step6', 'sixthStep', 'seventhStep', 'step6', 'step7')
         textaraeRadio()
      } else if (body.is('.seventhStep')) {
         checkedRadio(step_8, 'step7', 'seventhStep', 'eighthStep', 'step6', 'step7')
      }
      submitForm()
   }

   body.on('click', 'button', function (e) {
      e.preventDefault();
      $('.form').addClass('error')
      changeSteps()
      test()
      console.log(data);
   })

   const submitForm = async () => {
      try {
         await $.ajax({
            url: 'http://localhost:8000/posts',
            type: 'POST',
            data: {
               email: data.email,
               step_1: data.step1,
               step_2: data.step2,
               step_3: data.step3,
               step_4: data.step4,
               step_5: data.step5,
               step_6: data.step6,
               step_7: data.step7,
            }
         })
      } catch (e) {
         console.log(e);
      }
   }

});

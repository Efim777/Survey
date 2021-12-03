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

   // const dateSpan = document.querySelector('#date');
   let dateSpan = $('#date, #date2')
   const monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const date = new Date();
   let day = date.getDate();
   let year = date.getFullYear();
   let months = date.getMonth();

   monthsAll.map((m, i) => (months === i) ? months = m : null)

   const today = `${months} ${day}, ${year}`

   // dateSpan.innerHTML = today;
   dateSpan.html(today);

   const body = $('.survey__body');

   data = {
      email: '',
      question_1: '',
      question_2: '',
   }

   const step_1 = `
   <h1 class="survey-text">How often do you shop online?</h1>
   <form action="" class="survey-form">
      <div class="survey-form__wrapper">

         <label for="radio1" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio1">
            <span>Daily</span>
         </label>
         <hr>

         <label for="radio2" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio2">
            <span>Once in 2-3 days</span>
         </label>

         <label for="radio3" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio3">
            <span>Weekly</span>
         </label>

         <label for="radio4" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio4">
            <span>Monthly</span>
         </label>

         <label for="radio5" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio5">
            <span>Once in 2-3 months</span>
         </label>

         <label for="radio6" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio6">
            <span>When I'm free</span>
         </label>

      </div>
      <button class="survey-form__button" id='surveyButton'>Next</button>
   </form>
   `
   $('.form__button').click(function(e) {
      $("#section").addClass('step1');
   })

   const step_2 = `
   <h1 class="survey-text">What types of products do you typically buy online?</h1>
   <form action="" class="survey-form2">
      <div class="survey-form__wrapper">
         <label for="radio1" class='survey-form__label' id="electronics">
            <input checked type="radio" name="radio1" id="radio1">
            <span>Electronics</span>
         </label>
         <label for="radio2" class='survey-form__label' id="smart">
            <input type="radio" name="radio1" id="radio2">
            <span>Smart devices</span>
         </label>
         <label for="radio3" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio3">
            <span>Home/kitchen appliances</span>
         </label>
         <label for="radio4" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio4">
            <span>Health and beauty</span>
         </label>
         <label for="radio5" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio5">
            <span>Clothing and accessories</span>
         </label>
         <label for="radio6" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio6">
            <span>Food and grocery</span>
         </label>
         <label for="radio7" class='survey-form2__label-other' id='oteherRadio' >
            <input type="radio" name="radio1" id="radio7">
            <span>Other (please specify) </span>
         </label>
         <textarea id='textarea' class='survey-form2__textarea hide' placeholder="Please us know more... "></textarea>
      </div>
      <button class="survey-form2__button2" id='surveyButton2'>Next</button>
   </form>
`

   body.on('click', '.survey-form__button', function (e) {
      $("#section").removeClass('step1').addClass('step2');
   })

   
   // body.on('click', '.survey-form2__label-other', function (e) {

   // })

   body.on('click', '.survey-form2__button2', function () {
      if ($('#electronics').is('.checkedRadio')) {
         console.log('111111111111');
         // $("#section").removeClass('step2').addClass('step3');
      }else if ($('#smart').is('.checkedRadio')) {
            console.log('55555555');
         }
      })



   

   const step_3 = `
   <style>
      <img src="../../img/musicbox.jpg" alt="">  
   </style>
   <h1 class="survey-text">What is the best website to buy from?</h1>
   <form action="" class="survey-form">
      <div class="survey-form__wrapper">
         <label for="radio1" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio1">
            <span>Electronics</span>
         </label>
         <label for="radio2" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio2">
            <span>Smart devices</span>
         </label>
         <label for="radio3" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio3">
            <span>Smart devices</span>
         </label>
         <label for="radio4" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio4">
            <span>Health and beauty</span>
         </label>
         <label for="radio5" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio5">
            <span>Clothing and accessories</span>
         </label>
         <label for="radio6" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio6">
            <span>Food and grocery</span>
         </label>
         <label for="radio7" class='survey-form__label-other' id='oteherRadio' >
            <input type="radio" name="radio1" id="radio7">
            <span>Other (please specify) </span>
         </label>
         <textarea id='textarea' class='survey-form__textarea hide' placeholder="Please us know more... "></textarea>
      </div>
      <button class="survey-form__button2" id='surveyButton'>Next</button>
   </form>
   `
   
   // body.html(step_2)
   function textaraeRadio() {
      const textarea = $('.survey-form2__textarea');
      $('#oteherRadio').on('click', () => {
         textarea.removeClass('hide')
      })
      $(".survey-form__label").on('click', () => {
         textarea.addClass('hide')
      })
   }


   function checkedRadio(step, key, class1, class2) {
      $.each($('input[type="radio"]'), function () {
         if ($(this).is(':checked')) {
            data[`${key}`] = $(this).next().text()
            body.html(step);
            body.removeClass(`${class1}`).addClass(`${class2}`)
         }
      })
   }

   function changeStep() {
      if (body.is('.previewStep')) {
         data.email = $('input[name="email"]').val();

         if (data.email.length !== 0) {
            body.html(step_1);
            body.removeClass('previewStep').addClass('firstStep')
         }
      } else if (body.is('.firstStep')) {
         checkedRadio(step_2, 'question_1', 'firstStep', 'secondStep')
         textaraeRadio()
      } else if (body.is('.secondStep')) {
         checkedRadio(step_3, 'question_2', 'secondStep', 'thirdStep')
      }
   }

   body.on('click', 'button', function (e) {
      e.preventDefault();
      changeStep()
      console.log(data);
   })

});

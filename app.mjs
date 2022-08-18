function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  let formContainer = document.querySelector(".form-content");
  let fName = document.querySelector(".fname");
  let password = document.querySelector(".password");
  let phone = document.querySelector(".phone");
  let eMail = document.querySelector(".email");
  let reactionText = document.querySelector(".reaction-text").childNodes[1];
  let reactionImage = document.querySelector(".reaction-image");
  let networkImg = document.querySelector(".network-icon");
  let numSuggestions = document.querySelector('#numPrefix')

  // Array for all number prefixes
  const phoneDetails = [
    {
      name: "MTN",
      numberPrefix: [
        '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0703', '0903', '0906', '0913'
      ],
      img: "img/icons/mtn.svg",
    },
    {
      name: "etisalat",
      numberPrefix: ['0809', '0817', '0818', '0908', '0909'],
      img: "img/icons/etisalat.svg",
    },
    {
      name: "glo",
      numberPrefix: ['0805', '0807', '0811', '0705', '0815', '0905'],
      img: "img/icons/glo.svg",
    },
    {
      name: "airtel",
      numberPrefix: ['0802', '0808', '0812', '0701', '0902', '0907', '0901'],
      img: "img/icons/airtel.svg",
    },
  ];

  formContainer.addEventListener("input", UIInteraction);

  // LOOP
  phoneDetails.forEach(el => {
    el.numberPrefix.forEach(cur => {
      const markup = `
    <option value="${cur}">
    `;
      numSuggestions.insertAdjacentHTML('beforeend', markup);
    })
  })

  function UIInteraction(event) {
    let target = event.target;

    // Code for
    if (target == fName) {
      let x = fName.value.toUpperCase();
      reactionText.innerHTML = `<p>Hi&#9995; <span style="color:red;">${x}</span>, You got a very nice name! What's your email address</p>`;
      reactionImage.src = "../img/illu/laugh.svg";
      if (x == "") {
        reactionText.innerHTML = `<p>Hi there!&#9995;  I'm Jess, Please fill the form so i can get to know you.</p>`;
        reactionImage.src = "../img/illu/eyes-opened.svg";
      }
    }
    if (target == eMail) {
      let x = eMail.value;
      reactionText.innerHTML = `<p>${x}</p>`;
      reactionImage.src = "../img/illu/eyes-opened.svg";
      if (x == "") {
        reactionText.innerHTML = `<p>Please type your email address</p>`;
        reactionImage.src = "../img/illu/eyes-opened.svg";
      }
    }
    if (target == password) {
      let x = password.value;
      reactionText.innerHTML = `<p>I promise not to look &#128526;</p>`;
      reactionImage.src = "../img/illu/eyes-closedbh.svg";
      if (x == "") {
        reactionText.innerHTML = `<p>Please type your password.</p>`;
        reactionImage.src = "../img/illu/eyes-opened.svg";
      }
    }
    if (target == phone) {
      let x = phone.value;
      reactionText.innerHTML = `<p>I would definately call &#128241;</p>`;
      reactionImage.src = "../img/illu/happy.svg";
      if (x == "") {
        reactionText.innerHTML = `<p>Please type your phone number.</p>`;
        reactionImage.src = "../img/illu/eyes-opened.svg";
      }

      // LOOP THROUGH THE MAIN ARRAY AND FIND MATCHES FOR EACH OF THE NUMBER
      // IN THE NUMPREFIX ARRAY
      phoneDetails.forEach((el) => {
        el.numberPrefix.forEach((num) => {
          // CHECK IF INPUT IS >= 4
          if (x.length >= 4) {
            if (num == x) {
              console.log(x);
              //CHECK IF NUMBER HAS BEEN TYPED BEFORE
              if (networkImg.classList.contains('added')) {
                console.log('added is here');
                networkImg.classList.remove('added')
              } else {
                // ADD IMAGE TO UI
                const markup = `
              <img src="${el.img}" class="present" alt="network logo">
              `;
                networkImg.insertAdjacentHTML("beforeend", markup);

                // add extra css classes
                phone.classList.add("phone-padding");
                networkImg.classList.add("bg-white");
                networkImg.classList.add("added");
              }

            }
            //IF INPUT VALUE IS != ANYTHING IN THE NUMPREFIX ARRAY
          } else {
            networkImg.innerHTML = "";
            phone.classList.remove("phone-padding");
            networkImg.classList.remove("bg-white");
            networkImg.classList.remove('added');
          }
        });
      });
    }
  }

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
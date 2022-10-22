let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")



function sending(){
    let obj ={
        ism:inp1.value,
        email:inp2.value,
        parol:inp3.value
    }
    localStorage.setItem("Name" , JSON.stringify(obj))
}

function loadData() {
    return new Promise((resolve, reject) => {
      // setTimeout не является частью решения
      // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
      setTimeout(resolve, 1500);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });
let input1 = document.querySelector(".inpu3")
let input2 = document.querySelector(".inpu2")

function etnrace(){
    let obj = JSON.parse(localStorage.getItem("Name"))
    console.log(obj);
    input1.value = obj.email
    input2.value = obj.parol
}
etnrace()

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
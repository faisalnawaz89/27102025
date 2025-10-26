// console.log(name)
// // var name = 'faisal'
// var abcd
// console.log(abcd)
// let abcd

// const {5:b} = [1,2,3,4,5,6]
// console.log(b) // [1, 3]

// for(let i=1; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }


// for (i = 1; i < 5; i++) {
//   (function(i_copy) {
//     setTimeout(() => {
//       console.log(i_copy);
//     }, 1000);
//   })(i);
// }

// for(var i = 1; i < 5; i++){
//     var j = i
//     setTimeout(()=>{
//         console.log(j);
//     },1000)
// }
// {
//     var i = 10;
// }   

// console.log(i)

// for (var i = 1; i < 5; i++) {

//         console.log(i); 

// }
// console.log(a);
// var a = 'Hosted';



// var x = function sayHello(){
//     console.log('Hosted');
// }

// sayHello()


// sayHello()
// var sayHello = () => {
//     console.log('Hoisted')
// }

// let a = '10';
// let b = 2;
// let x = b - a
// console.log(x)


// var returnFun = (sayHello)=>{
//     console.log(sayHello)
// }
// returnFun()
// console.log(a)
// var a = function myFun (){
//     console.log('Hi');
// }


// function a () {
//     function b(){
//         function c(){
//             function d(){
//                 console.log('abc');
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()

// console.log(0 == [])

// Promise.resolve()
//   .then(function a() {
//     Promise.resolve().then(function c() {
//         console.log('fun a > c')
//     });
//   })
//   .then(function b() {
//     Promise.resolve().then(function d() {
//         console.log('fun b > d')
//     });
// });

// const pause = (millis) =>
//   new Promise(resolve => setTimeout(resolve, millis));

// const start = Date.now();
// console.log('Start');

// pause(1000).then(() => {
//   const end = Date.now();
//   const secs = (end - start) ;
//   console.log('End:', secs);
// });

//1. Extract only value into the array
// let x = {
//     a:1,
//     b:2
// }
// const xarr = []
// for(let i in x){
//     console.log(xarr.push(i));
// }

//2. Reverse the string x, y

// let x = 'lasiaf'

// const reverseString = (str) => 
// str.split('').reverse().join('')

// console.log(reverseString(x));

// Return Object in both value

// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a);
//         return this
//     },
//     getB(){
//         console.log(this.a)
//     }
// }
// obj.getA().getB()


//.3 Write a code they block the execution

// for (i = 1; i > 0; i++){
//   console.log('infinite loop', i)
// }

// setTimeout(()=>{
//   console.log('delay after sec')
// },1000)

//4. destructruing of array

// const {a} = [10,'hello',15]
// console.log(2,a);

//API Data Fetch
        const COVID_API = fetch('https://api.rootnet.in/covid19-in/stats/')
        async function fetchData (){
            try {
                
                const response = await COVID_API
                const data = await response.json()
                console.log(data)
                for(i=0; i<data.data.regional.length; i++){
                    // console.log(data.data.regional[i].loc)
                    let Location = data.data.regional[i].loc
                    let CaseIndia = data.data.regional[i].confirmedCasesIndian
                    let Discharged = data.data.regional[i].discharged
                    let Deaths = data.data.regional[i].deaths
                    let TotalConfirmed = data.data.regional[i].totalConfirmed
                    let h2 = document.createElement('h2')
                    h2.innerHTML = `${Location}`
                    const ul = document.createElement('ul')
                    const li = document.createElement('li')
                    li.innerHTML = `Confirmed Cases in Indian: ${CaseIndia}`
                    const li_1 = document.createElement('li')
                    li_1.innerHTML = `Discharged: ${Discharged}`
                    const li_2 = document.createElement('li')
                    li_2.innerHTML = `Total Confirmed: ${TotalConfirmed}`
                    document.body.appendChild(h2)
                    h2.appendChild(ul)
                    ul.appendChild(li)
                    ul.appendChild(li_1)
                    ul.appendChild(li_2)
                    h2.addEventListener('click', (e)=>{
                        if(e.target.tagName === 'H2'){
                            h2.classList.toggle('active')
                        }
                    })
                }


            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

    // Dark Mode
    const button = document.getElementById('mode')
    const bodyMode = document.querySelector('body')
    button.addEventListener('click', (e)=>{
        bodyMode.classList.toggle('darkMode')
    },false)

    //Html javascript Accordion
    const accordionTab = document.querySelectorAll('.inner-accordion')
    for(let i=0; i<accordionTab.length; i++){
        accordionTab[i].addEventListener('click', function () {
            for(x=0; x<accordionTab.length; x++){
                if(accordionTab[x] == this){
                    accordionTab[x].classList.toggle('active')
                    // console.log(this);
                }else{
                    accordionTab[x].classList.remove('active')
                    //console.log(this);
                }
            }
        });
    }

    //Modal Show
    const modalBtn = document.getElementById('modalBtn')
    const modal = document.getElementById('modal')

    const modalBox = () => {
            const modalInner = document.createElement('p')
            modalInner.innerText = 'Modal PopUp Box'
            modal.appendChild(modalInner)
            const closeBtn = document.createElement('span')
            closeBtn.innerText = '\u00d7'
            modal.appendChild(closeBtn)
        }
        modalBox()
        
        function modalShow() {
            modal.classList.add('show')
        }

        function modalClose(){
            modal.classList.remove('show')
        }

        modalBtn.addEventListener('click', modalShow)
        document.querySelector('span').addEventListener('click', modalClose)

    //BG Color Change
    const generateColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    };
    const changeColor = function () {
        intevalID = setInterval(bgColorChange, 1000);
        function bgColorChange() {
        document.body.style.backgroundColor = generateColor();
        }
    };
    const stopBgColor = function () {
        clearInterval(intevalID);
    };
    document.querySelector('#start').addEventListener('click', changeColor);
    document.querySelector('#stop').addEventListener('click', stopBgColor);


    //Preloader 
    window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';

    setTimeout(function() {
        preloader.style.display = 'none';
        }, 500);
    });

    //Todo List
    const todo = document.getElementById('todo')
    const todoList = document.getElementById('todoList')
    const error = document.getElementById('error')


    function addTodo(){
        if(todo.value === ''){
            error.innerHTML = 'Plese enter your Task!'
        }else{
            const todoTask = document.createElement('div')
            todoTask.innerHTML = todo.value
            todoList.appendChild(todoTask)
            todoTask.setAttribute('class','mySticky')
            const span = document.createElement('span')
            span.innerHTML = '\u00d7'
            todoTask.appendChild(span)
            const dateStamp = document.createElement('i')
            dateStamp.innerHTML = new Date().toDateString()
            todoTask.appendChild(dateStamp)
            todo.value = ''
            saveDataToLocalStroge()
        }
    }

    todoList.addEventListener('click', (e)=>{
        if(e.target.tagName === 'DIV'){
            e.target.classList.toggle('taskDone')
            e.target.classList.toggle('bgChange')
            saveDataToLocalStroge()
        }else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
            saveDataToLocalStroge()
        }
    },false)

    function saveDataToLocalStroge(){
        localStorage.setItem('data', todoList.innerHTML)
    }

    function showDataFromLocalStroge(){
        todoList.innerHTML = localStorage.getItem('data')
    }
    showDataFromLocalStroge()

    //Video Play Pause
    const video = document.querySelector('video')
    const button = document.querySelector('button')


    button.addEventListener('click', (e)=>{
        
        if(e.target.className === 'play'){
            video.play()
            button.setAttribute('class','pause')
            button.innerText = 'Pause'
        }else if(e.target.className === 'pause'){
            video.pause()
            button.innerText = 'Play'
            button.setAttribute('class','play')
        }
    })


// this function is for underline the complete items
const lineThrough = (event) => {
    let id = event.target.id
    event.target.checked ? 
    $(`#txtTodo${id.replace(/[^0-9]/g,'')}`).addClass('txtline') : $(`#txtTodo${id.replace(/[^0-9]/g,'')}`).removeClass('txtline')
    Items()
}

// this function is the counter
const Items = () => {
    const item = $('#items')
    let itemNumber = item.text().replace(/[0-9]/g, $('.all-check-todo').not(":checked").length)
    item.text(itemNumber)
}

// this function delete the only item
const deleteOnly = (event) => {
    let idNumber = event.target.id.replace(/[^0-9]/g,'')
    $(`#form${idNumber}`).remove()
    Items();
}

// Change theme function
$('#sun').click(() =>{
     if($('#sun').attr('src') == './images/icon-sun.svg'){
        $('#sun').attr('src', './images/icon-moon.svg');
        $('.bg-header').addClass('light-bg');
        $('body').css('background-color', 'var(--Light-Grayish-Blue-light-theme)');
        $('.attribution').css('color', 'var(--Dark-Grayish-Blue)');
        $('.forms-container').addClass(`light-forms`);
        $('#menu').removeClass('interactive-menu');
        $('#menu').addClass('light-interactive-menu');
        $('.checkmark').addClass('checkmarkLight');
     }else{
        $('#sun').attr('src', './images/icon-sun.svg');
        $('.bg-header').removeClass('light-bg');
        $('body').css('background-color', 'var(--Very-Dark-Blue)');
        $('.attribution').css('color', 'white');
        $('.forms-container').removeClass(`light-forms`);
        $('#menu').removeClass('light-interactive-menu');
        $('#menu').addClass('interactive-menu');
        $('.checkmark').removeClass('checkmarkLight');
     }
})

// create a new Todo
$('#newTodo').submit((event) => {
    event.preventDefault()
    let idNumber = 1;
    while($('body').find(`#check-todo${idNumber}`).length == 1){
        idNumber = idNumber + 1;
    }
    let isMoon = $('#sun').attr('src') == './images/icon-moon.svg';
    let txtTodo = $('#txtNewTodo').val().trim()
    if(txtTodo != ''){
        $('#dragzone').prepend(`
        <div class= "forms-container ${isMoon ? "light-forms" : ""}" id="form${idNumber}" onclick="manageCheck()">
            <form>
                <label for="check-todo${idNumber}" class="check-todo"> 
                    <input type="checkbox" name="create-check-todo" class="all-check-todo" id="check-todo${idNumber}" onclick="lineThrough(event)">
                    <span class="checkmark ${isMoon ? "checkmarkLight" : ""}"></span>
                </label>
                <p class="txtInput" id='txtTodo${idNumber}'>${txtTodo}</p>
                <picture>
                    <img src='./images/icon-cross.svg' alt='X' class="todo-cross" id="clear-todo${idNumber}" onclick="deleteOnly(event)"/>
                </picture>
            </form>
        </div>
        `)
    }
    if(!$('#menu').hasClass('border-top-0')) $('#menu').addClass('border-top-0') 
    $('#txtNewTodo').val('')
    Items();
})

// clear all completed Todos 
$('#clear').click( () => {
    $('.all-check-todo').each( (index, element) => {
        if(element.checked){
            let idNumber = element.id.replace(/[^0-9]/g,'')
            $(`#form${idNumber}`).remove()
        }
    })
})

// view all todos
$('#all').click( () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if($(`#form${idNumber}`).hasClass(`d-none`)){
            let idNumber = element.id.replace(/[^0-9]/g,'')
            $(`#form${idNumber}`).removeClass('d-none')
        }
    })
    $('#all').addClass('active')
    $('#active').removeClass('active')
    $('#completed').removeClass('active')
})

// view just actived todos
$('#active').click( 
    () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if(element.checked){
            $(`#form${idNumber}`).addClass('d-none')
        }else{
            $(`#form${idNumber}`).removeClass('d-none')
        }
    })
    $('#all').removeClass('active')
    $('#active').addClass('active')
    $('#completed').removeClass('active')
})

// view just completed todos
$('#completed').click( () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if(element.checked == false){
            $(`#form${idNumber}`).addClass('d-none')
        }else{
            $(`#form${idNumber}`).removeClass('d-none')
        }
    })
    $('#all').removeClass('active')
    $('#active').removeClass('active')
    $('#completed').addClass('active')
})

// manage the todo change when completed or active are actived
const manageCheck = () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if(element.checked == false && $('#completed').hasClass('active')){
            $(`#form${idNumber}`).addClass('d-none')
        }else if(element.checked && $('#active').hasClass('active')){
            $(`#form${idNumber}`).addClass('d-none')
        }
    })
}

// Drag and Drop
$('#dragzone').sortable({
    cursor: 'move'
})

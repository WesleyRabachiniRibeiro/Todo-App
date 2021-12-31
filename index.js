$('#sun').click(() =>{
     if($('#sun').attr('src') == './images/icon-sun.svg'){
        $('#sun').attr('src', './images/icon-moon.svg');
        $('.bg-header').css('background', 'url(./images/bg-desktop-light.jpg) no-repeat center');
        $('.bg-header').css('background-size', 'cover');
        $('body').css('background-color', 'var(--Light-Grayish-Blue-light-theme)');
        $('.attribution').css('color', 'var(--Dark-Grayish-Blue)');
        $('.forms-container').addClass(`light-forms`);
        $('#menu').removeClass('interactive-menu');
        $('#menu').addClass('light-interactive-menu');
        $('.checkmark').addClass('checkmarkLight');
     }else{
        $('#sun').attr('src', './images/icon-sun.svg');
        $('.bg-header').css('background', 'url(./images/bg-desktop-dark.jpg) no-repeat center');
        $('.bg-header').css('background-size', 'cover');
        $('body').css('background-color', 'var(--Very-Dark-Blue)');
        $('.attribution').css('color', 'white');
        $('.forms-container').removeClass(`light-forms`);
        $('#menu').removeClass('light-interactive-menu');
        $('#menu').addClass('interactive-menu');
        $('.checkmark').removeClass('checkmarkLight');
     }
})

$('#newTodo').submit((event) => {
    event.preventDefault()
    let idNumber = 1;
    while($('body').find(`#check-todo${idNumber}`).length == 1){
        idNumber = idNumber + 1;
    }
    let isMoon = $('#sun').attr('src') == './images/icon-moon.svg';
    let isChecked = false;
    if($('#check-todo').is(':checked')){
        isChecked = true;
    }
    let txtTodo = $('#txtNewTodo').val().trim()
    if(txtTodo != ''){
        $('#container').prepend(`
        <div class= "forms-container ${isMoon ? "light-forms" : ""}" id="form${idNumber}">
            <form>
                <label for="check-todo${idNumber}" class="check-todo"> 
                    <input type="checkbox" name="create-check-todo" class="all-check-todo" id="check-todo${idNumber}" ${isChecked ? 'checked' : ""} onclick="lineThrough(event)">
                    <span class="checkmark ${isMoon ? "checkmarkLight" : ""}"></span>
                </label>
                <input type="text" name="create-todo" class="txtInput ${isChecked ? 'txtline' : ""}" id='txtTodo${idNumber}' placeholder="Create a new Todo..." value="${txtTodo}" readonly>
            </form>
        </div>
        `)
    }
    Items();
})

const lineThrough = (event) => {
    let id = event.target.id
    event.target.checked ? 
    $(`#txtTodo${id.replace(/[^0-9]/g,'')}`).addClass('txtline') : $(`#txtTodo${id.replace(/[^0-9]/g,'')}`).removeClass('txtline')
    Items()
}

const Items = () => {
    const item = $('#items')
    let itemNumber = item.text().replace(/[0-9]/g, $('.all-check-todo').not(":checked").length)
    item.text(itemNumber)
}

$('#clear').click( () => {
    $('.all-check-todo').each( (index, element) => {
        if(element.checked){
            let idNumber = element.id.replace(/[^0-9]/g,'')
            $(`#form${idNumber}`).remove()
        }
    })
})

$('#all').click( () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if($(`#form${idNumber}`).hasClass(`d-none`)){
            let idNumber = element.id.replace(/[^0-9]/g,'')
            $(`#form${idNumber}`).removeClass('d-none')
        }
        $('#all').addClass('active')
        $('#active').removeClass('active')
        $('#completed').removeClass('active')
    })
})

$('#active').click( () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if(element.checked){
            $(`#form${idNumber}`).addClass('d-none')
        }else{
            $(`#form${idNumber}`).removeClass('d-none')
        }
        $('#all').removeClass('active')
        $('#active').addClass('active')
        $('#completed').removeClass('active')
    })
})

$('#completed').click( () => {
    $('.all-check-todo').each( (index, element) => {
        let idNumber = element.id.replace(/[^0-9]/g,'')
        if(element.checked == false){
            $(`#form${idNumber}`).addClass('d-none')
        }else{
            $(`#form${idNumber}`).removeClass('d-none')
        }
        $('#all').removeClass('active')
        $('#active').removeClass('active')
        $('#completed').addClass('active')
    })
})

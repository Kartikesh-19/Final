let arr = [];
item = 0;

    $('#save').click(function () {
        let dish = $('#dish').val();
        let recipe = $('#recipe').val();
        let ingradient = $('#ingradient').val();
        let file = $('#file').val();
        if (dish != "" && recipe != "" && ingradient != "" && file != "") {
            
            
            
            obj = {
                dish: dish,
                recipe: recipe,
            ingradient: ingradient,
            file: file
            
        }
        
        arr.push(obj);
        add();
    }
    else {
        alert('**Please fill all the details');
    }
    
    $('#dish').val("");
    $('#recipe').val("");
    $('#ingradient').val("");
    $('#file').val("");
    
    


    add();

    
    
})

function add() {
    $('tbody').empty();
    for (i = 0; i < arr.length; i++) {
        
        let tr = "";
        tr = `<tr><td>${arr[i].dish}</td><td>${arr[i].recipe}</td>
        <td>${arr[i].ingradient}</td><td>${arr[i].file}</td>
        <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button>
        </td><td><button class="btn btn-success" onclick="Edit(${i})" id="edit">Edit</button></td>
        <td><button class="btn btn-primary" data-toggle="modal" data-target="#new">Add_Ingradient</button></td></tr>`

        $('#table tbody').append(tr);
    }
    local();
}
console.log(arr);
function local() {
    var obj1 = JSON.stringify(arr)
    localStorage.setItem('arr', obj1)
    localStorage.getItem(JSON.parse(obj1))
}




function Delete(i) {
    
    arr.splice(i, 1);
    add();
    
    
}

function Edit(item) {
    
    
    $('#dish').val(arr[item].dish);
    $('#recipe').val(arr[item].dish);
    $('#ingradient').val(arr[item].dish);
    $('#file').val(arr[item].file);
    
    
    $('#edit').on('click', function (e) {
        $('.update1').show(e);
        $("#myModal").modal({ show: true });
        
        
    });
    
}
function update() {
    
    var data = {};
    item = 0;
    data['dish'] = $('#dish').val();
    data['recipe'] = $('#recipe').val();
    data['ingradient'] = $('#ingradient').val();
    data['file'] = $('#file').val();
    arr.splice(item, 1, data);
    add();
    
    $('#dish').val("");
    $('#recipe').val("");
    $('#ingradient').val("");
    $('#file').val("");
    
    
    
}



$('#search').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    $('#table tr').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    
})

let temp = [];
$('#push').click(function () {
    
    let name = $('#name').val();
    let get = $('#get').val();
    let select = $('#select').val();
    console.log(get);
    
    
    rat = {
        name: name,
        get: get,
        select: select
    }
    
    temp.push(rat);
    call();
    $('#name').val("");
    $('#get').val("");
    $('#select').val("");
    
})

function call() {
    $('tbody').empty();
    
    for (j = 0; j < temp.length; j++) {
        var p = "";
        p = `<tr><td>${temp[j].name}</td><td>${temp[j].get}</td><td>${temp[j].select}</td>
        <td><button class="btn btn-success" id="find" onclick="edit1(${j})" data-toggle="modal" data-target="#new">Edit</button></td>
        <td><button class="btn btn-danger" onclick="Delete(${j})" >Delete</button></td></tr>`
        
        $('#tbl tbody').append(p);
        
        
        
    }
    demo();
}
function demo() {
    var render = JSON.stringify(temp);
    localStorage.setItem('temp', render);
    localStorage.getItem(JSON.parse(render))
    console.log(render);
}

function Delete(j) {
    temp.splice(j, 1)
    call();
}
function edit1(j) {
    $('#name').val(temp[j].name);
    $('#get').val(temp[j].get);
    $('#select').val(temp[j].select);
    
}

function update1(j) {
    j = 0;
    let a = {}
    debugger;
    a['name'] = $('#name').val();
    a['get'] = $('#get').val();
    a['select'] = $('#select').val();
    debugger;
    temp.splice(j, 1, a);
    call();
    console.log(temp);
    $('#name').val("");
    $('#get').val("");
    $('#select').val("");
    
}

function final()
{
   debugger;
   add();
   debugger;
   call();
}
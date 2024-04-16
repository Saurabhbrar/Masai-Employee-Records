// fill in javascript code here
let myform = document.querySelector('form')
let empname = document.getElementById('name')
let empid = document.getElementById('employeeID')
let depet = document.getElementById('department')
let exper = document.getElementById('exp')
let mail = document.getElementById('email')
let mobile = document.getElementById('mbl')
let alldata = []
let tbody = document.querySelector('tbody')

myform.addEventListener('submit',function(s)
{
    s.preventDefault()
    let data = {}
    data.input1 = empname.value
    data.input2 = empid.value
    data.input3 = depet.value
    data.input4 = exper.value
    data.input5 = mail.value
    data.input6 = mobile.value
    if(data.input4>+5)
    {
        data.input7 = "Senior"
    }
    else if(data.input4<=1)
    {
        data.input7 = "Fresher"
    }
    else
    {
        data.input7 = "Junior"

    }
    

    alldata.push(data)
    //console.log(alldata)
    tbody.innerHTML = null
    alldata.map((ele)=>
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let td8 = document.createElement('button')

        td1.innerText = ele.input1
        td2.innerText = ele.input2
        td3.innerText = ele.input3
        td4.innerText = ele.input4
        td5.innerText = ele.input5
        td6.innerText = ele.input6
        td7.innerText = ele.input7
        td8.innerText = "Delete"

        td8.addEventListener('click', function() 
        {
            deleteRow(this);
        })

        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row)

    })
})
function deleteRow(button) 
{
    let row = button.closest('tr')
    let index = Array.from(row.parentNode.children).indexOf(row)
    alldata.splice(index, 1)
    row.remove()
}
const ajaxTxtBtn = document.getElementById('ajax-text-btn')
const ajaxJsonBtn = document.getElementById('ajax-json-btn')
const ajaxPhpBtn = document.getElementById('ajax-php-btn')
const xhr = new XMLHttpRequest()

const loadtxt = () => {
    xhr.open('GET', 'lorem.txt', true)
    xhr.onload = () => {
        if (xhr.status === 200){
            const textOutput = xhr.responseText
            document.getElementById("ajax-text-output").innerHTML=textOutput

        }else if(xhr.status ===404){
            console.log('Error. file not found.')
        }
    }
    xhr.send()
}
const loadJson = () => {
    xhr.open('GET', 'person.json', true)
    xhr.onload = () => {
        if (xhr.status === 200){
            const person = JSON.parse(xhr.responseText)
            person.forEach(p => {
                const {firstName, lastName, emailAddress} = p
                const jsonul = document.getElementById("JSON-DataLoad")
                console.log(firstName)
                let li = document.createElement('li')
                let str = `${firstName} ${lastName} ${emailAddress}`
                li.appendChild(document.createTextNode(str))
                jsonul.append(li)
            })
        }else if (xhr.status === 404){
            console.log('Error. file not found.')
        }
    }
    xhr.send()
}
const sendPhp = () => {
    const firstName = document.getElementById("input-First-Name")
    const lastName = document.getElementById("input-Last-Name")
    const emailAddress = document.getElementById("input-Email")
    const params = `firstName=${firstName}&lastName=${lastName}&emailAddress${emailAddress}`
    xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php',true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.responseText)
        }else if (xhr.status === 500){
            console.log('Error. Internal server error.')
        }
    }
    xhr.send(params)
} 

ajaxTxtBtn.addEventListener('click', loadtxt)
ajaxJsonBtn.addEventListener('click', loadJson)
ajaxPhpBtn.addEventListener('click', loadForm)
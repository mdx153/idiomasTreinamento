dataSpeed = [
    { velocity: "0.25" },
    { velocity: "0.50" },
    { velocity: "0.75" },
    { velocity: "1.0" },
    { velocity: "1.25" },
    { velocity: "1.50" },
    { velocity: "1.75" },
    { velocity: "2.0" }
]

dataLanguage = [
    { language: "Inglês", value: "en" },
    { language: "Espanhol", value: "es" },
    { language: "Japonês", value: "ja-JP" },
    { language: "Chinês", value: "zh-cn" },
    { language: "Koreano", value: "ko-kr" },
    { language: "Português", value: "pt" }
]

const selectElementVelocity = document.querySelector("#velocity")
const selectElementLanguage = document.querySelector("#language")

dataSpeed.forEach(vel => {
    const option = document.createElement("option")
    option.value = vel.velocity
    option.textContent = `${vel.velocity}x`

    if(vel.velocity === "1.0"){
        option.selected = true
    }

    selectElementVelocity.appendChild(option)
})

dataLanguage.forEach(lan => {
    const option = document.createElement("option")
    option.value = lan.value
    option.textContent = `${lan.language}`

    if(lan.value === "en"){
        option.selected = true
    }

    selectElementLanguage.appendChild(option)
})


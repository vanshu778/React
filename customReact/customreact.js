function customRender(reactElement,container){
    //step1:  create the dom element based on type specified in reactElement.type
    // const domElement = document.createElement(reactElement.type)

    //step 2: set the inner content of element
    // domElement.innerHTML = reactElement.children

    //step3: set attributes like href and target if they exist in props
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    //step4: append the created DOM element to the main container
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a', //specifies the type of Html element to create(like anchor element)
    props:{
        href:'https://google.com', //url the anchor element should point
        target:'_blank'//opens the link in new tab
    },
    children: 'Click me to visit google' //the text that will displayed inside the anchor element
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
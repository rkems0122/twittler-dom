// your code here
const tweets = [
    {createdAt: Date(),
    id: 'rkems0122',
    content: '위 아이디는 깃허브 아이디입니다.'
    },
    {createdAt: Date(),
    id: 'xhdalfekdl',
    content: '위 내용은 통밀다이를 한영키 바꿔서 입력한 것입니다. 하지만 다이제는 초코 다이제가 좋습니다.'
    },
    {createdAt: Date(),
    id: 'sprint',
    content: '오후에는 스프린트 일정과 줌 일정이 있습니다.'
    },
    {createdAt: Date(),
    id: 'HA',
    content: '지금은 HA 대비용으로 레드벨벳의 돔을 부르고 있습니다.'
    },

]
function createTweets (tweets) {
    const backgroundthree = document.querySelector('#backgroundthree')
    for (let i=0;i<tweets.length;i++) {
        debugger;
        const createDivParents = document.createElement('div')
        const createHr = document.createElement('hr')
        createDivParents.setAttribute('class', `undefined${i}`)
        backgroundthree.appendChild(createDivParents)
        backgroundthree.appendChild(createHr)
        const divUndefined = document.querySelector(`.undefined${i}`)
        const createDivChildrenZero = document.createElement('div')
        const createDivChildrenOne = document.createElement('div')
        const createDivChildrenTwo = document.createElement('div')
        createDivChildrenZero.setAttribute('class', 'date')
        createDivChildrenOne.setAttribute('class', 'ID')
        createDivChildrenTwo.setAttribute('class', 'message')
        divUndefined.appendChild(createDivChildrenZero)
        divUndefined.appendChild(createDivChildrenOne)
        divUndefined.appendChild(createDivChildrenTwo)
        document.querySelectorAll('.date')[i].textContent = tweets[i].createdAt
        document.querySelectorAll('.ID')[i].textContent = tweets[i].id
        document.querySelectorAll('.message')[i].textContent = tweets[i].content
    }
    
}

/*수도 코드
backgroundthree 주소를 저장해둔다.
div 노드를 생성하고 이를 createDivParents로 저장.
createDiv class를 undefined로 설정.
createDiv를 backgroundthree에 붙여 넣음
undefined 주소 저장.
undefined 밑에 div 노드 세개 생성.
(createDivChildrenZero/One/Two)

*/

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

createTweets(tweets);
// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
//console.log(generateNewTweet());

//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';
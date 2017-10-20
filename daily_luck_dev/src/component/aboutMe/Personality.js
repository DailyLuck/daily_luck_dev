import React from 'react';

const Personality = () => {
    const skillLeft = {
    	position: 'relative',
    	marginTop: '2rem',
    }
    const box = {
    	height: '.7em',
        margin: '2% 0',
        width: '50%',
        border: '.05em solid #2D2D2D',
        borderRadius: '2px',
        display: 'inlineBlock',
        textAlign: 'center',
        position: 'relative',
        left: '25%'
    }
    const one = {
    	height: '.7em',
        width: '75%',
        background: '#2D2D2D',
        display: 'block',
    }
    const two = {
    	 height: '.7em',
         width: '90%',
         background: '#2D2D2D',
         display: 'block'
    }
    const three = {
    	 height: '.7em',
         width: '50%',
         background: '#2D2D2D',
         display: 'block'
    }
    const lifeStyle = {
      marginTop: '2rem',
    }
	return (
    <div>
        <div style={lifeStyle} className="life-style">
          我叫馬廣辰今年26歲，個性平易近人<br/>
          就學時期我因為喜歡設計，所以邊進行平面設計的工作<br/>
          在當兵前加入了一個業務為創客教育的新創公司，<br/>
          因此開始接觸關於3D列印或是雷射雕刻之類的新奇玩意，<br/>
          當時由於新創公司人物力資源的不足，<br/>
          工作項目包含 設計、軟體工程、商業模式與數位行銷...等<br />
          於是開始用aws跟wordpress幫公司管理網站，並自學程式設計。<br/>
          當完兵後在東南旅遊任職 前端工程師，主要的工作內容就是寫JS，<br/>
          在東南旅遊時，因為面臨需要開發新產品線的情況，<br />
          我們需要維護舊版(Angular JS)的網站，以及開發新版的網站(React JS)<br />
          在東南後端工程師們是使用JAVA，<br/>
          前端則是寫Schema和使用express、GraphQL等技術<br />
          接API來用，client side的GraphQL我們用Apollo< br/>
          我喜歡 打籃球、寫程式、設計與插畫也是重度咖啡因愛好者，<br/>
          音樂我都聽，但我最喜歡的還是90年代的搖滾樂(Linkin Park、Korn)，<br/>
          假日會跟女朋友去吃美食以及打電動和研究一下軟體設計的內容。
        </div>
        <br/>簡單來說我的組成成分大概長這樣 :
        <div id="skill-left" style={skillLeft}>
          Web Design
          <div className="box" style={box}>
            <div id="one" style={one}></div>
          </div>
          Programing
          <div className="box" style={box}>
            <div id="two" style={two}></div>
          </div>
          Coffee & Music
          <div className="box" style={box}>
            <div id="three" style={three}></div>
          </div>
        </div>
      </div>
	)
}

export default Personality;
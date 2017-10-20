import React from 'react';

const ContactInformation = () => {
 return (
    <div className="contact_info">
        <h1>Let's Work Together</h1>
        <p>如有任何關於我能提供的服務<br/>
        與相關疑問，歡迎您隨時與我聯絡。<br/>
        或直接在右方留下您的留言<br/>
        及相關資訊，您所留下的資料會<br/>
        傳入我的mongose DataBase<br/>
        只有我與您的帳號有權限觀看您所留下的訊息。<br/>
        </p>
        <h1>我的連絡資訊</h1>
        <p>電子信箱: kwn791122@gmail.com</p>
        <p>手機: 0915791122</p>
        <div>
            <h1>留言給我</h1>
            <textarea defaultValue="輸入您的留言..."/>
        </div>
    </div>
 );
}

export default ContactInformation ;
import React, { useEffect } from 'react';

import '../sass/contacts.scss';

export const Contacts = () => {


    return (

   <>
        <div  id='contacts' style={{paddingTop:'50px'}}></div>

        <section className="">
            <div className="wow animate__animated animate__fadeIn contacts">
                <div className="container row">
                    <div className="box contacts__pic">
                        <img src="images/contacts.png" alt="contacts" />
                    </div>
                    <div className="box contacts__info">
                        <div className="box__title">
                            Хотите стать нашим клиентом или остались вопросы?
                        </div>
                        <br />
                        <div className="box__text" style={{lineHeight:'28px'}}>
                            Мы всегда на связи:
                        </div>
                        <div className="contacts__wrap">
                            <div className="contacts__item">
                                <a href="tel:+1234567890">
                                    <div className="contacts__icon"><img src="icons/phone.svg" alt="phone" style={{height:"27px"}} /></div>
                                    <div className="contacts__text">+1234567890</div>
                                    <div className="contacts__text_hidden">Нажмите, чтобы позвонить</div>
                                </ a>
                            </div>
                            <div className="contacts__item">
                                <a href="t#">
                                    <div className="contacts__icon"><img src="icons/mail.svg" alt="mail" style={{height:"27px"}} /></div>
                                    <div className="contacts__text">doblil@mail.ru</div>
                                    <div className="contacts__text_hidden">Нажмите, чтобы скопировать</div>
                                </ a>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  );
}

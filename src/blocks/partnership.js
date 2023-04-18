import React, { useState, useEffect } from 'react';

import './../sass/partnership.scss'


export const Partnership = () => {
  
    return (
        <>
            <div id='partnership' style={{paddingTop:'50px'}}></div>
            <section className="partnership"  style={{padding:'0px'}}>
                <div className=" partnership">
                    <div className="container">
                        <div className="box__title">
                            Условия сотрудничества
                        </div>
                        <div className="box__subtitle">
                            Команда LabTab нацелена на долгосрочное и продуктивное сотрудничество с лабораториями и фармпредприятиями. 
                        </div>
                    </div>
                    <div className="container partnership__wrap">        
                        <div className="partnership__box wow animate__animated animate__fadeInUp">
                            <br />
                            <div className="partnership__caption"> Что мы предоставляем?
                                <div className="caption__circle1"><img src="icons/circle_white.svg" alt="circle"/></div> 
                                <div className="caption__circle2"><img src="icons/circle_white.svg" alt="circle"/></div> 
                                <div className="caption__circle3"><img src="icons/circle_white.svg" alt="circle"/></div> 
                            </div>   <br />
                            <div className="partnership__text" style={{lineHeight:'28px'}}>
                                <div className="partnership__item">○ Пробный бесплатный период длительностью 30 дней </div>
                                <div className="partnership__item">○ Договор при приобретении лицензии или подписки на программу </div>
                                <div className="partnership__item">○ Возможность оплаты любым удобным способом </div>
                                <div className="partnership__item">○ Полный комплекс по установке, настройке, внедрению и обучению программе на предприятии </div>
                                <div className="partnership__item">○ Постоянная техническая поддержка ПО </div>
                                <div className="partnership__item">○ Гарантия безопасности и конфиденциальности ваших данных </div>
                                <div className="partnership__item">○ Возможность адаптировать программу под ваше предприятие </div>
                                <div className="partnership__item">○ В случае отказа от подписки  - передаем вам все данные предприятия из облачного хранилища в электронном текстовом виде и расторгаем договор. Данные остаются у вас в единственном экземпляре  </div> 
                            </div>
                        </div>
                        <div className="partnership__box wow animate__animated animate__fadeInUp">
                            <br />
                            <div className="partnership__caption"> Чего ждем от клиента? 
                                <div className="caption__circle1"><img src="icons/circle_white.svg" alt="circle"/></div> 
                                <div className="caption__circle2"><img src="icons/circle_white.svg" alt="circle"/></div> 
                                <div className="caption__circle3"><img src="icons/circle_white.svg" alt="circle"/></div> 
                            </div>   <br />

                            <div className="partnership__text" style={{lineHeight:'28px'}}>
                            <div className="partnership__item">○ Обеспечение права интелектуальной собственности LabTab </div>
                            <div className="partnership__item">○ Запрещено передавать на платной или бесплатной основе права пользования сервисом третьим лицам </div>
                            <div className="partnership__item">○ Соблюдение условий подписанного договора </div>
                            <div className="partnership__item">○ Своевременная оплата услуг. В случае отсутствия оплаты подписки мы приостанавливаем доступ к сервису на срок до 30 дней </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        </>

  );
}

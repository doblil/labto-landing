import React, { useState, useEffect } from 'react';
import './../sass/price.scss'


export const Price = () => {

  
    return (
        <>
            <div id='price' style={{paddingTop:'50px'}}></div>
            <section className =""  style={{padding:'0px', marginTop:'15px', marginBottom:'-50px'}}>
                <div className="price">
                    <div className="container">
                        <div className="box__title" style={{color:'white'}}>
                            Тарифные планы
                        </div>
                        <div className="box__subtitle" style={{color:'white'}}>
                            Вы можете выбрать максимально подходящие условия среди предложенных вариантов
                        </div>
                    </div>
                    <div className="container price__wrap">        
                        <div className="price__box">
                            <div className="price__heading">
                                <div className="price__name">тариф Мини</div>
                                <div className="price__cost">60 000 ₽</div>
                                <div className="price__measure">единоразово</div>
                            </div>
                            <div className="price__descr">
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Неограниченная поддержка <br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>5 гб места на сервере<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>До 15 пользователей<br /><br />
                                <span style={{color:'red',fontSize:'23px', lineHeight:'15px'}}>✘</span>Интеграция электронной почты<br /><br />
                                <span style={{color:'red',fontSize:'23px', lineHeight:'15px'}}>✘</span>Неограниченная подписка
                            </div>
                        </div>
                        
                        <div className="price__box">
                            <div className="price__heading">
                                <div className="price__name">тариф Миди</div>
                                <div className="price__cost">80 000 ₽</div>
                                <div className="price__measure">единоразово</div>
                            </div>
                            <div className="price__descr">
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Неограниченная поддержка <br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>5 гб места на сервере<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>До 15 пользователей<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Интеграция электронной почты<br /><br />
                                <span style={{color:'red',fontSize:'23px', lineHeight:'15px'}}>✘</span>Неограниченная подписка
                            </div>
                        </div>
                        <div className="price__box">
                            <div className="price__heading">
                                <div className="price__name">тариф Макси</div>
                                <div className="price__cost">100 000 ₽</div>
                                <div className="price__measure">единоразово</div>
                            </div>
                            <div className="price__descr">
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Неограниченная поддержка <br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>5 гб места на сервере<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>До 15 пользователей<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Интеграция электронной почты<br /><br />
                                <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span>Неограниченная подписка
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    
  );
}

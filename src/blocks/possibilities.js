
import React, { useEffect } from 'react';

import '../sass/possibilities.scss';
import '../sass/advantages.scss';

export const Possibilities = () => {

  return (
   <>
        <div id='possibilities' style={{paddingTop:'50px'}}></div>
        <section className='possibilities'>
            <div className="wow animate__animated animate__fadeIn container">
                <div className="box__title">
                    Основные возможности LabTab
                </div>
                <div className="possibilities__wrap">
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/magazine.svg" alt="magazine" style={{height:"37px"}} /></div>
                        <div className="possibilities__descr">
                            Учёт расхода материалов и пользования колонками
                            <p>Можно в считанные секунды списывать реактивы, стандарты, субстанции, а также брать и возврвщать колонки.</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/info.svg" alt="info" style={{height:"50px"}} /></div>
                        <div className="possibilities__descr">
                            Доступ к развернутой информации о каждом расходнике
                            <p>Вся необходимая информация в доступной форме: данные об упаковке, сроке годности, текущем остатке, документы, история использования с возможностью распечатать</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/barcode.svg" alt="barcode" style={{height:"34px"}} /></div>
                        <div className="possibilities__descr">
                            Генерирование уникальных штрих-кодов по ID
                            <p>Для быстрого доступа к информации о расходнике можно воспользоваться штрих-кодом</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/drafts.svg" alt="drafts" style={{height:"57px"}} /></div>
                        <div className="possibilities__descr">
                            Ведение черновиков для учёта материалов
                            <p>Для Вашего удобства списание расходников можно отложить на будущее</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/settings.svg" alt="settings" style={{height:"50px"}} /></div>
                        <div className="possibilities__descr">
                            Внесение и редактирование информации о материалах и расходниках
                            <p>Удобная форма для быстрого заполнения информации о расходнике. Имеются опции в помощь препаратору, например можно внести новый расходник на основе существующего, перенести в карантин просроченный и др</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/history.svg" alt="history" style={{height:"48px"}} /></div>
                        <div className="possibilities__descr">
                            Фиксирование истории активности в сервисе
                            <p>Каждое действие каждого сотрудника фиксируется и сохраняется в истории. К этой информации имеют достук пользователи с правами администратора и начальника.</p>
                        </div>
                    </div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/order.svg" alt="order" style={{height:"53px"}} /></div>
                        <div className="possibilities__descr">
                            Оформление запроса материалов и контроль статуса заказа
                            <p>Чтобы заказать расходник у ответвенных лиц, достаточно отправить запрос ему на сервис лично</p>
                        </div></div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/app.svg" alt="app" style={{height:"56px"}} /></div>
                        <div className="possibilities__descr">
                            Наличие удобного приложения для смартфона
                            <p>Через приложение можно списывать реактивы, брать в пользование колонки, добавлять черновики, а также просматривать свою историю</p>
                        </div></div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/result.svg" alt="result" style={{height:"50px"}} /></div>
                        <div className="possibilities__descr">
                            Составление экономических отчетов
                            <p>Очень приятная функция для составления базовых отчетов по проектам или по работе отделов</p>
                        </div></div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/emploee.svg" alt="emploee" style={{height:"53px"}} /></div>
                        <div className="possibilities__descr">
                            Управление сотрудниками
                            <p>У администратора есть список всех сотрудников, где можно изменять информацию о пользователях и их учетные данные. Если сотрудник, допустим, забыл пароль от своего аккаунта, это очень легко и быстро поправимо</p>
                        </div></div>
                    <div className="possibilities__card">
                        <div className="possibilities__icon"><img src="icons/possibilities/copy.svg" alt="copy" style={{height:"40px"}} /></div>
                        <div className="possibilities__descr">
                            Резервное копирование данных из облачной базы
                            <p>Можно создавать бэкапы программы, скачивать себе на стационарный компьютер и при крайней необходимости делать восстановление</p>
                        </div></div>
                </div>
            </div>
        </section>

        <section className='wow animate__animated animate__fadeIn' style={{marginBottom:'-50px'}}>
            <div className="advantages">
                <div className="container row" style={{alignItems:'flex-start'}}>
                    <div className="box">
                        <div className="box__title" style={{marginBottom:'5px'}}>
                        Преимущества пользования  программным обеспечением LabTab
                        </div>
                        <br />
                        <div className="box__text">
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Экономия времени, процесс списания материалов до 10 с <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Экономия финансов, нет необходимости платить препаратору на полной ставке <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Исключение ошибок и опечаток в учётах <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Удобный и понятный интерфейс сервиса - залог хорошего настроения сотрудников <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Возможность контроля работы управлений в режиме реального времени <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Множество вспомогательных функций, которые упрощают деятельность лаборатории <br /><br />
                            <span style={{color:'#00a0a0',fontSize:'23px', lineHeight:'15px'}}>✔</span> Возможность адаптации программы под ваши потребности
                        </div>
                    </div>

                    <div className="box" style={{minHeight:'360px'}}>
                        <div className="box__title" style={{marginBottom:'5px'}}>
                        Недостатки
                        </div>
                        <br />
                        <div className="box__text" style={{width:'100%',  textAlign:'left', marginLeft:'50px'}}>
                            Их нет, убедитесь сами!
                        </div>

                    </div>
                    
                </div>

                <div className="box__illustration">
                <img src="images/advantages.png" alt=""/>
                    {/* <img src="images/animation/atom.svg" alt="atom" className="horisontal" style={{height:'105px', bottom:'320px', right:'40px'}}/>
                    <img src="images/animation/formula_1.svg" alt="formula" className="vertical" style={{height:'105px', bottom:'160px', right:'220px'}}/>
                    <img src="images/animation/formula_2.svg" alt="formula" className="horisontal horisontal_1" style={{height:'85px', bottom:'250px', right:'280px'}}/>
                    <img src="images/animation/formula_3.svg" alt="formula" className="vertical vertical_1" style={{height:'105px', bottom:'100px', right:'520px'}}/>
                    <img src="images/animation/h2o.svg" alt="h2o" className="horisontal horisontal_2" style={{height:'24px', bottom:'70px', right:'250px'}}/>
                    <img src="images/animation/jar_1.svg" alt="jar" className="vertical vertical_2" style={{height:'100px', bottom:'197px', right:'35px'}}/>
                    <img src="images/animation/jar_2.svg" alt="jar" className="horisontal" style={{height:'150px', bottom:'22px', right:'380px'}}/>
                    <img src="images/animation/jar_3.svg" alt="jar" className="vertical vertical_3" style={{height:'170px', bottom:'240px', right:'140px'}}/>
                    <img src="images/animation/molecule.svg" alt="molecule" className="horisontal horisontal_3" style={{height:'150px', bottom:'33px', right:'33px'}}/> */}
                </div>
            </div>

        </section>
   </>
  );
}

import React, { useEffect } from 'react';

import '../sass/about.scss';

export const About = () => {
    
  
    return (

   <>
        <div id='about'></div>
        <section> 
            <div className="wow animate__animated animate__fadeIn about" style={{marginTop:'100px'}}>
                <div className="container row">
                    <div className="box">
                        <div className="box__title">
                            Управление лабораторией на новом уровне
                        </div>
                        <br />
                        <div className="box__text" style={{lineHeight:'28px'}}>
                            LabTab - это облачное програмное обеспечение для фармкомпаний и лабораторий. Ведите учет материалов и расходников в электронном формате. Это удобно и просто, а также позволяет рационально распределять время и ресурсы компании. 
                            Мы предлагаем полностью отказаться от ведения бумажных журналов в пользу облачной базы данных. Кроме того, сервис позволет создавать базовую отчетность, контролировать деятельность лаборатории и многое другое.
                        </div>
                    </div>
                    <div className="box">
                        <img src="images/devises.png" alt="devises" />
                    </div>
                </div>
            </div>

        </section>

        <section style={{marginBottom:'-50px'}}>
            <div className="wow animate__animated animate__fadeIn about">
                <div className="container row">
                    <div className="box">
                        <img src="images/employees.png" alt="employees" />
                    </div>
                    <div className="box">
                        <div className="box__title">
                            Широкий функционал для сотрудников и руководителей
                        </div>
                        <br />
                        <div className="box__text" style={{lineHeight:'28px'}}>
                            Базовая версия LabTab обеспечивает полноценную работу лаборатории на всех уровнях управления. Каждый сотрудник имеет личный кабинет с определенным набором функций: от пользования таблицами расходников до администрирования работы сервиса. <br />
                            <span style={{fontWeight:'700'}}>Доступны 4 вида доступа к базам данных:</span><br />
                            простой пользователь, препаратор, начальник, администратор. 

                        </div>
                    </div>
                </div>
            </div>

        </section>
   </>
  );
}

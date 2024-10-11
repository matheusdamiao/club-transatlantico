import React from 'react'
import schedule from './../assets/images/schedule.svg'
import Aos from "aos";
import "aos/dist/aos.css";

const AgendaSectionHome = () => {
    React.useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);
  return (
    <div id='agenda' className='max-w-7xl mx-auto w-full my-[100px] px-11'>
        <h3   data-aos="fade-down" data-aos-once="true"  className='font-title lg:text-5xl text-4xl'>Próximos Eventos</h3>
     
        <section className='flex flex-col mt-14 gap-6'>
            
            <div  data-aos="fade-down" data-aos-once="true"  className='flex h-full lg:h-[130px] max-w-[850px] w-full lg:flex-row flex-col'>
                <div className='flex flex-col bg-[#FFCC00] lg:w-[150px] items-center gap-4 justify-center p-10'>
                    <p className='font-black text-[50px] leading-[20px]'>21</p>
                    <small className='font-black text-[26px] leading-[20px] '>out</small>
                </div>

                <div className='flex flex-col bg-[#393939] w-full py-6 px-10 gap-4'>
                    <p className='text-[20px] font-bold text-white'>
                    Vernissage Premio de Fotografia & 70 anos do Club Transatlântico
                    </p>
                    <div className='flex text-[#D8D8D8] gap-2'>
                        <img src={schedule} alt="" />
                        <p> 19h - Segunda-feira - 21/10/2024</p>
                    </div>
                </div>
            </div>

            <div  data-aos="fade-down" data-aos-once="true"  className='flex h-full lg:h-[130px] max-w-[850px] w-full lg:flex-row flex-col'>
                <div className='flex flex-col bg-[#FFCC00] lg:w-[150px] items-center gap-4 justify-center p-10'>
                    <p className='font-black text-[50px] leading-[20px]'>23</p>
                    <small className='font-black text-[26px] leading-[20px] '>out</small>
                </div>

                <div className='flex flex-col bg-[#393939] py-6 px-10 gap-4 w-full'>
                    <p className='text-[20px] font-bold text-white'>
                    Experiência Jantar Vip Battistine (Celebração com Sabor)
                    </p>
                    <div className='flex text-[#D8D8D8] gap-2'>
                        <img src={schedule} alt="" />
                        <p> 19h - Quarta-feira - 23/10/2024</p>
                    </div>
                </div>
            </div>

            <div  data-aos="fade-down" data-aos-once="true"  className='flex h-full lg:h-[150px] max-w-[850px] w-full lg:flex-row flex-col'>
                <div className='flex flex-col bg-[#FFCC00] lg:w-[150px] items-center gap-4 justify-center p-10'>
                    <p className='font-black text-[50px] leading-[20px]'>13</p>
                    <small className='font-black text-[26px] leading-[20px] '>nov</small>
                </div>

                <div className='flex flex-col bg-[#393939] py-6 px-6 lg:py-6 lg:px-10 gap-4 w-full'>
                    <p className='text-[20px] font-bold text-white '>
                    Workshop “Como se preparar para conversas difíceis” com Johannes Walldorf (Stuttgart)
                    </p>
                    <div className='flex text-[#D8D8D8] gap-2'>
                        <img src={schedule} alt="" />
                        <p> 8h - 11h - Quarta-feira - 13/11/2024</p>
                    </div>
                </div>
            </div>
        </section>

      
    </div>
  )
}

export default AgendaSectionHome

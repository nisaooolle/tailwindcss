import React from 'react'

function About() {  
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000">
      <div className='flex mt-6 bg-cyan-900 px-3 py-3 text-white gap-16 mx-20 '>     
        <img className='sm:w-72 ' src="https://pbs.twimg.com/media/E2q6QnFVgAYMsyL.jpg" alt="" />
        <p className=' 	'>
      <h2 >HI EVERYONE <i class="fa-solid fa-hands-clapping"></i> </h2>
      <hr />
      <h3> About Me <i class="fa-solid fa-user"></i> <hr /></h3>
        <h5>Khoirul Nisa <i class="fa-solid fa-sparkles"></i></h5>
        <hr />
        <li>Let me introduce myself</li>
          <li>Saya lahir diSemarang , pada 6 Juni 2006.</li>
          <li>Saya bersekolah di SMK Bina Nusantara Semarang</li>
          <li>Saya suka belajar ngoding</li>
          <li>Genre musik favoritnya adalah hip hop dan R&B</li>
          <li>Saya menyukai warna kalem, makanan Barat, bola voli</li>
        </p>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import Navbar from './Navbar'

function Civi() {
  <Navbar/>
  return (
    <div className='mb-10' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className=' flex gap-5 px-3 py-3 bg-cyan-800 text-white mx-20  mt-6 '>
        <img className='w-72 h-72 mt-24' src="https://i.pinimg.com/originals/0f/e0/36/0fe0366911a388a67a335a035cf60ead.jpg" alt="" />
        <p >
          <h1>Curiculum Vitae</h1>
          <hr />
          <h3>Data Pribadi</h3>
          <hr />
        <li>Nama : Khoirul Nisa</li>
        <li>Tanggal Lahir : 6 Juni 2006</li>
        <li>Lahir di : Semarang</li>
        <li>Zodiak : Gemini</li>
        <li>Tinggi Badan : 165-+</li>
        <li>Jenis kelamin: Perempuan</li>
        <li>Agama: Islam</li>
        <li>Kewarganegaraan: Indonesia</li>
        <li>Status: Siswi</li>
        <li>Alamat Sekarang: Podorejo,JL.Palir Utama Dalam 3 RT4 RW 12 b261 Kota Semarang</li>
        <br />
          <h4>Contact Me</h4> <hr />
        <div className='flex gap-3'>
          <li><a className='text-white' href="https://www.google.com/intl/id/gmail/about/"><i class="fa-solid fa-envelope"></i></a></li>
          <li><a className='text-white' href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a></li>
          <li><a className='text-white' href="https://www.tiktok.com/login"><i class="fa-brands fa-tiktok"></i></a></li>
          <li><a className='text-white' href="https://web.whatsapp.com/"><i class="fa-brands fa-square-whatsapp"></i></a></li>
          </div>
        </p>
      </div>
      <div>
      </div>
  </div>
  )
}

export default Civi
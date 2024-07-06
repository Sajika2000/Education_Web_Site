import React from 'react'

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63399.0700155954!2d80.77686055000001!3d6.7158074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1720302097511!5m2!1sen!2slk'

  return (
    <section className='py-12 bg-[#d6d6f3]'>
      <div className='px-4 mx-auto mt-8 max-w-7xl'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='overflow-hidden rounded-lg'>
            <iframe
              src={map}
              className='w-full h-full'
              style={{ minHeight: '450px' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='space-y-6'>
            <div className='text-center'>
              <h1 className='text-3xl font-bold text-black'>Contact Us</h1>
              <p className='mt-2 text-gray-600'>
                We're open for any suggestion or just to have a chat
              </p>
            </div>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='text-center'>
                <h4 className='text-lg font-semibold'>ADDRESS</h4>
                <p className='mt-1 text-gray-600'>184/1, Nagoda, Galle, Sri Lanka</p>
              </div>
              <div className='text-center'>
                <h4 className='text-lg font-semibold'>Email</h4>
                <p className='mt-1 text-gray-600'>info@gmail.com</p>
              </div>
              <div className='text-center'>
                <h4 className='text-lg font-semibold'>Phone</h4>
                <p className='mt-1 text-gray-600'>+123 456 3455</p>
              </div>
            </div>
            <form className='space-y-4'>
              <div className='grid gap-6 md:grid-cols-2'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5fe3]'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5fe3]'
                />
              </div>
              <input
                type='text'
                placeholder='Subject'
                className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5fe3]'
              />
              <textarea
                cols={30}
                rows={10}
                placeholder='Create a message here...'
                className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5fe3]'
              ></textarea>
              <button className='w-full py-3 font-medium text-white bg-[#5f5fe3] rounded-lg hover:bg-[#4a4abf] transition'>
                SEND MESSAGE
              </button>
            </form>
            <div className='flex justify-center gap-6 pt-6'>
              <h3 className='mt-2 text-lg font-semibold'>Follow Us:</h3>
              <i className='fab fa-facebook-f p-3 text-xl text-[#5f5fe3] hover:bg-[#5f5fe3] hover:text-white rounded-md transition'></i>
              <i className='fab fa-instagram p-2 text-xl text-[#5f5fe3] hover:bg-[#5f5fe3] hover:text-white rounded-md transition'></i>
              <i className='fab fa-twitter p-2 text-xl text-[#5f5fe3] hover:bg-[#5f5fe3] hover:text-white rounded-md transition'></i>
              <i className='fab fa-linkedin p-2 text-xl text-[#5f5fe3] hover:bg-[#5f5fe3] hover:text-white rounded-md transition'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
  });

  const [file, setFile] = useState(null);

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focus');
    e.target.parentNode.classList.add('not-empty');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && !value.trim()) {
      e.target.parentNode.classList.remove('not-empty');
    }
    e.target.parentNode.classList.remove('focus');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Discord webhook URL
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1132443910170497164/nl4OKZ2tXVgjydb_jXdlvRHPgT7Plmz434E9znhv-LKpVUDq6cXO8xNrBrpTEya39uoe';

    const formDataDiscord = new FormData();
    formDataDiscord.append(
      'content',
      `New form submission:\nName: ${formData.firstName} ${formData.lastName}\nMessage: ${formData.message}`
    );

    if (file) {
      formDataDiscord.append('file', file);
    }

    try {
      const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        body: formDataDiscord,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        message: '',
      });
      setFile(null);
    } catch (error) {
      console.error('Error sending form data to Discord:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <section className="bg-white min-h-screen w-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-ChicagoBlue ">Feedback</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">
        Thank you for using Flame Grades. Your feedback and suggestions are invaluable to me as they contribute to the continuous improvement of this website. Please take a moment to share any thoughts or suggestions you may have. 
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name and Last Name input fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="conInp-wrap">
              <input
                className="contact-input shadow-sm bg-white border border-ChicagoBlue text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                autoComplete="off"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="First Name"
                required
              />
              <label className='text-ChicagoBlue'>First Name</label>
            </div>
            <div className="conInp-wrap">
              <input
                className="contact-input shadow-sm  border border-ChicagoBlue text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:shadow-sm-light"
                autoComplete="off"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Last Name"
                required
              />
              <label className='text-ChicagoBlue'>Last Name</label>
              <i className="contIcon uil uil-postcard"></i>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-ChicagoBlue ">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black  rounded-lg shadow-sm border border-ChicagoBlue focus:ring-primary-500 min-h-[250px] focus:border-primary-500 "
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            ></textarea>
          </div>
          {/* Attachment input field */}
          <div className='flex justify-between gap-10 items-center flex-wrap'>
          <div>
            <label htmlFor="attachment" className="block mb-2 text-sm font-medium text-ChicagoBlue">
              Attachment
            </label>
            <div className="w-[250px] h-[70px] rounded-lg shadow-[0px_5px_0px_0px_rgba(65,182,230)] hover:scale-110 border cursor-pointer flex flex-col items-center justify-center">
              <p className='text-2xl'>Attachment</p>
              <input type="file" id="attachment" name="attachment" onChange={handleFileChange} className=' opacity-0 w-[250px] h-[70px] absolute  cursor-pointer'/>
            </div>

            
          </div>
          {/* Submit button */}
          
          <div>
            <label htmlFor="attachment" className="block mb-2 text-sm font-medium text-ChicagoBlue">
              Send Message
            </label>
            <button
            type="submit"
            className="w-[250px] h-[70px] rounded-lg shadow-[0px_5px_0px_0px_rgba(65,182,230)] hover:scale-110 border cursor-pointer flex flex-col items-center justify-center text-2xl">Send</button>
          </div>
          
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

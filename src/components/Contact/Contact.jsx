'use client';

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'sander.vanoverloop@hotmail.com',
      link: 'mailto:sander.vanoverloop@hotmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+32 475 68 73 31',
      link: 'tel:+32475687331'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Belgium',
      link: null
    }
  ];

  const notify = () =>
    toast.success('🙌 Thank you for contacting me!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear messages when user starts typing
    if (successMessage) setSuccessMessage('');
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    emailjs
      .send('service_o85moqt', 'template_n6ftd9r', formData, 'jwUZShhzhjO-FXaiD')
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
          notify();
        },
        () => {
          setErrorMessage('Failed to send your message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingShape} style={{top: '10%', right: '10%'}}></div>
        <div className={styles.floatingShape} style={{bottom: '20%', left: '15%'}}></div>
        <div className={styles.floatingShape} style={{top: '50%', right: '5%'}}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>
            Let's <span className={styles.highlight}>Connect</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>
        
        <div className={styles.contactContent}>
          {/* Contact Info Cards */}
          <div className={`${styles.contactInfo} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className={styles.infoLink}>
                        {info.content}
                      </a>
                    ) : (
                      <span className={styles.infoText}>{info.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.availabilityCard}>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Available for new opportunities
              </div>
              <p className={styles.availabilityText}>
                Currently open for full-time positions.
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formSection} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send me a message</h3>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows="6"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
                  disabled={isSubmitting}
                >
                  <span className={styles.btnContent}>
                    {isSubmitting ? (
                      <>
                        <span className={styles.loader}></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className={styles.btnIcon}>🚀</span>
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {successMessage && (
                <div className={styles.successMessage}>
                  <span className={styles.messageIcon}>✅</span>
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className={styles.errorMessage}>
                  <span className={styles.messageIcon}>❌</span>
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className={`${styles.socialSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <h3 className={styles.socialTitle}>Let's connect on social media</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/sandervanoverloop/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className={styles.socialLabel}>LinkedIn</span>
            </a>
            <a
              href="mailto:sander.vanoverloop@hotmail.com"
              className={styles.socialIcon}
              aria-label="Email"
            >
              <FaEnvelope />
              <span className={styles.socialLabel}>Email</span>
            </a>
            <a
              href="https://github.com/SanderVanOverloop"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <FaGithub />
              <span className={styles.socialLabel}>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
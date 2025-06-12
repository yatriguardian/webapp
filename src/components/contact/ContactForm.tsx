import React, { useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    subService: '',
    contactMethod: '',
    urgency: '',
    message: '',
    acceptPolicy: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  
  const serviceOptions = {
    'visa': ['Tourist Visa', 'Business Visa', 'Student Visa', 'Work Visa', 'Immigration Visa'],
    'passport': ['New Application', 'Renewal', 'Emergency Service', 'Lost Passport', 'Document Authentication'],
    'travel': ['Flight Booking', 'Hotel Reservation', 'Travel Insurance', 'Package Tour', 'Other Services']
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      alert('Please accept the privacy policy to continue.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailData = {
        to: formData.email,
        cc: 'connect@yatriguardian.in',
        subject: `Contact Request - ${formData.serviceType} Service`,
        body: `
Dear ${formData.name},

Thank you for contacting Yatri Guardian. We have received your inquiry and will respond within 24 hours.

Your Request Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service Type: ${formData.serviceType}
- Specific Service: ${formData.subService}
- Preferred Contact Method: ${formData.contactMethod}
- Urgency Level: ${formData.urgency}
- Message: ${formData.message}

Our team will review your request and contact you via your preferred method shortly.

Best regards,
Yatri Guardian Team
connect@yatriguardian.in
+91 9136-759-842

Office Address:
1501, 2B Paradise Heights CHS,
MHADA Complex, Opp. Witty International School,
Chikuwadi, Borivali West,
Mumbai 400067
        `
      };

      // Simulate email sending
      console.log('Sending contact form email:', emailData);
      
      // Show success message after delay
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        // Show WhatsApp modal after success
        setShowWhatsAppModal(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: '',
            subService: '',
            contactMethod: '',
            urgency: '',
            message: '',
            acceptPolicy: false
          });
        }, 5000);
      }, 1500);
    } catch (error) {
      alert('Failed to send message. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const getServiceTypeName = (code: string) => {
    const services: { [key: string]: string } = {
      'visa': 'Visa Services',
      'passport': 'Passport Services',
      'travel': 'Travel Services'
    };
    return services[code] || code;
  };

  const getUrgencyName = (code: string) => {
    const urgencies: { [key: string]: string } = {
      'low': 'Low - Within 30 days',
      'medium': 'Medium - Within 14 days',
      'high': 'High - Within 7 days',
      'urgent': 'Urgent - Within 48 hours'
    };
    return urgencies[code] || code;
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Yatri Guardian,

I have submitted a contact request and would like to discuss my requirements:

📋 Contact Request Details:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏢 Service Type: ${getServiceTypeName(formData.serviceType)}
📝 Specific Service: ${formData.subService}
📞 Preferred Contact: ${formData.contactMethod}
⚡ Urgency: ${getUrgencyName(formData.urgency)}

💬 Message:
${formData.message}

Please assist me with my requirements.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919136759842?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
  };

  const handleSkipWhatsApp = () => {
    setShowWhatsAppModal(false);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      
      {submitted ? (
        <div className="bg-success-50 text-success-700 p-4 rounded-lg flex items-start">
          <CheckCircle2 className="mr-2 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold">Message Sent Successfully!</h4>
            <p>Thank you for contacting us. Our team will get back to you within 24 hours. A confirmation email has been sent to {formData.email}.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="select"
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="visa">Visa Services</option>
                <option value="passport">Passport Services</option>
                <option value="travel">Travel Services</option>
              </select>
            </div>
            
            {formData.serviceType && (
              <div>
                <label htmlFor="subService" className="block text-sm font-medium text-gray-700 mb-1">
                  Specific Service *
                </label>
                <select
                  id="subService"
                  name="subService"
                  value={formData.subService}
                  onChange={handleChange}
                  className="select"
                  required
                >
                  <option value="" disabled>Select specific service</option>
                  {serviceOptions[formData.serviceType as keyof typeof serviceOptions]?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            <div>
              <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="select"
              >
                <option value="" disabled>Select contact method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="select"
              >
                <option value="" disabled>Select urgency</option>
                <option value="low">Low - Within 30 days</option>
                <option value="medium">Medium - Within 14 days</option>
                <option value="high">High - Within 7 days</option>
                <option value="urgent">Urgent - Within 48 hours</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="input resize-none"
              required
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="acceptPolicy"
                name="acceptPolicy"
                type="checkbox"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="acceptPolicy" className="text-gray-700">
                I agree to the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to the processing of my personal data.
              </label>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Request...
                </>
              ) : (
                <>
                  <Mail size={18} className="mr-2" />
                  Submit Request
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Share via WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Would you like to share your contact request details via WhatsApp for instant assistance?
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Request Details:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Service: {getServiceTypeName(formData.serviceType)}</li>
                <li>• Specific Service: {formData.subService}</li>
                <li>• Urgency: {getUrgencyName(formData.urgency)}</li>
                <li>• Contact: {formData.phone}</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleSkipWhatsApp}
                className="btn btn-outline"
              >
                Skip
              </button>
              <button
                onClick={handleWhatsAppShare}
                className="btn bg-green-500 hover:bg-green-600 text-white"
              >
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
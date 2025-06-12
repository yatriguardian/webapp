import React, { useState } from 'react';
import { Calendar, Clock, Users, Check, Mail } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [participantCount, setParticipantCount] = useState<number>(1);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });
  
  // Generate time slots
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;
    const interval = 60; // minutes
    
    for (let hour = startHour; hour < endHour; hour++) {
      const time = `${hour}:00`;
      slots.push({
        id: `slot-${hour}-00`,
        time,
        available: Math.random() > 0.3 // Randomly make some slots unavailable
      });
      
      if (interval === 30) {
        slots.push({
          id: `slot-${hour}-30`,
          time: `${hour}:30`,
          available: Math.random() > 0.3
        });
      }
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailAddress || !customerName || !phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsConfirming(true);
    
    try {
      const appointmentData = {
        to: emailAddress,
        cc: 'connect@yatriguardian.in',
        subject: 'Appointment Confirmation - Yatri Guardian',
        body: `
Dear ${customerName},

Your appointment has been successfully scheduled with Yatri Guardian.

Appointment Details:
- Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
- Time: ${selectedTime}
- Service: ${selectedService}
- Participants: ${participantCount}
- Contact: ${phoneNumber}

Please arrive 15 minutes before your scheduled time and bring all necessary documents.

Our office address:
1501, 2B Paradise Heights CHS,
MHADA Complex, Opp. Witty International School,
Chikuwadi, Borivali West,
Mumbai 400067

If you need to reschedule or have any questions, please contact us at:
Phone: +91 9136-759-842
Email: connect@yatriguardian.in

Thank you for choosing Yatri Guardian.

Best regards,
Yatri Guardian Team
        `
      };

      // Simulate email sending
      console.log('Sending appointment confirmation:', appointmentData);
      
      setTimeout(() => {
        setIsConfirmed(true);
        setIsConfirming(false);
        setShowEmailModal(false);
        // Show WhatsApp modal after confirmation
        setShowWhatsAppModal(true);
      }, 1500);
    } catch (error) {
      alert('Failed to confirm appointment. Please try again or contact us directly.');
      setIsConfirming(false);
    }
  };
  
  const handleReset = () => {
    setIsConfirmed(false);
    setSelectedDate('');
    setSelectedService('');
    setSelectedTime('');
    setParticipantCount(1);
    setEmailAddress('');
    setCustomerName('');
    setPhoneNumber('');
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Yatri Guardian,

I have scheduled an appointment and would like to confirm the details:

📅 Appointment Details:
📆 Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
🕐 Time: ${selectedTime}
🏢 Service: ${selectedService}
👥 Participants: ${participantCount}

👤 Contact Information:
📧 Name: ${customerName}
📧 Email: ${emailAddress}
📞 Phone: ${phoneNumber}

Please confirm my appointment and let me know if you need any additional information.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919136759842?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
  };

  const handleSkipWhatsApp = () => {
    setShowWhatsAppModal(false);
  };
  
  if (isConfirmed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-success-50 p-4 rounded-full">
              <Check size={36} className="text-success-500" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Appointment Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been scheduled successfully. A confirmation email has been sent to {emailAddress}.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <Calendar size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{selectedTime}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Users size={20} className="text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Participants</p>
                <p className="font-medium">{participantCount}</p>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{selectedService}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Please arrive 15 minutes before your scheduled time and bring all necessary documents.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-primary"
            >
              Schedule Another Appointment
            </button>
          </div>
        </div>

        {/* WhatsApp Modal */}
        {showWhatsAppModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Share via WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Would you like to share your appointment details via WhatsApp for instant confirmation?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Appointment Details:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Date: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                  <li>• Time: {selectedTime}</li>
                  <li>• Service: {selectedService}</li>
                  <li>• Name: {customerName}</li>
                  <li>• Phone: {phoneNumber}</li>
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
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Schedule an Appointment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="select"
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="Visa Consultation">Visa Consultation</option>
            <option value="Document Submission">Document Submission</option>
            <option value="Passport Services">Passport Services</option>
            <option value="Travel Planning">Travel Planning</option>
            <option value="Application Review">Application Review</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="select"
            required
          >
            <option value="" disabled>Select a date</option>
            {dates.map((date) => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </option>
            ))}
          </select>
        </div>
        
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-md transition-colors ${
                    selectedTime === slot.time
                      ? 'bg-primary-600 text-white'
                      : slot.available
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Participants
          </label>
          <select
            value={participantCount}
            onChange={(e) => setParticipantCount(parseInt(e.target.value))}
            className="select"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Please indicate how many people will be attending this appointment.
          </p>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!selectedDate || !selectedService || !selectedTime}
        >
          Confirm Appointment
        </button>
      </form>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Please provide your contact details to confirm the appointment.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="input"
                    placeholder="+919136759842"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailModal(false);
                    setEmailAddress('');
                    setCustomerName('');
                    setPhoneNumber('');
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isConfirming}
                >
                  {isConfirming ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Confirming...
                    </>
                  ) : (
                    <>
                      <Mail size={18} className="mr-2" />
                      Confirm Appointment
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
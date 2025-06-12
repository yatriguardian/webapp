import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, XCircle, AlertCircle, Download, Mail } from 'lucide-react';

interface RequirementResult {
  country: string;
  visaRequired: boolean;
  processingTime: string;
  validity: string;
  fees: string;
  documents: string[];
  additionalInfo?: string;
}

const VisaRequirementChecker: React.FC = () => {
  const [nationality, setNationality] = useState('');
  const [destination, setDestination] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<RequirementResult | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [actionType, setActionType] = useState<'download' | 'apply'>('download');

  useEffect(() => {
    // Check if there's stored data from the hero section
    const storedData = sessionStorage.getItem('visaRequirementData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setNationality(data.nationality);
      setDestination(data.destination);
      setPurpose(data.purpose);
      // Clear the stored data
      sessionStorage.removeItem('visaRequirementData');
      // Auto-submit the form
      handleSubmitWithData(data);
    }
  }, []);

  const handleSubmitWithData = (data: any) => {
    if (data.nationality && data.destination && data.purpose) {
      setIsSearching(true);
      
      setTimeout(() => {
        const mockResults: RequirementResult = {
          country: getCountryName(data.destination),
          visaRequired: data.destination !== 'th',
          processingTime: '5-15 business days',
          validity: '90 days',
          fees: 'USD 160',
          documents: [
            'Valid passport with at least 6 months validity',
            'Completed visa application form',
            'Recent passport-sized photographs',
            'Proof of sufficient funds',
            'Travel itinerary/flight bookings',
            'Hotel reservations',
            'Travel insurance'
          ],
          additionalInfo: data.purpose === 'business' ? 'Business invitation letter required' : undefined
        };
        
        setResult(mockResults);
        setIsSearching(false);
      }, 1500);
    }
  };

  const getCountryName = (code: string) => {
    const countries: { [key: string]: string } = {
      'us': 'United States',
      'ca': 'Canada',
      'uk': 'United Kingdom',
      'au': 'Australia',
      'de': 'Germany',
      'fr': 'France',
      'th': 'Thailand',
      'sg': 'Singapore',
      'ae': 'United Arab Emirates',
      'in': 'India'
    };
    return countries[code] || code;
  };

  const getPurposeName = (code: string) => {
    const purposes: { [key: string]: string } = {
      'tourism': 'Tourism',
      'business': 'Business',
      'study': 'Study',
      'work': 'Work',
      'family': 'Family Visit',
      'medical': 'Medical'
    };
    return purposes[code] || code;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nationality && destination && purpose) {
      setIsSearching(true);
      
      setTimeout(() => {
        const mockResults: RequirementResult = {
          country: getCountryName(destination),
          visaRequired: destination !== 'th',
          processingTime: '5-15 business days',
          validity: '90 days',
          fees: 'USD 160',
          documents: [
            'Valid passport with at least 6 months validity',
            'Completed visa application form',
            'Recent passport-sized photographs',
            'Proof of sufficient funds',
            'Travel itinerary/flight bookings',
            'Hotel reservations',
            'Travel insurance'
          ],
          additionalInfo: purpose === 'business' ? 'Business invitation letter required' : undefined
        };
        
        setResult(mockResults);
        setIsSearching(false);
      }, 1500);
    }
  };

  const handleDownloadRequirements = () => {
    setActionType('download');
    setShowEmailModal(true);
  };

  const handleApplyForVisa = () => {
    setActionType('apply');
    setShowEmailModal(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailAddress) {
      alert('Please enter your email address.');
      return;
    }

    try {
      const emailData = {
        to: emailAddress,
        cc: 'connect@yatriguardian.in',
        subject: actionType === 'download' 
          ? `Visa Requirements for ${result?.country}` 
          : `Visa Application Request for ${result?.country}`,
        body: `
Dear Customer,

Thank you for your interest in visa services for ${result?.country}.

Visa Requirements Summary:
- Destination: ${result?.country}
- Visa Required: ${result?.visaRequired ? 'Yes' : 'No'}
- Processing Time: ${result?.processingTime}
- Validity: ${result?.validity}
- Fees: ${result?.fees}

Required Documents:
${result?.documents.map(doc => `• ${doc}`).join('\n')}

${result?.additionalInfo ? `Additional Information: ${result.additionalInfo}` : ''}

${actionType === 'apply' 
  ? 'We will contact you shortly to begin your visa application process.' 
  : 'Please find the detailed requirements above.'}

Best regards,
Yatri Guardian Team
connect@yatriguardian.in
+91 9136-759-842
        `
      };

      // Simulate email sending
      console.log('Sending email:', emailData);
      
      // Show success message
      alert(actionType === 'download' 
        ? 'Requirements have been sent to your email address!' 
        : 'Your visa application request has been submitted. We will contact you shortly.');
      
      setShowEmailModal(false);
      setEmailAddress('');
      
      // Show WhatsApp modal after email success
      setShowWhatsAppModal(true);
    } catch (error) {
      alert('Failed to send email. Please try again or contact us directly.');
    }
  };

  const handleWhatsAppShare = () => {
    const message = actionType === 'download' 
      ? `Hello Yatri Guardian,

I have downloaded the visa requirements for ${result?.country} and would like to discuss the process further.

📋 Visa Requirements Summary:
🎯 Destination: ${result?.country}
📝 Visa Required: ${result?.visaRequired ? 'Yes' : 'No'}
⏱️ Processing Time: ${result?.processingTime}
📅 Validity: ${result?.validity}
💰 Fees: ${result?.fees}

📧 Email: ${emailAddress}

Please assist me with the visa application process.

Thank you!`
      : `Hello Yatri Guardian,

I would like to apply for a visa to ${result?.country}. Here are my details:

📋 Application Details:
🎯 Destination: ${result?.country}
📝 Visa Required: ${result?.visaRequired ? 'Yes' : 'No'}
⏱️ Processing Time: ${result?.processingTime}
💰 Fees: ${result?.fees}

📧 Email: ${emailAddress}

Please help me start the visa application process.

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
      <h2 className="text-2xl font-semibold mb-6">Visa Requirement Checker</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Nationality
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="select"
              required
            >
              <option value="">Select your country</option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Country
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="select"
              required
            >
              <option value="">Select destination</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="ae">United Arab Emirates</option>
              <option value="sg">Singapore</option>
              <option value="th">Thailand</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Travel
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="select"
              required
            >
              <option value="">Select purpose</option>
              <option value="tourism">Tourism</option>
              <option value="business">Business</option>
              <option value="study">Study</option>
              <option value="work">Work</option>
              <option value="family">Family Visit</option>
              <option value="medical">Medical</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary mt-6"
          disabled={isSearching || !nationality || !destination || !purpose}
        >
          {isSearching ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking Requirements...
            </>
          ) : (
            <>
              <Search size={18} className="mr-2" />
              Check Requirements
            </>
          )}
        </button>
      </form>
      
      {result && (
        <div className="border border-gray-200 rounded-lg p-6 mt-8 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Visa Requirements for {result.country}</h3>
            <div className="flex items-center">
              {result.visaRequired ? (
                <div className="flex items-center text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  <AlertCircle size={16} className="mr-1" />
                  <span className="text-sm font-medium">Visa Required</span>
                </div>
              ) : (
                <div className="flex items-center text-success-700 bg-success-50 px-3 py-1 rounded-full">
                  <CheckCircle2 size={16} className="mr-1" />
                  <span className="text-sm font-medium">Visa-Free Entry</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Processing Time</h4>
              <p>{result.processingTime}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Validity</h4>
              <p>{result.validity}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Visa Fees</h4>
              <p>{result.fees}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-md font-medium mb-3">Required Documents</h4>
            <ul className="space-y-2">
              {result.documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={18} className="text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {result.additionalInfo && (
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded mb-6">
              <h4 className="text-md font-medium mb-1">Additional Information</h4>
              <p>{result.additionalInfo}</p>
            </div>
          )}
          
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleDownloadRequirements}
              className="btn btn-outline"
            >
              <Download size={18} className="mr-2" />
              Download Requirements
            </button>
            <button
              onClick={handleApplyForVisa}
              className="btn btn-primary"
            >
              <Mail size={18} className="mr-2" />
              Apply for Visa
            </button>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">
              {actionType === 'download' ? 'Download Requirements' : 'Apply for Visa'}
            </h3>
            <p className="text-gray-600 mb-4">
              Please enter your email address to {actionType === 'download' ? 'receive the requirements' : 'proceed with your visa application'}.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
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
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailModal(false);
                    setEmailAddress('');
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {actionType === 'download' ? 'Send Requirements' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Share via WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Would you like to share your {actionType === 'download' ? 'requirements' : 'application'} details via WhatsApp for instant assistance?
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Details to Share:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Destination: {result?.country}</li>
                <li>• Email: {emailAddress}</li>
                <li>• Action: {actionType === 'download' ? 'Download Requirements' : 'Apply for Visa'}</li>
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

export default VisaRequirementChecker;